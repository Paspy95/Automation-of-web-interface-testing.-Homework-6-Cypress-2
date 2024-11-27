const authorization = require('../fixtures/authorization.json');
const selectors = require('../fixtures/selectors');

it('booking tickets', () => {
    cy.visit('/admin')
    cy.login(authorization.validEmail, authorization.validPass)
    cy.contains(authorization.administrative).should("be.visible")

    cy.get(selectors.movie_title).eq(1).invoke("text").then((text) => {
        const movieTitle = text
        cy.visit("http://qamid.tmweb.ru");
        cy.get(selectors.days).eq(1).click()
        cy.contains(movieTitle).parents(selectors.movie).get(selectors.session).click();
        cy.fixture("seats").then((seats) => {
            seats.forEach((seat) => {
                cy.get(`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`).click();
            });
        });
        cy.get('.acceptin-button').click();
        cy.contains('Вы выбрали билеты:').should("be.visible");
    });
})