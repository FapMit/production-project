import { CounterSchema } from "entities/Counter";
import { userSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";


export interface StateSchema {
  counter: CounterSchema;
  user: userSchema;
  loginForm?: LoginSchema;
}