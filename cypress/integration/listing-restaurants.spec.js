describe('Listing Restaurants', () => {
    it('shows restaurants from the server', () => {
      const sushiPlace = 'Sushi Place';
      const pizzaPlace = 'Pizza Place';
  
      cy.intercept('GET', 'https://api.outsidein.dev/ya2FVx9X73d0ny9jf0tTOIDMiC4Q49jU/restaurants'
       [{id: 1, name: sushiPlace},
        {id: 2, name: pizzaPlace}]
      );
  
      cy.visit('/');
      cy.contains(sushiPlace);
      cy.contains(pizzaPlace);
    });
  });
