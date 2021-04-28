import { createContext, useContext, useEffect, useState } from "react";

const FormContext = createContext();

FormContext.displayName = "FormContext";
const FormProvider = FormContext.Provider;
const FormConsumer = FormContext.Consumer;
const useFormContext = ({ fields, onReset, onSubmit }) => {
  const form = useContext(form);
  return;
};

export default useFormContext;

export { FormConsumer, FormProvider, FormContext };
