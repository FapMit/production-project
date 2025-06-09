let currentArticleId = '';

describe('Пользователь заходит на страницу статьи', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article)=>{
      currentArticleId = article.id;
      cy.visit(`/articles/${article.id}`);
    });
  });

  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });

  it('и страница успешно загружается', () => {
    cy.getByTestId('ArticleDetails').should('exist');
  });

  it('и видит список рекомендаций', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });

  it('и оставляет комментарий', () => {
    cy.getByTestId('ArticleDetails');
    cy.getByTestId('CommentForm').scrollIntoView();
    cy.addComment('testComment');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });

  it('и оценивает статью', () => {
    const rateCount = 3;
    cy.getByTestId('ArticleDetails');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(rateCount, 'feedback');
    cy.get('[data-selected=true]').should('have.length', rateCount);
  });
})