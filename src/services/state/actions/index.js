export const updateCatalog = (data) => {
  return {
    type: "UPDATE_CATALOG",
    payload: data,
  };
};

export const updateTotal = (data) => {
  return {
    type: "UPDATE_TOTAL",
    payload: data,
  };
};
