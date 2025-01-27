import { Review } from "../types";

export const getReviewsCount = (reviews: Review[]) => {
  const { nApproved, nRejected } = reviews.reduce(
    (acc, review) => {
      acc.nApproved += review.approved ? 1 : 0;
      acc.nRejected += review.approved ? 0 : 1;
      return acc;
    },
    { nApproved: 0, nRejected: 0 },
  );
  return { nApproved, nRejected };
};
