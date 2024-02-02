/// <reference types="cypress" />




Cypress.Commands.add('gui_new_accont', (nome) => {
    cy.contains('Contas').click();
    cy.contains('Adicionar').click();
    cy.get('#nome').type(nome);
    cy.contains('Salvar').click();
})

Cypress.Commands.add('gui_list_accont', (nome) => {
    cy.contains('Contas').click();
    cy.contains('Listar').click();
    cy.get('tbody > tr > :nth-child(1)').should('have.text', nome)
})

Cypress.Commands.add('gui_mov_new', (Tmov, Dtran, Dpag, desc, int, valor, conta, status) => {
    cy.contains('Criar Movimentação').click();
    cy.get('#tipo').realClick();
    cy.contains(Tmov).realClick();
    cy.get('#data_transacao').type(Dtran);
    cy.get('#data_pagamento').type(Dpag);
    cy.get('#descricao').type(desc);
    cy.get('#interessado').type(int);
    cy.get('#valor').type(valor);
    cy.get('#conta').type(conta);
    cy.get(`#status_${status}`).click();
    cy.contains('Salvar').click();
})

Cypress.Commands.add('gui_movim', (year, mes) => {
    cy.contains('Resumo Mensal').click();
    cy.get('#ano').select(year);
    cy.get('#mes').select(mes);
    cy.contains('Buscar').realClick();
    cy.get('tbody > tr > :nth-child(1)', { timeout: 10000 }).should('be.visible');
})

Cypress.Commands.add('gui_valid_mov', (desc, Dpag, conta, valor, status) => {
    cy.contains(desc).should('be.visible');
    cy.contains(Dpag).should('be.visible');
    cy.contains(conta).should('be.visible');
    cy.contains(valor).should('be.visible');
    cy.get('.glyphicon').click();
})