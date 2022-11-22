/* global cy */

describe('Pokedex', () => {
  it('frontpage can be opened', () => {
    cy.visit('http://localhost:5000')
    cy.contains('pikachu')
  })
})
