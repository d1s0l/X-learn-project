import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/components/ProductCard";
import { API_URL } from "@/constans";


export default async function ShopSSGPage() {
  const response = await fetch(API_URL);
  const data = await response.json();

  const products: Product[] = data.products.slice(0, 14);

  return (
    <div className="flex flex-wrap gap-4">
      {products.map(product => (
        <ProductCard
          key={product.id}
          {...product}
        />
      ))}
    </div>
  )
}