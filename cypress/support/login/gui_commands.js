/// <reference types="cypress" />




Cypress.Commands.add('gui_login', (mail, pass) => {
    cy.get('#email').type(mail);
    cy.get('#senha').type(pass);
    cy.contains('Entrar').click();
})