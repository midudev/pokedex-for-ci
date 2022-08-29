/* global cy */
describe('Pokedex', function() {
  it('Frontpage can be opened', function(){
    cy.visit('http://localhost:3001')
    cy.contains('pikachu')
    cy.contains('flareon')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})