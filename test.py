import requests

print(requests.post("http://localhost:3000",json={
    "hello":"babay"
}).json())

print(
    requests.get(
        "http://localhost:3000"
    ).json()
)