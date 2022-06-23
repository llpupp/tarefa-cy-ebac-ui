/// <reference types="cypress" />

describe('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    afterEach(() => {
        cy.screenshot()
    });
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('a > .hidden-xs').should('contain' , 'Welcome aluno_ebac')
        cy.get('.woocommerce-MyAccount-content').should('contain' , 'Olá, aluno_ebac (não é aluno_ebac? Sair)')
        
    })
    it('Deve exibir mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('aluno_ebalc@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido')
    })
    it('Deve exibir mensagem de erro ao inserir senha inválida', () =>{
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('testado@testado.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
              
       
        
    })
});