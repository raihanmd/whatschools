import * as yup from "yup";

import type { LoginSchema, RegisterSchema } from "@/types/users.type";
import UserRole from "@/enums/UserRole";

export const loginSchema: yup.Schema<LoginSchema> = yup
  .object({
    username: yup.string().max(50).required("Username tidak boleh kosong"),
    password: yup.string().max(255).required("Password tidak boleh kosong"),
  })
  .strict()
  .noUnknown(
    true,
    (field) => `Field [${field.unknown.toString()}] tidak diperbolehkan`
  );

export const registerSchema: yup.Schema<RegisterSchema> = yup.object({
  username: yup
    .string()
    .min(5, "Username minimal 5 karakter")
    .max(50, "Username maksimal 50 karakter")
    .required("Username tidak boleh kosong"),
  password: yup
    .string()
    .min(8, "Password minimal 8 karakter")
    .max(255, "Password maksimal 255 karakter")
    .required("Password tidak boleh kosong"),
  first_name: yup
    .string()
    .max(50, "First name tidak boleh lebih dari 50 karakter")
    .required("First name tidak boleh kosong"),
  last_name: yup
    .string()
    .max(50, "Last name tidak boleh lebih dari 50 karakter")
    .required("Last name tidak boleh kosong"),
  role: yup
    .mixed<UserRole>()
    .oneOf(Object.values(UserRole), "Role tidak valid")
    .required("Role tidak boleh kosong"),
});
