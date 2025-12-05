from pydantic import BaseModel, EmailStr
from typing import Optional
from .models import TaskPriority, UserRole


class UserBase(BaseModel):
    email: EmailStr
    full_name: Optional[str] = None


class UserCreate(UserBase):
    password: str
    role: UserRole = UserRole.intern


class UserRead(UserBase):
    id: int
    role: UserRole

    class Config:
        from_attributes = True


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"


class TokenData(BaseModel):
    user_id: int
    role: UserRole


class TaskBase(BaseModel):
    title: str
    time: Optional[str] = None
    priority: TaskPriority = TaskPriority.medium


class TaskCreate(TaskBase):
    pass


class TaskRead(TaskBase):
    id: int
    done: bool

    class Config:
        from_attributes = True
