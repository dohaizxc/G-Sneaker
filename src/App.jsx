import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import product from "./data/shoes.json";
import nike from "./assets/nike.png";

import { ProductDetails } from "./components/ProductDetails";
import { ProductQuantity } from "./components/ProductQuantity";

const products = product.shoes;

function App() {
  const [cart, setCart] = useState(null);

  const totalPrice = useMemo(() => {
    if (cart) {
      let results = 0;
      for (let i = 0; i < cart.length; i++) {
        results += cart[i].quantity * cart[i].price;
      }
      return results;
    } else return 0;
  }, [cart]);

  const checkCart = (product) => {
    if (cart) {
      return cart.findIndex((item) => item.id === product.id) != -1;
    } else return false;
  };

  useEffect(() => {
    const object = localStorage.getItem("cart");
    if (object) {
      const historyCart = JSON.parse(object);
      setCart(historyCart);
    }
  }, []);

  return (
    <div className="w-full h-[600px] font-rubik text-[#303841] slider-thumb">
      <div className="flex flex-col min-[900px]:flex-row gap-10 justify-center items-center min-[900px]:py-0 py-5 ">
        <div className="relative bg-white w-[360px] h-[600px] rounded-3xl px-7 overflow-hidden drop-shadow-2xl">
          <div className="absolute left-[-50%] top-[-20%] bg-[#F6C90E] w-[300px] h-[300px] rounded-full" />
          <div className="absolute top-0 left-7">
            <img src={nike} className="h-[26px] w-[50px] my-3" />
            <h1 className="font-bold text-2xl my-4">Our Products</h1>
          </div>
          <div className="absolute top-[102px] left-7 w-[304px] h-[498px] space-y-20 py-20 scroll">
            {products.map((product) => (
              <ProductDetails
                key={product.id}
                product={product}
                isSelected={checkCart(product)}
                setCart={setCart}
                cart={cart}
              />
            ))}
          </div>
        </div>

        <div className="relative bg-white w-[360px] h-[600px] rounded-3xl px-7 overflow-hidden drop-shadow-2xl">
          <div className="absolute left-[-50%] top-[-20%] bg-[#F6C90E] w-[300px] h-[300px] rounded-full" />
          <div className="absolute top-0 left-7 w-[304px]">
            <img src={nike} className="h-[26px] w-[50px] my-3" />
            <div className="flex justify-between font-bold text-2xl text-[#303841] my-4">
              <div>Your cart</div>
              <div>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(totalPrice)}
              </div>
            </div>
          </div>
          {totalPrice !== 0 ? (
            <div className="absolute top-[102px] left-7 w-[304px] h-[498px] scroll">
              {cart.map((product) => (
                <ProductQuantity
                  key={product.id}
                  product={product}
                  setCart={setCart}
                />
              ))}
            </div>
          ) : (
            <p className="absolute top-[102px] left-7 w-[304px] font-thin text-sm my-[14px]">
              Your cart is empty.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
