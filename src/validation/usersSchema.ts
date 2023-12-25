import { z } from "zod";

import UserRole from "@/enums/UserRole";
import { LoginSchema, RegisterSchema } from "@/interfaces/users.interface";
import { ToZodObject } from "@/interfaces/zod.interface";

export const loginSchema: ToZodObject<LoginSchema> = z
  .object({
    username: z.string().min(3).max(50),
    password: z.string().min(8).max(255),
  })
  .strict();

export const registerSchema: ToZodObject<RegisterSchema> = z
  .object({
    username: z.string().max(50),
    password: z.string().max(255),
    first_name: z.string().max(50),
    last_name: z.string().max(50),
    role: z.nativeEnum(UserRole),
  })
  .strict();
