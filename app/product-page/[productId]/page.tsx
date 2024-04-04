"use client";

import React, { useEffect, useState } from "react";
import { Product } from "@/app/_types/types";
import Image from "next/image";
export default function ProductPage(props: any) {
  const [product, setProduct] = useState<Product | null>(null);

  console.log(props);
  console.log(props.params.productId);

  useEffect(() => {
    fetch(`https://api.noroff.dev/api/v1/online-shop/${props.params.productId}`)
      .then((response) => response.json())
      .then((data: Product) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [props.params.productId]);

  console.log("denne", product);

  return (
    <div className="container m-auto  ">
      {product && (
        <div className="card lg:card-side bg-base-100 shadow-xl  max-w-3xl  ">
          <figure>
            <img src={product.imageUrl} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>{product.description}</p>
            <h3 font-bold>Price: {product.price}</h3>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Add to cart</button>
            </div>
          </div>
        </div>

        //
        // <div key={product.id}>
        //   <h3>{product.title}</h3>
        //   <Image
        //     alt="Image of product"
        //     src={product.imageUrl}
        //     width={500}
        //     height={500}
        //   />

        //   <p>Price: {product.price}</p>
        // </div>
      )}
    </div>
  );
}
