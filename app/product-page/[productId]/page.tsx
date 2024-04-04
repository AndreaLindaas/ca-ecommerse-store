"use client";
import React, { useEffect } from "react";
export default function ProductPage(props: any) {
  console.log(props);
  console.log(props.params.productId);
  useEffect(() => {
    fetch(`https://api.noroff.dev/api/v1/online-shop/${props.params.productId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {});
  }, []);

  return <div>hei</div>;
}
