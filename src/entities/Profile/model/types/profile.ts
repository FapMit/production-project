import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  INCORRECT_EMAIL = 'INCORRECT_EMAIL',
  SERVER_ERROR = 'SERVER_ERROR',
  NO_DATA = 'NO_DATA',
}

export interface Profile {
  id?: string,
  firstname?: string,
  lastname?: string,
  age?: number,
  currency?: Currency,
  country?: Country,
  city?: string,
  email?: string,
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  error?: string;
  isLoading: boolean;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}