from sqlalchemy import Column, Integer, String, Boolean, DateTime,ForeignKey
from backend.database.connection import Base


class Review(Base):
    __tablename__ = "reviews"

    id = Column(Integer, primary_key=True, index=True)  # ✅ 기본 키 설정
    match_id = Column(Integer, ForeignKey("matches.id"), nullable=False)
    rating = Column(Integer, nullable=False)
    comment = Column(String, nullable=False)
    clean = Column(Boolean, default=False)
    interaction = Column(Boolean, default=False)  # ✅ 기존 `relationship` → `interaction` 수정
    situation_shared = Column(Boolean, default=False)