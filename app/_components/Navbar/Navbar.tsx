"use client";
import { Product } from "@/app/_types/types";
import { useCartStore } from "@/app/cartStore";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const { products } = useCartStore();

  const calculateItemsInStore = () => {
    let items = 0;

    products.forEach((p: Product) => {
      items = items + p.quantity;
    });
    return items;
  };
  return (
    <nav>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/cart">
          <li>Cart ({calculateItemsInStore()})</li>
        </Link>
        <Link href="/contact-page">
          <li>Contact Us</li>
        </Link>
      </ul>
    </nav>
  );
}
