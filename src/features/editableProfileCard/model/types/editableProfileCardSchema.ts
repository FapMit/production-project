import { Profile } from "entities/Profile/model/types/profile";

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  INCORRECT_EMAIL = 'INCORRECT_EMAIL',
  SERVER_ERROR = 'SERVER_ERROR',
  NO_DATA = 'NO_DATA'
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  error?: string;
  isLoading: boolean;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}