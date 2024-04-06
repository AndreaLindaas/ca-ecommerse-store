"use client";

import React, { useEffect, useState } from "react";
import { Product } from "@/app/_types/types";
import { useCartStore } from "@/app/cartStore";

export default function ProductPage(props: any) {
  const [product, setProduct] = useState<Product | null>(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const { products, addProduct } = useCartStore();

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

  const addProductToCart = () => {
    setAddedToCart(true);
    if (product) {
      addProduct(product);
    }
  };

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

            {product.discountedPrice < product.price ? (
              <div>
                <div font-bold>
                  Price: <span className="priceDiscount">{product.price}</span>
                </div>{" "}
                <h3 font-bold>Sale: {product.discountedPrice}</h3>{" "}
              </div>
            ) : (
              <h3 font-bold>Price: {product.price}</h3>
            )}

            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={addProductToCart}>
                Add to cart
              </button>
            </div>
            {addedToCart && <div>Added to cart</div>}
          </div>
        </div>
      )}
    </div>
  );
}
