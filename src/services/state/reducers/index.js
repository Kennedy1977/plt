const initialState = {
  catalog: {},
  total: 0,
  isLoaded: 0,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CATALOG":
      return {
        ...state,
        catalog: action.payload,
      };
    case "IS_LOADED":
      return {
        ...state,
        isLoaded: (state.isLoaded = 1),
      };
    case "UPDATE_TOTAL":
      let deduction = action.payload[0];
      let addition = action.payload[1];

      return {
        ...state,
        total: (state.total = state.total + addition - deduction),
      };

    default:
      return state;
  }
};
