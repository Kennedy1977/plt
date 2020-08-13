import React from "react";

import { ActionsPanel } from "./ActionsPanel";

export const ProductTile = (props) => {
  return (
    <>
      {props.products.map((product, index) => {
        let filterClass =
          props.filter === "all"
            ? ""
            : product.colour !== props.filter
            ? "hidden"
            : "";
        return (
          <section
            className={`product-tile ${product.colour} ${filterClass}`}
            key={index}
          >
            <div>
              <img src={product.img} alt={product.productTitle} />
              <div className="title-wrap">
                <h2>{product.productTitle}</h2>
              </div>
              <p className="product-price">&pound;{product.price}</p>
            </div>
            <ActionsPanel id={product.id} price={product.price} />
          </section>
        );
      })}
    </>
  );
};
