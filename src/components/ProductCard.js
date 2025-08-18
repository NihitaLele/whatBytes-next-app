"use client";
import React from "react";
import Link from "next/link";
import RatingStars from "./RatingStars";
import { useCart } from "@/context/CartContext";

const ProductCard = ({ p }) => {
  const { add } = useCart();
  return (
    <div className="card overflow-hidden">
      <Link href={`/product/${p.id}`} className="block p-4">
        <div className="aspect-[4/3] grid place-items-center bg-slate-50 rounded-xl overflow-hidden">
          <img src={p.image} alt={p.title} className="object-contain h-40" />
        </div>
        <div className="mt-3 space-y-1">
          <h4 className="font-semibold">{p.title}</h4>
          <div className="font-bold">${p.price}</div>
          <RatingStars value={p.rating} />
        </div>
      </Link>
      <div className="p-4 pt-0">
        <button className="btn-primary bg-[#0062BA] text-white rounded-md p-2 w-full cursor-pointer" onClick={() => add(p, 1)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
