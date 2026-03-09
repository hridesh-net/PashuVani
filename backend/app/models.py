from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime
from sqlalchemy.orm import relationship
import datetime
from .database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    role = Column(String, default="USER")

class Farmer(Base):
    __tablename__ = "farmers"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    location = Column(String)
    contact = Column(String)
    status = Column(String)
    
    animals = relationship("Animal", back_populates="farmer")
    consultations = relationship("Consultation", back_populates="farmer")

class Animal(Base):
    __tablename__ = "animals"
    id = Column(Integer, primary_key=True, index=True)
    tag_id = Column(String, unique=True, index=True)
    species = Column(String)
    breed = Column(String)
    health_status = Column(String)
    recent_diagnosis = Column(String, nullable=True)
    farmer_id = Column(Integer, ForeignKey("farmers.id"))
    
    farmer = relationship("Farmer", back_populates="animals")
    consultations = relationship("Consultation", back_populates="animal")

class Consultation(Base):
    __tablename__ = "consultations"
    id = Column(Integer, primary_key=True, index=True)
    ticket_id = Column(String, unique=True, index=True)
    animal_id = Column(Integer, ForeignKey("animals.id"))
    farmer_id = Column(Integer, ForeignKey("farmers.id"))
    symptom = Column(String)
    diagnosis = Column(String)
    status = Column(String)
    date = Column(DateTime, default=datetime.datetime.utcnow)
    
    farmer = relationship("Farmer", back_populates="consultations")
    animal = relationship("Animal", back_populates="consultations")

class AIAlert(Base):
    __tablename__ = "ai_alerts"
    id = Column(Integer, primary_key=True, index=True)
    alert_id = Column(String, unique=True, index=True)
    farm = Column(String)
    tag_id = Column(String)
    type = Column(String)
    confidence = Column(Float)
    time_label = Column(String)
    status = Column(String)
    description = Column(String)
