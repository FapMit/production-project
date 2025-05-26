import { Profile } from "entities/Profile/model/types/profile";
import { ValidateProfileError } from "../consts/consts";

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  error?: string;
  isLoading: boolean;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}