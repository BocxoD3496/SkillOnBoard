from fastapi import APIRouter, Depends
from pydantic import BaseModel

from ..deps import get_current_user
from .. import models


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    answer: str


router = APIRouter(prefix="/ai", tags=["ai"])


@router.post("/chat", response_model=ChatResponse)
def ai_chat(
    req: ChatRequest,
    current_user: models.User = Depends(get_current_user),
):
    # Здесь позже подключим твою gpt-oss-20b
    answer = (
        f"Я пока демо-ассистент. Ты спросил: «{req.message}».\n\n"
        f"В боевой версии я буду отвечать на основе материалов компании "
        f"и твоего прогресса онбординга."
    )
    return ChatResponse(answer=answer)
