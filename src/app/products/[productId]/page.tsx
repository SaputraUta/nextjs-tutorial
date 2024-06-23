import React from "react";

export default function DetailProduct({
  params,
}: {
  params: { productId: string };
}) {
  return <div>Detail product {params.productId}</div>;
}
