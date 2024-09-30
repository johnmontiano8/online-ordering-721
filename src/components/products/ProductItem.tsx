import { Product } from "@/lib/models/ProductModel";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div className="card bg-white shadow-xl mb-4 p-2">
      <figure>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.image}
            width={300}
            height={300}
            className="object-cover h-64 w-full"
          />
        </Link>
      </figure>
      <div className="card-body">
        <Link href={`/product/${product.slug}`}>
          <h2 className="card-title font-normal">{product.name}</h2>
        </Link>
        <div className="card-actions flex items-center justify-between">
          <span className="text-xl">₱{product.price}</span>
        </div>
      </div>
    </div>
  );
}
