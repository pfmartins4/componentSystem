import { createContext, useContext, useEffect, useState } from "react";
import { formReducer, initialization } from "./formReducer";

const FormContext = createContext();

FormContext.displayName = "FormContext";

const 

const useFormReducer = ({ initialValues = {}, initialErrors = {},  initialSubminitAttempt = false, onReset, onSubmit, validationSchema = {}, initialValidation }) => {
  const [state, dispatch] = useReducer(formReducer, {values: initialValues, errors: initialErrors, onReset, validationSchema }, initialization)
  const helpers = {
    setValues: (values) => dispatch({ type: 'SET_VALUES', payload: values }),
    setErrors: (errors) => dispatch({ type: 'SET_ERRORS', payload: errors }),
    setTouched: (touched) => dispatch({ type: 'SET_TOUCHED', payload: touched }),
    setFieldValue: (name, value) => dispatch({ type: 'SET_FIELD_VALUE', payload: { name, value } }),
    setFieldTouched: (name, touched) => dispatch({ type: 'SET_FIELD_TOUCHED', payload: { name, touched } }),
    setFieldErrors: (name, error) => dispatch({ type: 'SET_FIELD_ERROR', payload: { name, error } }),
    setIsValidating: (isValidating) => dispatch({ type: 'SET_ISVALIDATING', payload: { isValidating } }),
    setIsSubmiting: (isSubmiting) => dispatch({ type: 'SET_ISSUBMITING', payload: { isSubmiting } }),
    setSubmitAttempt: (submitAttempt) => dispatch({ type: 'SET_SUBMIT_ATTEMPT', payload: { submitAttempt } }),
    setSubmitSuccess: (submitSuccess) => dispatch({ type: 'SET_SUBMIT_SUCCESS', payload: { submitSuccess } }),
    setSubmitFailure: (submitFailure) => dispatch({ type: 'SET_SUBMIT_FAILURE', payload: { submitFailure } }),
    reset: () => {
      initialization()
      onReset?.({values: initialValues, errors: initialErrors, onReset, validationSchema, onSubmit })
    }
  }
  return;
};

const FormProvider = ({initialValues, onReset, onSubmit, children}) => <FormContext.Provider>{childrend}</FormContext.Provider>;
const FormConsumer = FormContext.Consumer;






export default useFormContext;

export { FormConsumer, FormProvider, FormContext };
