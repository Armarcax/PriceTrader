from fastapi import FastAPI

app = FastAPI()

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
    return {"message": "PriceTrader API is running"}

handler = app
