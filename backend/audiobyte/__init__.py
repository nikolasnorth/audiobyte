from fastapi import FastAPI

from .api.auth.routes import auth as auth_router

app = FastAPI()

app.include_router(auth_router)


@app.get("/")
async def root():
  return None
