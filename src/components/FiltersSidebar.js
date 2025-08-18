"use client";
import React from "react";
import { CATEGORIES, BRANDS } from "@/lib/products";
import PriceSlider from "./PriceSlider";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Toggle = ({ name, value, label }) => {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const checked = (params.get(name) || (name === "category" ? "All" : ""))
    .split(",")
    .includes(value);

  const onChange = () => {
    const sp = new URLSearchParams(params.toString());
    const cur = (sp.get(name) || (name === "category" ? "All" : "")).split(",");
    let next;

    if (name === "category") {
      if (value === "All") {
        next = ["All"]; 
      } else {
        if (cur.includes(value)) {
          next = cur.filter((v) => v !== value && v !== "All");
        } else {
          next = Array.from(new Set(cur.filter((v) => v !== "All").concat(value)));
        }
      }
    } else {
      if (cur.includes(value)) {
        next = cur.filter((v) => v !== value);
      } else {
        next = Array.from(new Set(cur.filter(Boolean).concat(value)));
      }
    }

    if (name === "category" && (next.length === 0 || next[0] === "All")) {
      sp.delete(name);
    } else if (next.length === 0) {
      sp.delete(name);
    } else {
      sp.set(name, next.join(","));
    }

    router.push(`${pathname}?${sp.toString()}`);
  };

  return (
    <label className="flex items-center gap-2 text-sm cursor-pointer">
      <input type="checkbox" checked={checked} onChange={onChange} /> {label}
    </label>
  );
};


const FiltersSidebar = () => {
  return (
    <aside className="card p-4 bg-[#0758A8] text-white mt-2 ml-4 rounded-2xl sticky top-4 h-max">
      <h3 className="text-lg font-semibold mb-3">Filters</h3>
      <div className="space-y-3">
        <div>
          <div className="label mb-2">Category</div>
          <div className="space-y-2">
            {CATEGORIES.map((c) => (
              <Toggle key={c} name="category" value={c} label={c} />
            ))}
          </div>
        </div>
        <div>
          <div className="label mb-2">Brand</div>
          <div className="space-y-2">
            {BRANDS.map((b) => (
              <Toggle key={b} name="brand" value={b} label={b} />
            ))}
          </div>
        </div>
        <div>
          <div className="label mb-2">Price</div>
          <PriceSlider min={0} max={1000} />
        </div>
      </div>
    </aside>
  );
};

export default FiltersSidebar;
