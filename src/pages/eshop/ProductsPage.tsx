import { useLoaderData } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { Suspense } from "react";

export interface IProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const ProductsPage = () => {
  const products = useLoaderData() as IProductType[];

  return (
    <main className="p-4 mx-auto lg:max-w-5xl md:max-w-3xl sm:max-w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Suspense fallback={<p>Ikeliama...</p>}>
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </Suspense>
      </div>
    </main>
  );
};
