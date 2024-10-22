/// <reference types="cypress" />

describe('Teste do Componente App', () => {
  beforeEach(() => {
    cy.visit(""); 
  });

  it('Deve exibir mensagem de erro ao inserir um lance menor que o mínimo', () => {
    cy.get('input#bid').type('4000'); 
    cy.get('button').contains('Enviar Lance').click(); 
    cy.get('.errorMessage') 
      .should('be.visible')
      .and('contain', 'O lance deve ser no mínimo R$5000.');
  });

  it('Deve exibir mensagem de sucesso ao inserir um lance igual ou maior que o mínimo', () => {
    cy.get('input#bid').type('5000'); 
    cy.get('button').contains('Enviar Lance').click(); 
    cy.get('.successMessage') 
      .should('be.visible')
      .and('contain', 'Lance de R$5000 recebido com sucesso!');
  });
});
