import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';

export const login = (email: string = 'test-user-e2e', password: string = 'test-user-e2e') => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: {
      email,
      password
    }
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
  })
}