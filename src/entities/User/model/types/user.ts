export interface User {
  id: string;
  email: string;
}

export interface userSchema {
  authData?: User;
}