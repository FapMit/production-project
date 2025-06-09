let profileId:string;
describe('Пользователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then(data => {
      cy.visit(`/profile/${data.id}`)
      profileId = data.id;
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  })
  it('И профиль успешно загружается', () => {
    cy.getByTestId('ProfileCard.FirstName').should('have.value', 'Test');
    cy.getByTestId('ProfileCard.LastName').should('have.value', 'User');
  });
  it('И редактирует его', () => {
    const newName = 'e2e firstname';
    const newLastName = 'e2e lastname';

    cy.updateProfile(newName, newLastName);
    cy.getByTestId('ProfileCard.FirstName').should('have.value', newName);
    cy.getByTestId('ProfileCard.LastName').should('have.value', newLastName);
  });
})