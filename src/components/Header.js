"use client";

import Link from "next/link";
import { ShoppingCart, Search, User2 } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import React from "react";

const Header = () => {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();
  const [q, setQ] = useState(params.get("q") || "");

  useEffect(() => setQ(params.get("q") || ""), [params]);

  const onSubmit = (e) => {
    e.preventDefault();
    const sp = new URLSearchParams(params.toString());
    if (q) sp.set("q", q);
    else sp.delete("q");
    router.push(`${pathname}?${sp.toString()}`);
  };

  return (
    <header className="bg-[#0758A8] text-white">
      <div className="p-4 px-9 flex justify-between items-center gap-4">
        <Link href="/" className="text-3xl font-bold tracking-tight">
          Logo
        </Link>
        <form
          onSubmit={onSubmit}
          className="flex-1 max-w-xl p-2 relative border-white border rounded-md"
        >
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          <input
            className="input pl-10 w-full focus:outline-none focus:ring-0"
            placeholder="Search for products..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </form>

        <div className="flex items-center gap-5">
          <Link
            href="/cart"
            className="relative inline-flex items-center gap-2 border font-semibold bg-[#002B5A] border-[#002B5A] rounded-md px-5 py-2"
          >
            <ShoppingCart />

            <span>Cart</span>
          </Link>
          <button className="border rounded-full bg-[#002B5A] border-[#002B5A] cursor-pointer p-2"><User2 /></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
