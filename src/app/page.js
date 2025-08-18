import React from "react";
import FiltersSidebar from "@/components/FiltersSidebar";
import ProductCard from "@/components/ProductCard";
import EmptyState from "@/components/EmptyState";
import { products } from "@/lib/products";

function applyFilters(all, searchParams) {
  let list = [...all];
  const { q = "", category, brand, priceMax = 1000 } = searchParams;
  if (q) {
    list = list.filter((p) => p.title.toLowerCase().includes(q.toLowerCase()));
  }
  if (category && category !== "All") {
    const cats = category.split(",");
    list = list.filter((p) => cats.includes(p.category));
  }
  if (brand) {
    const bs = brand.split(",");
    list = list.filter((p) => bs.includes(p.brand));
  }
  list = list.filter((p) => p.price <= Number(priceMax));

  return list;
}

const Page = async ({ searchParams }) => {
  const params = await searchParams;
  const filtered = applyFilters(products, params);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] mt-5 gap-6">
      <FiltersSidebar />
      <section>
        <h2 className="text-3xl font-bold mb-4 text-[#002B5A]">Product Listing</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.length ? (
            filtered.map((p) => <ProductCard key={p.id} p={p} />)
          ) : (
            <EmptyState />
          )}
        </div>
      </section>
    </div>
  );
};

export default Page;

