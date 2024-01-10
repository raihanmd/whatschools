import * as yup from "yup";

import { registrationSchema } from "@/validation/ppdb.schema";

export type RegistrationSchema = yup.InferType<typeof registrationSchema>;
