import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTotal } from "../../../services/state/actions/index";

export const ActionsPanel = (props) => {
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();

  function updateQuantity(dir, id) {
    let el = document.querySelector(`#${id}`);
    let newQty = parseInt(el.value) + dir;
    let oldQty = qty;

    dir === 0 ? setQty(0) : newQty === -1 ? setQty(0) : setQty(newQty);
    let preTotal = parseFloat(oldQty * props.price);
    let total = parseFloat(newQty * props.price);
    dispatch(updateTotal([preTotal, total]));
  }

  return (
    <div className="actions-panel">
      <button
        className="btn-toggle"
        type="button"
        onClick={() => {
          updateQuantity(-1, props.id);
        }}
      >
        -
      </button>
      <div>
        <input id={props.id} type="number" value={qty} readOnly />
        <button
          className="btn-remove"
          type="button"
          onClick={() => {
            updateQuantity(0, props.id);
          }}
        >
          REMOVE
        </button>
      </div>
      <button
        className="btn-toggle"
        type="button"
        onClick={() => {
          updateQuantity(1, props.id);
        }}
      >
        +
      </button>
    </div>
  );
};
