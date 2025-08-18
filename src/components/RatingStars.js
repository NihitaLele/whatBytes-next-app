import React from "react";

const RatingStars = ({ value = 0, outOf = 5 }) => {
  const full = Math.round(value);
  return (
    <div className="flex gap-0.5" aria-label={`Rating ${value} of ${outOf}`}>
      {Array.from({ length: outOf }).map((_, i) => (
        <span key={i}>{i < full ? "★" : "☆"}</span>
      ))}
    </div>
  );
};

export default RatingStars;
