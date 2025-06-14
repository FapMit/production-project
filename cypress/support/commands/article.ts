import { Article } from '../../../src/entities/Article';

const defaultArticle = {
  title: 'Testing article',
  subtitle: 'Subtitle',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 123123,
  createdAt: '01.01.2025',
  userId: '1',
  type: ['IT', 'BUSINESS'],
  blocks: [],
};

export const createArticle = (article?: Article) => {
  return cy
    .request({
      method: 'POST',
      url: `http://localhost:8000/articles`,
      headers: {
        Authorization: `fasf`,
      },
      body: article ?? defaultArticle,
    })
    .then(({ body }) => body);
};
export const removeArticle = (articleId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: {
      Authorization: `fasf`,
    },
  });
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
