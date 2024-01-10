import { createContext, useContext } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Inputs } from "../components/RegistrationForm/types";

interface RegistrationContextProps {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
}

const RegistrationContext = createContext<RegistrationContextProps | undefined>(
  undefined
);

export const RegistrationProvider: React.FC<{
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  children: React.ReactNode;
}> = ({ children, register, errors }) => (
  <RegistrationContext.Provider value={{ register, errors }}>
    {children}
  </RegistrationContext.Provider>
);

export const useRegistration = () => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error("useRegister must be used within a RegisterProvider");
  }
  return context;
};
