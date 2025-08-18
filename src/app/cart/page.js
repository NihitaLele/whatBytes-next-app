"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import React from "react";

const CartPage = () => {
  const { items, setQty, remove, clear, summary } = useCart();

  return (
    <div>
      {items.length === 0 ? (
        <div className="card p-8 text-center">
          <p>Your cart is empty.</p>
          <Link className="btn-primary mt-4 inline-block" href="/">
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-[1fr_320px] gap-6">
          <div className="space-y-3">
            {items.map((p) => (
              <div key={p.id} className="card p-4 flex gap-4 items-center">
                <img
                  src={p.image}
                  alt=""
                  className="h-20 w-20 object-contain"
                />
                <div className="flex-1">
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm text-slate-500">
                    ${p.price} • {p.category}
                  </div>
                </div>
                <input
                  type="number"
                  min={1}
                  value={p.qty}
                  onChange={(e) =>
                    setQty(p.id, parseInt(e.target.value || "1", 10))
                  }
                  className="input w-20 border border-gray-300 rounded-md p-1"
                />
                <button
                  className="btn-muted border border-[#0758A8] bg-[#0758A8] text-white rounded-md px-2 py-1 cursor-pointer"
                  onClick={() => remove(p.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <aside className="card p-4 h-max sticky top-4 ">
            <h3 className="text-lg font-semibold mb-3">Summary</h3>
            <div className="flex justify-between py-1">
              <span>Items</span>
              <span>{summary.count}</span>
            </div>
            <div className="flex justify-between py-1 font-bold">
              <span>Subtotal</span>
              <span>${summary.subtotal.toFixed(2)}</span>
            </div>
            <div className="w-full mt-2">
              <button className="w-full bg-[#0758A8] text-white rounded-md px-4 py-2 cursor-pointer">
                Checkout
              </button>
            </div>

            <div className="w-full mt-2">
              <button
                onClick={clear}
                className="w-full border border-[#0758A8] text-[#0758A8] bg-white rounded-md px-4 py-2 cursor-pointer`"
              >
                Clear cart
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default CartPage;
