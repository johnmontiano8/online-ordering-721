import Link from "next/link";
import Image from "next/image";
import data from "@/lib/data";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import AddToCart from "@/components/products/AddtoCart";

export default async function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const product = data.products.find((x) => x.slug === params.slug);
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <MaxWidthWrapper>
      <>
        <div className="my-2">
          {/* gagawing button */}
          <Link href="/">back to products</Link>
        </div>
        <div className="grid md:grid-cols-4 md:gap-3">
          <div className="md:col-span-2">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              sizes="100vw"
              style={{
                width: "100",
                height: "auto",
              }}
            ></Image>
          </div>
          <div>
            <ul className="space-y-4">
              <li>
                <h1 className="text-xl">{product.name}</h1>
              </li>

              <li>
                <h1 className="divider"></h1>
              </li>
              <li>
                Description: <p>{product.description}</p>
              </li>
            </ul>
          </div>
          <div>
            <div className="card bg-gray-100 shadow-xl mt-3 md:mt-0">
              <div className="card-body">
                <div className="mb-2 flex justify-between">
                  <div>Price</div>
                  <div>P{product.price}</div>
                </div>
                <div className="mb-2 flex justify-between">
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? "In Stock" : "Unavailable"}
                  </div>
                </div>
                {product.countInStock !== 0 && (
                  <div className="card-actions justify-center">
                    <AddToCart
                      item={{ ...product, qty: 0, color: "", size: "" }}
                    />
                  </div>
                )}
                {/* planning to add create design under add to cart */}
                <div className="card-actions justify-center">Create Design</div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MaxWidthWrapper>
  );
}
