// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => { 
    if(email){
        cy.fixture("authorization").then((authorization)=>{
            cy.get(authorization.email).type(email)
        })
    }

    if(password){
        cy.fixture("authorization").then((authorization)=>{
            cy.get(authorization.password).type(password)
        })
    }
    cy.fixture("authorization").then((authorization)=>{
        cy.get(authorization.loginButton).click()
    })
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })