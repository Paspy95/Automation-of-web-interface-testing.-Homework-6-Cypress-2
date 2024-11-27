describe('template spec', () => {
  it('passes', () => {
    cy.visit('/admin')
    cy.get('.login__title').contains("Авторизация")
  })
})