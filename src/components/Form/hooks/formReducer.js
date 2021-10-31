export const initialization = ({ values, errors }) => ({
  values,
  errors,
  isSubmiting: false,
  isValidating: false,
  submitAttempt: 0,
  submitSuccess: 0,
  submitFailure: 0,
});

export const formReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_VALUES":
      return { ...state, values: payload };
    case "SET_TOUCHED":
      return { ...state, touched: payload };
    case "SET_ERRORS":
      return { ...state, errors: payload };
    case "SET_FIELD_VALUE":
      return {
        ...state,
        values: { ...state.values, [payload.name]: payload.value },
      };
    case "SET_FIELD_TOUCHED":
      return {
        ...state,
        touched: { ...state.touched, [payload.name]: payload.touched },
      };
    case "SET_FIELD_ERROR":
      return {
        ...state,
        errors: { ...state.errors, [payload.name]: payload.error },
      };
    case "SET_ISVALIDATING":
      return { ...state, isValidating: { isValidating, payload } };
    case "SET_ISSUBMITING":
      return { ...state, isSubmiting: payload };
    case "SET_SUBMIT_ATTEMPT":
      return { ...state, submitAttempt: payload };
    case "SET_SUBMIT_SUCCESS":
      return { ...state, submitSuccess: payload };
    case "SET_SUBMIT_FAILURE":
      return { ...state, submitFailure: payload };
    case "RESET":
      return initialization(payload);
    default:
      return state;
  }
};
