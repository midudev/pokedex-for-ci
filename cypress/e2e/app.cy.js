/* global cy */

describe('pokedex', () => {
  it('frontpage can be opened', function (){
    cy.visit('http://localhost:5000')
    cy.contains('pikachu')
  })
})