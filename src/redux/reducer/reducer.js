import {
  GET_DATA,
} from "../actions/actionTypes"
import saboresList from "./list"
const initialState = {
  data: {},
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      if (action.payload === "ver todos")
        return {
          ...state,
          data: {action: action.payload, filtred: saboresList },
        };
      else {
        const filtred = saboresList.filter(
          (helado) => helado.gender === action.payload
        );
        return { ...state, data:  {action: action.payload, filtred: filtred } };
      }
    default:
      return { ...state };
  }
};
export default rootReducer;
