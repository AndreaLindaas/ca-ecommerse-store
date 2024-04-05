"use client";
import React, { useState } from "react";
import { useCartStore } from "../cartStore";
import { Product } from "../_types/types";

export default function Cart() {
  const { products, addProduct, removeProduct } = useCartStore();
  let totalAmount = 0;

  const renderCart = () => {
    console.log("products", products);

    return products.map((product: Product) => {
      const itemTotal = product.price * product.quantity;
      totalAmount += itemTotal;
      return (
        <div key={product.id}>
          <div className="container">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead></thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={product.imageUrl}
                              alt="image of product"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{product.title}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {product.price} kr
                      <br />
                    </td>
                    <td>
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
                    <th>Total: {itemTotal.toFixed(2)}</th>
                  </tr>
                </tbody>
                {/* foot */}
              </table>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      {renderCart()}
      <div className="font-bold">Total Amount: {totalAmount.toFixed(2)}</div>
    </div>
  );
}
