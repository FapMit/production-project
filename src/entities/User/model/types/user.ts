export interface User {
  id: number;
  email: string;
}

export interface userSchema {
  authData?: User;
}