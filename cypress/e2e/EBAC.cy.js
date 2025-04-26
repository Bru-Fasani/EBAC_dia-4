/// <referece types="cypree"/>

describe('teste de funcionalidades', () => {
  it('cadastro de campos obrigatótrio', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('teste')
    cy.get('#signup-lastname').type('ebac')
    cy.get('#signup-email').type('test@ebac.com')
    cy.get('#signup-phone').type('110987743')
    cy.get('#signup-password').type('Teste&2024')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain','Cadastro realizado com sucesso!')
  })
})