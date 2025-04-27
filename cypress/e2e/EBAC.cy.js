/// <referece types="cypree"/>

describe('teste de funcionalidades', () => {
beforeEach(() => {
  cy.visit('')
});

  it('cadastro de campos obrigatótrio', () => {
    var email = `teste${Date.now()}@qa.com`
     cy.preechercadarstro('Teste', 'EBAC', email, '1265425373', 'Teste@ebac2025')
    cy.get('#signup-response').should('contain','Cadastro realizado com sucesso!')
  })
})
