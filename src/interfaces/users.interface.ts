import UserRole from "@/enums/UserRole";

export interface LoginSchema {
  username: string;
  password: string;
  token?: string;
  lastLogin?: number;
}

export interface RegisterSchema {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  id?: string;
  createdAt?: number;
  lastLogin?: number;
}
