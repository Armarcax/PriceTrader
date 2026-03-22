import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("API Error:", error);
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
              products.map(p => (
                <div key={p.id} className="card">
                  <h3>{p.name}</h3>
                  <div className="price">{p.price} $</div>
                  <div className="store">{p.store}</div>
                  <a href={p.url} className="btn">Գնել</a>
                </div>
              ))
            ) : (
              <p>Տվյալներ չգտնվեցին:</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}