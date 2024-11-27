const authorization = require('../fixtures/authorization.json')
describe('Log in', () => {
    beforeEach(()=>
        cy.visit('/admin')
    )
    it('authorization with the correct data', () => {
      cy.login(authorization.validEmail, authorization.validPass)
      cy.contains(authorization.administrative).should("be.visible")
      });

    it('authorization with incorrect mail', () => {
      cy.login(authorization.sadEmail, authorization.validPass)
      cy.contains(authorization.error).should("be.visible")
      });  
    
      it('authorization with incorrect pass', () => {
        cy.login(authorization.validEmail, authorization.sadPass)
        cy.contains(authorization.error).should("be.visible")
        });    

    });
    
    
