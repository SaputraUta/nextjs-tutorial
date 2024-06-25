import React from "react";

export default function ReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <div>
      <p>
        Review {params.reviewId} of {params.productId}
      </p>
    </div>
  );
}
