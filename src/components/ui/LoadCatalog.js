import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as API from "../../services/api/index";
import { ProductListing } from "./ProductListing/ProductListing";

function LoadCatalog() {
  const catalog = useSelector((state) => state.catalog);
  const isLoaded = useSelector((state) => state.isLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    catalog.products ? fetched() : fetch();
  });

  let fetch = () => {
    if (isLoaded === 0) {
      dispatch(API.loadCatalog());
    }
  };
  let fetched = () => {
    dispatch({ type: "IS_LOADED" });
  };

  return <>{isLoaded === 0 ? <div>Loading...</div> : <ProductListing />}</>;
}

export default LoadCatalog;
