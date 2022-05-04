/* global cy */

describe('Proyecto', function () {
    it('frontpage can be opened', function () { // nos aseguramos que la página se pueda abrir
        cy.visit('http://localhost:5000'); // página que tiene que visitar
        cy.contains('pikachu'); // si la página contiene a pikachu
        cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo') // si en la página aparece esta frase
    }) 
})