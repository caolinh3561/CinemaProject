import { GET_HTR_FAIL, GET_HTR_SUCCESS, GET_HTR_REQUEST } from "./constant";

let initialState = {
  loading: false,
  data: [],
  err: null,
};

const heThongRapReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HTR_REQUEST:
      state.loading = true;
      return { ...state };
    case GET_HTR_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      return { ...state };
    case GET_HTR_FAIL:
      state.loading = false;
      state.data = null;
      state.err = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default heThongRapReducer;
