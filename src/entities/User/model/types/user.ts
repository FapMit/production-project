import { UserRole } from "../consts/userConsts";

export interface User {
  id: string;
  email: string;
  avatar?: string;
  roles?: UserRole[];
}

export interface userSchema {
  authData?: User;

  _inited: boolean;
}