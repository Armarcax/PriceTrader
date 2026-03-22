from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Product(BaseModel):
    id: int
    name: str
    price: float
    store: str
    url: str

# Այս ֆունկցիան կպատասխանի /api/products հարցմանը
@app.get("/products")
async def get_products():
    return [
        {"id": 1, "name": "iPhone 15", "price": 999.0, "store": "Store A", "url": "#"},
        {"id": 2, "name": "iPhone 15", "price": 980.0, "store": "Store B", "url": "#"},
        {"id": 3, "name": "Samsung S24", "price": 899.0, "store": "Store A", "url": "#"},
        {"id": 4, "name": "Samsung S24", "price": 910.0, "store": "Store C", "url": "#"},
    ]

@app.get("/")
async def root():
    return {"message": "PriceTrader API is running on Vercel"}

# Vercel-ի համար անհրաժեշտ handler
handler = app