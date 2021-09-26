from fastapi import APIRouter

auth = APIRouter(prefix="/api/v1/auth")


@auth.get("/signin")
async def signin():
  return {"msg": "hello from /auth/v1/signin"}
