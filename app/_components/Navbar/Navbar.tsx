"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Product } from "@/app/_types/types";
import { useCartStore } from "@/app/cartStore";

export default function Navbar() {
  const { products } = useCartStore();

  const calculateItemsInStore = () => {
    let items = 0;
    products.forEach((p: Product) => {
      items += p.quantity;
    });
    return items;
  };

  return (
    <nav className="fixed left-[50%] top-8 transform -translate-x-1/2 flex items-center gap-6 rounded-lg border-[1px] border-neutral-700 bg-neutral-900 p-2 text-sm text-neutral-500">
      <Logo />
      <NavLink href="/">Home</NavLink>
      <NavLink href="/cart">Cart ({calculateItemsInStore()})</NavLink>
      <NavLink href="/contact-page">Contact Us</NavLink>
    </nav>
  );
}

const Logo = () => {
  return (
    <svg
      width="24"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-2 fill-neutral-50"
    >
      <path
        d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
        stopColor="#000000"
      ></path>
      <path
        d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
        stopColor="#000000"
      ></path>
    </svg>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link href={href}>
      <motion.div
        className="h-[20px] flex items-center cursor-pointer"
      >
        {children}
      </motion.div>
    </Link>
  );
};
