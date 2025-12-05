from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from .. import models, schemas
from ..database import get_db
from ..deps import get_current_user

router = APIRouter(prefix="/tasks", tags=["tasks"])


@router.get("/", response_model=List[schemas.TaskRead])
def get_tasks(
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user),
):
    tasks = (
        db.query(models.Task)
        .filter(models.Task.owner_id == current_user.id)
        .order_by(models.Task.id)
        .all()
    )
    return tasks


@router.post("/{task_id}/toggle", response_model=schemas.TaskRead)
def toggle_task(
    task_id: int,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user),
):
    task = (
        db.query(models.Task)
        .filter(
            models.Task.id == task_id,
            models.Task.owner_id == current_user.id,
        )
        .first()
    )
    if not task:
        from fastapi import HTTPException

        raise HTTPException(status_code=404, detail="Задача не найдена")

    task.done = not task.done
    db.add(task)
    db.commit()
    db.refresh(task)
    return task
