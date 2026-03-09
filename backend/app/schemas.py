from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None
    role: Optional[str] = None

class UserBase(BaseModel):
    username: str
    role: Optional[str] = "USER"

class UserCreate(UserBase):
    password: str

class UserResponse(UserBase):
    id: int
    class Config:
        from_attributes = True

class FarmerBase(BaseModel):
    name: str
    location: str
    contact: str
    status: str

class FarmerCreate(FarmerBase):
    pass

class Farmer(FarmerBase):
    id: int
    class Config:
        from_attributes = True

class AnimalBase(BaseModel):
    tag_id: str
    species: str
    breed: str
    health_status: str
    recent_diagnosis: Optional[str] = None
    farmer_id: int

class AnimalCreate(AnimalBase):
    pass

class Animal(AnimalBase):
    id: int
    class Config:
        from_attributes = True

class ConsultationBase(BaseModel):
    ticket_id: str
    animal_id: int
    farmer_id: int
    symptom: str
    diagnosis: str
    status: str

class ConsultationCreate(ConsultationBase):
    pass

class ConsultationResponse(ConsultationBase):
    id: int
    date: datetime
    animal_tag: Optional[str] = None
    animal_species: Optional[str] = None
    farmer_name: Optional[str] = None
    
    class Config:
        from_attributes = True

class AIAlertBase(BaseModel):
    alert_id: str
    farm: str
    tag_id: str
    type: str
    confidence: float
    time_label: str
    status: str
    description: str

class AIAlertCreate(AIAlertBase):
    pass

class AIAlert(AIAlertBase):
    id: int
    class Config:
        from_attributes = True
