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
  return (
    <div>
      <h1 className="size">Products</h1>
      <div className="products-list">
        {products.map((product: Product) => (
          <Link href={`/product-page/${product.id}`} key={product.id}>
            <div className="card w-full md:w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={product.imageUrl}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{product.title}</h2>

                <div className="card-actions">
                  <button className="btn btn-primary">Read more</button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
