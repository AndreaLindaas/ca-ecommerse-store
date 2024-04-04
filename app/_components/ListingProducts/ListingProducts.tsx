"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/app/_types/types";
import Link from "next/link";
export default function ListingProducts() {
  const [products, setProducts] = useState([] as Product[]);

  useEffect(() => {
    fetch("https://api.noroff.dev/api/v1/online-shop")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {});
  }, []);
  console.log(products);
  return (
    <div>
      <h2>Products</h2>

      {products.map((product: Product) => (
        <Link href={`/product-page/${product.id}`} key={product.id}>
          {/* ${product.id} */}
          <div>
            <Image
              alt={product.title}
              src={product.imageUrl}
              width={500}
              height={500}
            />

            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
