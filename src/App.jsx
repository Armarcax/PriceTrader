import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Սա կաշխատի և՛ տեղական, և՛ Vercel-ում, քանի որ օգտագործում ենք հարաբերական ճանապարհ
    axios.get('/api/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <header>
        <h1>PriceTrader</h1>
        <p>Գների Համեմատության Հարթակ</p>
      </header>
      
      <main>
        {loading ? (
          <p>Բեռնվում է...</p>
        ) : (
          <div className="product-grid">
            {products.length > 0 ? (
              products.map(product => (
                <div key={product.id} className="card">
                  <h3>{product.name}</h3>
                  <div className="price">{product.price} $</div>
                  <div className="store">{product.store}</div>
                  <a href={product.url} className="btn">Գնել</a>
                </div>
              ))
            ) : (
              <p>Տվյալներ չեն գտնվել:</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}