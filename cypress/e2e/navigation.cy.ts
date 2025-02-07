// navigation.cy.ts
describe('navigation.cy.ts', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/');
    cy.url().should('include', 'localhost:3000');  // Check if the page loads correctly
  });
});
