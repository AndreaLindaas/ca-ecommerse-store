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
    <div>
      {product && (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <Image
            alt="Image of product"
            src={product.imageUrl}
            width={500}
            height={500}
          />
          <p>Price: {product.price}</p>
        </div>
      )}
    </div>
  );
}
