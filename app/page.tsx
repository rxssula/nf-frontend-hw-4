"use client";

import { getAllProducts } from "@/api/axiosInstance";
import { QueryClient, useQuery } from "@tanstack/react-query";
import ProductCard from "./components/ProductCard";

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
      {data?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
