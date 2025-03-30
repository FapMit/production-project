import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginEmail } from "./getLoginEmail";

describe('getLoginEmail', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        email: 'admin@example.com'
      }
    }
    expect(getLoginEmail(state as StateSchema)).toEqual('admin@example.com');
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginEmail(state as StateSchema)).toEqual('');
  })
});