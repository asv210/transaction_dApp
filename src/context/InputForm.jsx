import { createContext, useContext, useState } from "react";

const initialState = {
  transfer: {
    sender: "",
    receiver: "",
    remark: "",
    amount: "",
    transactionId: "",
  },
};

const InputFormContext = createContext(initialState);
export const InputFormProvider = ({ children }) => {
  const [transfer, setTransfer] = useState({
    sender: "",
    receiver: "",
    remark: "",
    amount: "",
    transactionId: "",
  });

  const value = {
    transfer,
    setTransfer,
  };
  return (
    <InputFormContext.Provider value={value}>
      {children}
    </InputFormContext.Provider>
  );
};
export const useInputForm = () => useContext(InputFormContext);
