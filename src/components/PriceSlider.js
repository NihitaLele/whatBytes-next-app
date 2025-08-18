"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import React from "react";

const PriceSlider = ({ min = 0, max = 1000 }) => {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();
  const [value, setValue] = useState(Number(params.get("priceMax") || max));

  useEffect(
    () => setValue(Number(params.get("priceMax") || max)),
    [params, max]
  );

  const onRelease = () => {
    const sp = new URLSearchParams(params.toString());
    if (value < max) sp.set("priceMax", String(value));
    else sp.delete("priceMax");
    router.push(`${pathname}?${sp.toString()}`);
  };
  return (
    <div>
      <div className="flex justify-between text-xs text-white">
        <span>{min}</span>
        <span>{max}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        onMouseUp={onRelease}
        onTouchEnd={onRelease}
        className="w-full"
      />
      <div className="text-right text-xs mt-1">Up to ${value}</div>
    </div>
  );
};

export default PriceSlider;
