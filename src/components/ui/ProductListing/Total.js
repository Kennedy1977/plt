import React from "react";
import { useSelector } from "react-redux";
export const Total = () => {
  const total = useSelector((state) => state.total);
  let displayTotal = total.toFixed(2);

  return (
    <section className="total">
      <p>Total : &pound;{displayTotal}</p>
    </section>
  );
};
