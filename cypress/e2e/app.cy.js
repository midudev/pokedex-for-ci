describe('Pokedex', () => {
  it('frontpage can be opened', () => {
    cy.visit('/')
    cy.contains('pikachu')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo')
  })

  it('should display pokemon names', () => {
    cy.visit('/')
    cy.get('.list-item-name').should('have.length.greaterThan', 0)
    cy.get('.list-item-name').first().should('be.visible')
  })
})