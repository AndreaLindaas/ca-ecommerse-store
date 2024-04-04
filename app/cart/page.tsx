"use client";
import React, { useState } from "react";
import { useCartStore } from "../cartStore";
import { Product } from "../_types/types";

export default function Cart() {
  const { products } = useCartStore();

  const renderCart = () => {
    console.log("products", products);
    return products.map((product: Product) => {
      return (
        <div key={product.id}>
          {product.quantity}x {product.title}
        </div>
      );
    });
  };

  return <div>{renderCart()}</div>;
}
