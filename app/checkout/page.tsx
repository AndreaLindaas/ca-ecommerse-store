import React from "react";
import Link from "next/link";
export default function CheckoutPage() {
  return (
    <div>
      <h1 className="size m-11">Thank you for your order!</h1>
      <div className="text-align: center m-11 ">
        <Link href={"/"}>
          <button className="btn btn-info ">Shop more</button>
        </Link>
      </div>
    </div>
  );
}
