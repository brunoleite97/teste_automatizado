/// <reference types="cypress" />


describe('TESTE AUT', () => {

    it('Login', () => {
        cy.fixture('acconts.json').then((json) => {
            json.forEach((dados, index) => {      
                cy.visit(Cypress.env("baseUrl"));
                cy.viewport(1920, 1080);

                cy.gui_usuario(dados.name, dados.email, dados.password);

                cy.gui_login(dados.email, dados.password);

                cy.contains('Sair').click();
            });
        });
    });

    it('Contas', () => {

        cy.fixture('acconts.json').then((json) => {
            json.forEach((dados, index) => {
                cy.visit(Cypress.env("baseUrl"));
                cy.viewport(1920, 1080);

                cy.gui_login(dados.email, dados.password);

                cy.gui_new_accont(dados.nomeconta);

                cy.gui_list_accont(dados.nomeconta);

                cy.contains('Sair').click();
            });
        });
    });

    it('Movimentações', () => {
        
        cy.fixture('acconts.json').then((json) => {
            json.forEach((dados, index) => {
                cy.visit(Cypress.env("baseUrl"));
                cy.viewport(1920, 1080);

                cy.gui_login(dados.email, dados.password);

                cy.gui_mov_new(dados.Tmov, dados.Dtran, dados.Dpag, dados.desc, dados.int, dados.valor, dados.nomeconta, dados.status);

                cy.gui_movim(dados.Year, dados.Month);

                cy.gui_valid_mov(dados.desc, dados.Dpag, dados.nomeconta, dados.valor);

                cy.contains('Sair').click();
            });
        });
    });
})