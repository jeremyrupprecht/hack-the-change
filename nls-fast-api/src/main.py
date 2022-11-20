import requests
from fastapi import Request, FastAPI
from helpers import *
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()


origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3030",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/{userId}/polls/{pollId}")
async def get_body(request: Request):
    req_body = await request.json()
    payload = req_body["response"]
    result = query(payload)
    required_response = result["choices"]

    #Parse Text
    text = required_response[0]["text"].replace("\n\n", "")
    list = text.split("|")
    list_stripped = [item.strip() for item in list]

    #Create JSON
    description = {
        "method": list_stripped[0],
        "feeling": list_stripped[1],
        "sentiment": list_stripped[2],
        "reason": list_stripped[3]
    }

    json_result = {
        "pollId": req_body["pollId"],
        "userId": req_body["userId"],
        "response": req_body["response"],
        "description": description
    }
    print(json_result)
    requests.post("http://localhost:3000/api/responses", json = json_result)
    return json_result
    