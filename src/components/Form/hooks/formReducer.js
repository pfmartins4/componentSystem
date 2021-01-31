const formReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_VALUES":
      return { ...state, values: payload };
    case "SET_TOUCHED":
      return { ...state, touched: payload };
    case "SET_ERRORS":
      return { ...state, errors: payload };
    case "SET_FIELD_VALUE":
      return; /** @todo implementar */
    case "SET_FIELD_TOUCHED":
      return; /** @todo implementar */
    case "SET_FIELD_ERROR":
      return; /** @todo implementar */
    case "SET_ISVALIDATING":
      return; /** @todo implementar */
    case "SET_ISSUBMITING":
      return; /** @todo implementar */
    case "SUBMIT_ATTEMPT":
      return; /** @todo implementar */
    case "SUBMIT_SUCCESS":
      return; /** @todo implementar */
    case "SUBMIT_FAILURE":
      return; /** @todo implementar */
    default:
      return state;
  }
};
