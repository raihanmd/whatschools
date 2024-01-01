import { createContext, useContext } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Inputs } from "../components/RegistrationForm/types";

interface RegisterContextProps {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
}

const RegisterContext = createContext<RegisterContextProps | undefined>(
  undefined
);

export const RegisterProvider: React.FC<{
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  children: React.ReactNode;
}> = ({ children, register, errors }) => (
  <RegisterContext.Provider value={{ register, errors }}>
    {children}
  </RegisterContext.Provider>
);

export const useRegister = () => {
  const context = useContext(RegisterContext);
  if (!context) {
    throw new Error("useRegister must be used within a RegisterProvider");
  }
  return context;
};
