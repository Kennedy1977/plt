import { updateCatalog } from "../state/actions/index";
import axios from "axios";

export const loadCatalog = () => {
  return (dispatch) => {
    axios
      .get("./data/products.json")
      .then((response) => {
        dispatch(updateCatalog(response.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};
