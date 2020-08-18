import React from "react";
import { Provider } from "react-redux";
import { mount, shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import LoadCatalog from "./LoadCatalog";

const mockStore = configureMockStore([thunk]);

describe("LoadCatalog", () => {
  const store = mockStore({
    products: [
      {
        id: "p1",
        productTitle: "WHITE POLKA DOT STRAPPY RUCHED BODICE SKATER DRESS",
        img: "/assets/img/dress-001.jpg",
        price: "15.00",
        colour: "white",
      },
    ],
  });

  it("it renders", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <LoadCatalog />
      </Provider>
    );
  });
});
