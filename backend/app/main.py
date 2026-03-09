from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from typing import List
from datetime import timedelta
from fastapi.middleware.cors import CORSMiddleware

from . import models, schemas, auth
from .database import SessionLocal, engine, get_db

# Create basic database tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="PashuVaani API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": "ok", "message": "Welcome to PashuVaani API"}

@app.post("/api/token", response_model=schemas.Token)
def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = auth.get_user(db, username=form_data.username)
    if not user or not auth.verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=auth.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = auth.create_access_token(
        data={"sub": user.username, "role": user.role}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/api/users/me", response_model=schemas.UserResponse)
def read_users_me(current_user: models.User = Depends(auth.get_current_active_user)):
    return current_user

@app.get("/api/farmers", response_model=List[schemas.Farmer])
def get_farmers(skip: int = 0, limit: int = 100, db: Session = Depends(get_db), current_user: models.User = Depends(auth.get_current_active_user)):
    return db.query(models.Farmer).offset(skip).limit(limit).all()

@app.post("/api/farmers", response_model=schemas.Farmer)
def create_farmer(farmer: schemas.FarmerCreate, db: Session = Depends(get_db), current_user: models.User = Depends(auth.RequireRole(["ADMIN", "VET"]))):
    db_farmer = models.Farmer(**farmer.model_dump())
    db.add(db_farmer)
    db.commit()
    db.refresh(db_farmer)
    return db_farmer

@app.get("/api/animals", response_model=List[schemas.Animal])
def get_animals(skip: int = 0, limit: int = 100, db: Session = Depends(get_db), current_user: models.User = Depends(auth.get_current_active_user)):
    return db.query(models.Animal).offset(skip).limit(limit).all()

@app.post("/api/animals", response_model=schemas.Animal)
def create_animal(animal: schemas.AnimalCreate, db: Session = Depends(get_db), current_user: models.User = Depends(auth.RequireRole(["ADMIN", "VET"]))):
    db_animal = models.Animal(**animal.model_dump())
    db.add(db_animal)
    db.commit()
    db.refresh(db_animal)
    return db_animal

@app.get("/api/consultations", response_model=List[schemas.ConsultationResponse])
def get_consultations(skip: int = 0, limit: int = 100, db: Session = Depends(get_db), current_user: models.User = Depends(auth.get_current_active_user)):
    consultations = db.query(models.Consultation).offset(skip).limit(limit).all()
    result = []
    for c in consultations:
        res = schemas.ConsultationResponse(
            **c.__dict__,
            animal_tag=c.animal.tag_id if c.animal else None,
            animal_species=c.animal.species if c.animal else None,
            farmer_name=c.farmer.name if c.farmer else None
        )
        result.append(res)
    return result

@app.post("/api/consultations", response_model=schemas.ConsultationResponse)
def create_consultation(consult: schemas.ConsultationCreate, db: Session = Depends(get_db), current_user: models.User = Depends(auth.get_current_active_user)):
    db_consult = models.Consultation(**consult.model_dump())
    db.add(db_consult)
    db.commit()
    db.refresh(db_consult)
    
    # Reload with relationships
    c = db.query(models.Consultation).filter(models.Consultation.id == db_consult.id).first()
    return schemas.ConsultationResponse(
        **c.__dict__,
        animal_tag=c.animal.tag_id if c.animal else None,
        animal_species=c.animal.species if c.animal else None,
        farmer_name=c.farmer.name if c.farmer else None
    )

@app.get("/api/alerts", response_model=List[schemas.AIAlert])
def get_alerts(skip: int = 0, limit: int = 100, db: Session = Depends(get_db), current_user: models.User = Depends(auth.get_current_active_user)):
    return db.query(models.AIAlert).offset(skip).limit(limit).all()

@app.post("/api/alerts", response_model=schemas.AIAlert)
def create_alert(alert: schemas.AIAlertCreate, db: Session = Depends(get_db), current_user: models.User = Depends(auth.RequireRole(["ADMIN"]))):
    db_alert = models.AIAlert(**alert.model_dump())
    db.add(db_alert)
    db.commit()
    db.refresh(db_alert)
    return db_alert
