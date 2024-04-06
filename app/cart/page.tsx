"use client";
import React, { useState } from "react";
import { useCartStore } from "../cartStore";
import { Product } from "../_types/types";
import Link from "next/link";

export default function Cart() {
  const { products, addProduct, removeProduct, clearCart } = useCartStore();
  let totalAmount = 0;

  const renderCart = () => {
    console.log("products", products);

    return products.map((product: Product) => {
      const itemTotal =
        product.discountedPrice < product.price
          ? product.discountedPrice * product.quantity
          : product.price * product.quantity;
      totalAmount += itemTotal;
      return (
        <div key={product.id} className="container">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead></thead>
              <tbody>
                {/* row 1 */}
                <tr className="cart-row">
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={product.imageUrl} alt="image of product" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.title}</div>
                      </div>
                    </div>
                  </td>
                  {product.discountedPrice < product.price ? (
                    <td className="center">
                      <div>
                        <td className="priceDiscount ">{product.price} kr</td>
                      </div>
                      <td className=" text-green-700">
                        {product.discountedPrice} kr
                        <br />
                      </td>
                    </td>
                  ) : (
                    <td className="center">
                      {product.price} kr
                      <br />
                    </td>
                  )}

                  <td className="center">
                    <label>
                      <button
                        className="btn btn-xs"
                        onClick={() => removeProduct(product)}
                      >
                        -
                      </button>
                      {product.quantity}
                      <button
                        className="btn btn-xs"
                        onClick={() => addProduct(product)}
                      >
                        +
                      </button>
                    </label>
                  </td>
                  <td className="right">
                    <strong>Total:</strong> {itemTotal.toFixed(2)},-
                  </td>
                </tr>
              </tbody>
              {/* foot */}
            </table>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      {renderCart()}

      {products.length > 0 && (
        <div>
          <div className="font-bold right">
            Total: {totalAmount.toFixed(2)},-
          </div>
          <button
            className="btn btn-outline btn-error btn-xs"
            onClick={() => clearCart()}
          >
            Clear Cart
          </button>
          <Link href={"/"}>
            <button className="btn btn-info ">Shop more</button>
          </Link>
          <button className="btn btn-success">Checkout</button>
        </div>
      )}

      {products.length == 0 && (
        <div>
          <h2 className="emtyCart text-center">The cart is empty</h2>
          <div className=" text-center">
            <Link href={"/"}>
              <button className="btn btn-info ">Shop now</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
