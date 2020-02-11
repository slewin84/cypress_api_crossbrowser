const baseUrl = 'https://jsonplaceholder.typicode.com';

describe('API Testing with Cypress', () => {

    beforeEach(() => {
        cy.request(baseUrl + '\\albums').as('albums');
    });

    it('Validate the header', () => {
        cy.get('@albums')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8');
    });

    it('Validate the status code', () => {
        cy.get('@albums')
            .its('status')
            .should('equal', 200);
    });

    it('Validate the albums\'s name', () => {
        cy.get('@albums')
            .its('body')
            .should('include', { title: "quidem molestiae enim" });
    });
});