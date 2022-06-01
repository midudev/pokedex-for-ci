/* global cy */
/* Con la linea de arriba indicamos que cy es una variable global para que no nos moleste el linter */
describe('Pokedex', () => {
  it('frontpage can be opened', () => {
    cy.visit('http://localhost:5000')
    cy.contains('pikachu')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})