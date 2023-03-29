import React from "react";
import check from "../assets/check.png";

export const ProductDetails = ({ product, isSelected, setCart }) => {
  const handleAddtoCartClick = () => {
    product["quantity"] = 1;
    setCart((preCart) => {
      if (preCart) {
        let newCart = JSON.parse(JSON.stringify(preCart));
        newCart.push(product);
        localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
      } else {
        localStorage.setItem("cart", JSON.stringify([product]));
        return [product];
      }
    });
  };

  return (
    <div>
      <div
        className="h-[304px] w-full rounded-[30px] relative"
        style={{ backgroundColor: product.color }}
      >
        <img
          src={product.image}
          className="-rotate-24 absolute bottom-0 -left-5 drop-shadow-2xl"
        />
      </div>
      <h1 className="font-bold text-xl my-[26px]">{product.name}</h1>
      <p className="mb-5 font-thin text-[13px] leading-6">
        {product.description}
      </p>
      <div className="flex justify-between items-center">
        <p className="text-lg font-bold">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </p>

        {isSelected ? (
          <button className="h-[46px] w-[46px] bg-[#F6C90E] flex justify-center items-center rounded-full">
            <img src={check} className="h-5 w-5" />
          </button>
        ) : (
          <button
            className="font-bold px-5 py-4 bg-[#F6C90E] rounded-3xl text-sm"
            onClick={handleAddtoCartClick}
          >
            ADD TO CART
          </button>
        )}
      </div>
    </div>
  );
};
