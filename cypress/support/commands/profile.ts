
export const updateProfile = (firstname: string, lasname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.FirstName').clear().type(firstname);
  cy.getByTestId('ProfileCard.LastName').clear().type(lasname);
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
}
export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: {
      Authorization: `fasf`
    },
    body: {
      "id": "4",
      "firstname": "Test",
      "lastname": "User",
      "age": 10,
      "gender": "Женский",
      "currency": "RUB",
      "country": "Belarus",
      "city": "Минск",
      "email": "test@user.test",
      "avatar": "https://static-00.iconduck.com/assets.00/cypress-icon-2048x2048-swmlmjca.png"
    }
  })
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lasname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}