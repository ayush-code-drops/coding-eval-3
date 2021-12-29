import { ADD_ITEM } from "./actionTypes";
const initState = {
  items: []
};
export function cartReducer(state = initState, { type, payload }) {
  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, payload]
      };

    default:
      return state;
  }
}
