import {
  GET_DATA,
} from "./actionTypes";

export const changeData = (gender) => {
  return {
    type: GET_DATA,
    payload: gender,
  };
};