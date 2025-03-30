import { Country, Currency } from "shared/const/common";

export interface Profile {
  "firstname": string,
  "lastname": string,
  "age": number,
  "currency": Currency,
  "country": Country,
  "city": string,
  "email": string,
  "avatar": string
}

export interface ProfileSchema {
  data?: Profile;
  error?: string;
  isLoading: boolean;
  readonly: boolean;
}