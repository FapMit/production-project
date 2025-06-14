describe('Роутинг', () => {
  describe('Пользователь НЕ авторизован', () => {
    it('Преход на главную страницу', () => {
      cy.visit('/');
      cy.getByTestId('MainPage').should('exist');
    });

    it('Преход открывает страницу профиля', () => {
      cy.visit('/profile/1');
      cy.getByTestId('MainPage').should('exist');
    });

    it('Преход на несуществующую страницу', () => {
      cy.visit('/gfaegfasg');
      cy.getByTestId('NotFoundPage').should('exist');
    });
  });

  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.login();
    });
    it('Преход открывает страницу профиля', () => {
      cy.visit('/profile/1');
      cy.getByTestId('ProfilePage').should('exist');
    });

    it('Преход открывает страницу со списком статей', () => {
      cy.visit('/articles');
      cy.getByTestId('ArticlesPage').should('exist');
    });
  });
});
