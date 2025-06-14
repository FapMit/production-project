import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';
import { User } from '../../../src/entities/User';
import { selectByTestId } from '../../helpers/selectByTestId';

export const login = (
  email: string = 'test-user-e2e',
  password: string = 'test-user-e2e',
) => {
  return cy
    .request({
      method: 'POST',
      url: 'http://localhost:8000/login',
      body: {
        email,
        password,
      },
    })
    .then(({ body }) => {
      window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
      return body;
    });
};

export const getByTestId = (testId: string) => {
  return cy.get(selectByTestId(testId));
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<User>;
      getByTestId(testId: string): ReturnType<typeof cy.get>;
    }
  }
}
