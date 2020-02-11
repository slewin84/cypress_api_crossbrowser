describe('Ecosia searches', function() {
    const requiredExample = require('../../fixtures/example');

    beforeEach(() => {
       //Arrange
        cy.visit('https://www.ecosia.org/');
    })

    it.skip('Open ecosia and type value from the json file', function() {
        //Act
        cy.get('.main-popup > .close > .icon-button__icon > path').click();
        cy.get('.input').type(requiredExample.search_data);
        cy.get('.button-submit > .icon-button__icon').click();

        //Assert
        cy.get('.entity-block > p')
            .should('contain', 'Selenium');
    })

    it('Open ecosia and copy the about page', function() {
        //Act
        cy.get('.main-popup > .close > .icon-button__icon > path').click();
        cy.get('.main-nav > .icon-button > .icon-button__icon > path').click();
        cy.get('.menu > :nth-child(1) > :nth-child(2) > .link').click();

        //Assert
        cy.contains('We believe in everyone\'s power to do good');
        cy.url().should("contain", 'about');
    })

})