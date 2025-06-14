import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  test('test set email', () => {
    const state: DeepPartial<LoginSchema> = { email: 'admin' };
    expect(
      loginReducer(state as LoginSchema, loginActions.setEmail('admin2')),
    ).toEqual({ email: 'admin2' });
  });

  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword('123123')),
    ).toEqual({ password: '123123' });
  });
});
