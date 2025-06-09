
export const addComment = (text: string) => {
  cy.getByTestId('CommentForm.Input').type(text);
  cy.getByTestId('CommentForm.SendButton').click();
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      addComment(text?: string): Chainable<void>;
    }
  }
}