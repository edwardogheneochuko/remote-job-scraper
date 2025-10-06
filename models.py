from sqlalchemy import Column, Integer, String, DateTime, Text, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

Base = declarative_base()

class Job(Base):
    __tablename__ = "jobs"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    company = Column(String)
    location = Column(String)
    tags = Column(String)     # store comma-separated tags
    url = Column(String)
    date = Column(String)
    description = Column(Text)
    scraped_at = Column(DateTime, default=datetime.datetime.utcnow)

DATABASE_URL = "sqlite:///./jobs.db"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)

def init_db():
    Base.metadata.create_all(engine)
