
describe('Ideabox Test', () => {
  beforeEach(() => {
    cy.visit('https://travis-ci-prac.herokuapp.com/')
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
