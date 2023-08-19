import { INITIAL } from "./Constants";

const initialState = {
  searchInput: "",
  apiStatusConstants: INITIAL,
};

const reducerFunction = (state = initialState, action) => {
  // console.log("action", action);
  switch (action.type) {
    case "search":
      return { ...state, searchInput: action.payload.searchTitle };

    default:
      return { ...state };
  }
};

export default reducerFunction;
