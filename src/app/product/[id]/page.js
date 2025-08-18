import React from "react";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import RatingStars from "@/components/RatingStars";
import AddToCartButton from "./parts";

export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

const ProductDetail = async ({ params }) => {
  const { id } = params; 
  const product = products.find((p) => String(p.id) === id);

  if (!product) return notFound();

  return (
    <div className="grid lg:grid-cols-2 gap-8 mt-4">
      <div className="card p-6 grid place-items-center">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain h-96"
        />
      </div>
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl text-[#002B5A] font-bold">{product.title}</h1>
          <div className="text-3xl font-extrabold text-[#002B5A]">
            ${product.price}
          </div>
          <RatingStars value={product.rating} />
          <p className="text-black leading-relaxed">{product.description}</p>
          <div className="text-black">Category: {product.category}</div>
        </div>

        <div>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
