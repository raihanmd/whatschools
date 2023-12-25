import UserRole from "@/enums/UserRole";

export interface LoginSchema {
  username: string;
  password: string;
  token?: string;
  last_login?: number;
}

export interface RegisterSchema {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  role: UserRole;
  id?: string;
  created_at?: number;
  last_login?: number;
}
