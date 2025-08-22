"use client";

import Link from "next/link";
import { ShoppingCart, Search, User2 } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import React from "react";

const Header = () => {
  const { summary } = useCart();
  const router = useRouter();
  const pathname = usePathname();

  const [q, setQ] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const sp = new URLSearchParams(window.location.search);
      setQ(sp.get("q") || "");
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const sp = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
    if (q) sp.set("q", q);
    else sp.delete("q");
    router.push(`${pathname}?${sp.toString()}`);
  };

  return (
    <header className="bg-[#0758A8] text-white sticky top-0 z-50 shadow-md">
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

            {mounted && (
              <span className="badge bg-white text-[#002B5A] rounded-md px-2">
                {summary.count}
              </span>
            )}
          </Link>

          <button className="border rounded-full bg-[#002B5A] border-[#002B5A] cursor-pointer p-2">
            <User2 />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
