import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Filter } from "./Filter";
import { ProductTile } from "./ProductTile";
import { Total } from "./Total";
import "./ProductListing.scss";

export const ProductListing = () => {
  const [filter, setFilter] = useState("all");
  const products = useSelector((state) => state.catalog.products);

  let colours = products.map(({ colour }) => colour);
  let uniqueColours = uniq(colours);
  function uniq(a) {
    return a.sort().filter(function (item, pos, ary) {
      return !pos || item !== ary[pos - 1];
    });
  }

  const filterSelection = (e) => {
    setFilter(e);
  };

  return (
    <>
      <Filter filterOptions={uniqueColours} callback={filterSelection} />
      <section className="product-tile-wrapper">
        <ProductTile products={products} filter={filter} />
      </section>
      <Total />
    </>
  );
};
