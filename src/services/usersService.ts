import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

import prisma from "@/connection/prisma";
import { LoginSchema, RegisterSchema } from "@/interfaces/users.interface";
import { loginSchema, registerSchema } from "@/validation/usersSchema";
import ResponseError from "@/errors/responseError";
import getUnixTime from "@/app/utils/getUnixTime";
import getUuid from "@/app/utils/getUuid";
import PREFIX from "@/config/prefix";

const login = async (req: LoginSchema) => {
  const loginRequest = loginSchema.parse(req);

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

  loginRequest.token = uuid().toString();
  loginRequest.lastLogin = getUnixTime();

  return prisma.users.update({
    data: { token: loginRequest.token, lastLogin: loginRequest.lastLogin },
    //@ts-ignore
    where: { username: loginRequest.username },
    select: { token: true },
  });
};
const register = async (req: RegisterSchema) => {
  const registerRequest = registerSchema.parse(req);

  const countUser = await prisma.users.count({
    where: {
      username: registerRequest.username,
    },
  });

  if (countUser === 1) {
    throw new ResponseError(400, "Username already exists");
  }

  registerRequest.id = PREFIX.USER + getUuid();
  registerRequest.password = await bcrypt.hash(registerRequest.password, 10);
  registerRequest.createdAt = getUnixTime();

  return prisma.users.create({
    //@ts-ignore
    data: registerRequest,
    select: {
      username: true,
    },
  });
};

export default { login, register };
