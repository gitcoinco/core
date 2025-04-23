import { ReviewIcon } from "./ReviewIcon";

const MAX_N_ICONS = 3;
const ICON_WIDTH_WITH_COUNTER = 56;
const ICON_WIDTH_WITHOUT_COUNTER = 28;
const OVERLAP_WITH_COUNTER = 40;
const OVERLAP_WITHOUT_COUNTER = 20;

export interface ReviewIconGroupProps {
  positiveReviews: number;
  negativeReviews: number;
  maxNIcons?: number;
}

export const ReviewIconGroup = ({
  positiveReviews = 0,
  negativeReviews = 0,
  maxNIcons = MAX_N_ICONS,
}: ReviewIconGroupProps) => {
  const totalReviews = Math.max(0, positiveReviews) + Math.max(0, negativeReviews);
  const isMaxReviews = totalReviews > maxNIcons;
  const iconWidth = isMaxReviews ? ICON_WIDTH_WITH_COUNTER : ICON_WIDTH_WITHOUT_COUNTER;
  const overlap = isMaxReviews ? OVERLAP_WITH_COUNTER : OVERLAP_WITHOUT_COUNTER;
  const overlapToDiscount = iconWidth - overlap;

  if (totalReviews === 0) {
    return <ReviewIcon status="pending" />; // pending review icon
  }

  let containerWidth;
  if (isMaxReviews) {
    containerWidth =
      positiveReviews > 0 && negativeReviews > 0 ? iconWidth * 2 - overlapToDiscount : iconWidth;
  } else {
    containerWidth = totalReviews * iconWidth - (totalReviews - 1) * overlapToDiscount;
  }
  const reviewBooleans = isMaxReviews
    ? [...(positiveReviews > 0 ? [true] : []), ...(negativeReviews > 0 ? [false] : [])]
    : [...Array(positiveReviews).fill(true), ...Array(negativeReviews).fill(false)];

  return (
    <div className="relative flex h-7 items-center" style={{ width: `${containerWidth}px` }}>
      {reviewBooleans.map((review, index) => (
        <ReviewIcon
          key={index}
          status={review ? "approved" : "rejected"}
          nReviews={isMaxReviews ? (review ? positiveReviews : negativeReviews) : undefined}
          withCounter={isMaxReviews}
          className="absolute"
          style={{
            left: `${index * overlap}px`,
            zIndex: reviewBooleans.length - index,
          }}
        />
      ))}
    </div>
  );
};
