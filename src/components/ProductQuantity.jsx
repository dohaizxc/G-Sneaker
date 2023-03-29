import React from "react";
import trash from "../assets/trash.png";
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";

export const ProductQuantity = ({ product, setCart }) => {
  const handleRemovetoCartClick = () => {
    setCart((preCart) => {
      let newCart = JSON.parse(JSON.stringify(preCart));
      const index = newCart.findIndex((item) => item.id === product.id);
      newCart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const handleIncreaseQuantity = () => {
    setCart((preCart) => {
      let newCart = JSON.parse(JSON.stringify(preCart));
      const index = newCart.findIndex((item) => item.id === product.id);
      newCart[index].quantity += 1;
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const handleDecreaseQuantity = () => {
    if (product.quantity > 1)
      setCart((preCart) => {
        let newCart = JSON.parse(JSON.stringify(preCart));
        const index = newCart.findIndex((item) => item.id === product.id);
        newCart[index].quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
      });
    else handleRemovetoCartClick();
  };

  return (
    <div id={product.id} className="animate-scale">
      <div className="flex py-5">
        <div className="relative w-[124px]">
          <div
            className="w-[90px] h-[90px] rounded-full"
            style={{ backgroundColor: product.color }}
          ></div>
          <img
            src={product.image}
            className="absolute -top-8 -left-5 -rotate-28"
          />
        </div>
        <div className="w-[180px]">
          <h1 className="font-bold text-sm mb-[10px]">{product.name}</h1>
          <p className="text-lg font-bold mb-4">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </p>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <button
                className="h-6 w-6 bg-[#e1e7ed] flex justify-center items-center rounded-full"
                onClick={handleDecreaseQuantity}
              >
                <img src={minus} className="h-2 w-2" />
              </button>
              <p className="text-sm w-5 font-light text-center mx-2">
                {product.quantity}
              </p>
              <button
                className="h-6 w-6 bg-[#e1e7ed] flex justify-center items-center rounded-full"
                onClick={handleIncreaseQuantity}
              >
                <img src={plus} className="h-2 w-2" />
              </button>
            </div>
            <button
              className="h-6 w-6 bg-[#F6C90E] flex justify-center items-center rounded-full"
              onClick={() => {
                document
                  .getElementById(product.id)
                  .classList.add("animate-scaleout");
                setTimeout(handleRemovetoCartClick(), 10000);
              }}
            >
              <img src={trash} className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
