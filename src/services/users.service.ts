import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

import type { LoginSchema, RegisterSchema } from "@/types/users.type";
import prisma from "@/connection/prisma";
import ResponseError from "@/errors/responseError";
import getUnixTime from "@/utils/getUnixTime";
import getUuid from "@/utils/getUuid";
import PREFIX from "@/config/prefix";
import validator from "@/validation/validator";
import { loginSchema, registerSchema } from "@/validation/users.schema";

const login = async (req: LoginSchema) => {
  const loginBody = await validator(loginSchema, req);

  const user = await prisma.users.findFirst({
    where: { username: req.username },
    select: {
      username: true,
      password: true,
    },
  });

  if (!user) {
    throw new ResponseError(401, "Username or password wrong");
  }

  const isPasswordValid = await bcrypt.compare(
    req.password,
    user?.password as string
  );

  if (!isPasswordValid) {
    throw new ResponseError(401, "Username or password wrong");
  }

  loginBody.token = uuid().toString();
  loginBody.last_login = getUnixTime();

  return prisma.users.update({
    data: { token: loginBody.token, last_login: loginBody.last_login },
    //@ts-ignore
    where: { username: loginBody.username },
    select: { token: true },
  });
};

const register = async (req: RegisterSchema) => {
  const registerBody = await validator(registerSchema, req);

  const countUser = await prisma.users.count({
    where: {
      username: registerBody.username,
    },
  });

  if (countUser === 1) {
    throw new ResponseError(400, "Username already exists");
  }

  registerBody.id = PREFIX.USER + getUuid();
  registerBody.password = await bcrypt.hash(registerBody.password, 10);
  registerBody.created_at = getUnixTime();

  return prisma.users.create({
    //@ts-ignore
    data: registerBody,
    select: {
      username: true,
    },
  });
};

export default { login, register };
