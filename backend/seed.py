from app.database import SessionLocal, engine
from app import models, auth

# Recreate tables to ensure schema is fresh
models.Base.metadata.drop_all(bind=engine)
models.Base.metadata.create_all(bind=engine)

def seed():
    db = SessionLocal()
    try:
        # Add Users
        admin_user = models.User(username="admin", hashed_password=auth.get_password_hash("admin123"), role="ADMIN")
        vet_user = models.User(username="vet_dr_anjali", hashed_password=auth.get_password_hash("vet123"), role="VET")
        farmer_user = models.User(username="farmer_aman", hashed_password=auth.get_password_hash("farmer123"), role="USER")
        db.add_all([admin_user, vet_user, farmer_user])
        db.commit()

        # Add Farmers
        f1 = models.Farmer(name="Aman Singh", location="Ambala, HR", contact="9876543210", status="Active")
        f2 = models.Farmer(name="Rajesh Patil", location="Karnal, HR", contact="9876543211", status="Active")
        f3 = models.Farmer(name="Sunita Devi", location="Rohtak, HR", contact="9876543212", status="Active")
        db.add_all([f1, f2, f3])
        db.commit()
        
        # Add Animals
        a1 = models.Animal(tag_id="#TAG-88", species="Cow", breed="Gir", health_status="Healthy", recent_diagnosis="Routine Checkup - Clear", farmer_id=f1.id)
        a2 = models.Animal(tag_id="#TAG-42", species="Buffalo", breed="Murrah", health_status="Critical", recent_diagnosis="HS Infection detected by AI", farmer_id=f2.id)
        a3 = models.Animal(tag_id="#TAG-15", species="Goat", breed="Jamnapari", health_status="Monitoring", recent_diagnosis="Mild fever, nutritional gap", farmer_id=f3.id)
        db.add_all([a1, a2, a3])
        db.commit()

        # Add Consultations
        c1 = models.Consultation(ticket_id="C-12", animal_id=a1.id, farmer_id=f1.id, symptom="Reduced milk yield", diagnosis="Mastitis Risk (92%)", status="Active")
        c2 = models.Consultation(ticket_id="G-08", animal_id=a3.id, farmer_id=f3.id, symptom="Loss of appetite", diagnosis="Nutritional Gap", status="Resolved")
        c3 = models.Consultation(ticket_id="B-45", animal_id=a2.id, farmer_id=f2.id, symptom="Fever & lethargy", diagnosis="HS Infection (High)", status="Critical")
        db.add_all([c1, c2, c3])
        db.commit()
        
        # Add AI Alerts
        al1 = models.AIAlert(alert_id="AI-8821", farm="Patil Dairy", tag_id="#TAG-42", type="Health Anomaly", confidence=94.0, time_label="2 mins ago", status="Critical", description="Thermal camera detects elevated body temperature. Potential HS Infection.")
        al2 = models.AIAlert(alert_id="AI-8820", farm="Sunita Farm", tag_id="#TAG-15", type="Behavioral Shift", confidence=82.0, time_label="15 mins ago", status="Warning", description="Reduced feeding activity detected over the last 6 hours.")
        db.add_all([al1, al2])
        db.commit()
        
        print("✅ Database seeded successfully with initial dummy data!")
    finally:
        db.close()

if __name__ == "__main__":
    seed()
