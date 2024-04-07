"use client";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/cart">
          <li>Cart</li>
        </Link>
        <Link href="/contact-page">
          <li>Contact Us</li>
        </Link>
      </ul>
    </nav>
  );
}
