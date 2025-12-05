from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import Base, engine
from . import models
from .auth import router as auth_router
from .routers import tasks as tasks_router
from .routers import ai as ai_router

# создаём таблицы
Base.metadata.create_all(bind=engine)

app = FastAPI(title="SkillOnBoard API")

# CORS для фронта
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(tasks_router.router)
app.include_router(ai_router.router)
