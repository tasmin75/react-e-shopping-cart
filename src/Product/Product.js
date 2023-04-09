import React, { useState, useEffect } from "react";
import style from "./Product.module.css";

function Product() {
  const [Product, setProduct] = useState([]);
  async function fetchData() {
    const res = await fetch("https://fakestoreapi.com/products ");
    const data = await res.json();
    console.log(data);
    const dlt = data.splice(14, 1);
    setProduct(data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={style.container}>
      {Product.map((item, index) => {
        return (
          <div className={style.cart}>
            <img src={item.image} alt="image" />
            <div className={style.details}>
              <h2>{item.title}</h2>
              
              <h4>{item.category}</h4>
              <div className={style.rate}>
                <p>₹{item.price}</p>
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
