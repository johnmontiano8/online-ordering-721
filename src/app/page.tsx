import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductItem from "@/components/products/ProductItem";
import data from "@/lib/data";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <main>
        <Hero />

        <h2 className="text-2xl py-2">Our Products</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 p-2">
          {data.products.map((product) => (
            <ProductItem key={product.slug} product={product} />
          ))}
        </div>
      </main>
    </MaxWidthWrapper>
  );
}
