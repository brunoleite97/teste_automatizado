/// <reference types="cypress" />




Cypress.Commands.add('gui_usuario', (nome, mail, pass) => {
    cy.contains('Novo usuário?').click();
    cy.get('#nome').type(nome);
    cy.get('#email').type(mail);
    cy.get('#senha').type(pass);
    cy.contains('Cadastrar').click();
})