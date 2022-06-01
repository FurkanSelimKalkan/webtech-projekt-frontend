// https://docs.cypress.io/api/introduction/api.html
describe('My First Test', function () {
    it('visits the app root url', function () {
        cy.visit('/');
        cy.contains('h1', 'You did it!');
    });
});
