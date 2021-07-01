
describe('Ideabox Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    .get('#title').type('To Do')
    .get('#description').type('Go grocery shopping')
    .get('#submitBtn').click()
  })

  it('Should be able to add a card', () => {
    cy.get('.ideas-container')
      .contains('To Do')
    .get('.card')
      .contains('Go grocery shopping')
  })
})
