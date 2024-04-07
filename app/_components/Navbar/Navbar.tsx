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
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          {" "}
          <Link href="/cart">Cart ({calculateItemsInStore()})</Link>
        </li>

        <li>
          {" "}
          <Link href="/contact-page">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
