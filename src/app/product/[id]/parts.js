"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import React from "react";

const AddToCartButton = ({ product }) => {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  return (
    <div className="flex items-center gap-3">
      <input
        type="number"
        min={1}
        value={qty}
        onChange={(e) => setQty(parseInt(e.target.value || "1", 10))}
        className="input w-24 border border-gray-300 rounded-md p-1"
      />
      <button className=" bg-[#0062BA] text-white rounded-md p-1 px-7 cursor-pointer" onClick={() => add(product, qty)}>
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
