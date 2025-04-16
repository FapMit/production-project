export interface User {
  id: string;
  email: string;
  avatar?: string;
}

export interface userSchema {
  authData?: User;

  _inited: boolean;
}