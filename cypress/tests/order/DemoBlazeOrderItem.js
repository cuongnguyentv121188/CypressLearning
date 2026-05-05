/*
Scenario 01: Order item as guest
1. Open the Page
3. Select a random product
4. Add to cart
5. Go to cart and verify cart details
6. Place order as guest
7. Verify confirm order information
*/


import ProductDetailsComponent from "../../models/components/ProductDetailsComponent";
import { DemoBlazeHomePageAPI } from "../../support/DemoBlazeHomePageAPI";

describe('Product Details Component Test', function() {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Order item as guest', function () {
        DemoBlazeHomePageAPI.getHomePageProduct().then(apiData => {
            // get random product from homepage
            const randomProduct = apiData[Math.floor(Math.random() * apiData.length)]; 

            // get title to verify
            const randomeProductTitle = randomProduct.title.trim().replace("\n", ""); 
            //select any product
            cy.contains(randomeProductTitle).click(); 
            
            // Click on Add to Cart button
            cy.contains('Add to cart').click(); 

            // Go to cart
            cy.get('#cartur').click(); 

            // Verify Cart detail

            // Click on Place Order
            cy.contains('Place Order').click(); 

            // Input Information of guest
            cy.get('#name').type('Test');
            cy.get('#country').type('Canada');
            cy.get('#city').type('Saskatoon');
            cy.get('#card').type('0123456789');
            cy.get('#month').type('05');
            cy.get('#year').type('2026');

            // Click on Purchase
            cy.contains('Purchase').click(); 

            // Verify Confirm Order Popup
            cy.get('.sweet-alert h2').should('contain.text', 'Thank you for your purchase!');
            cy.get('.sweet-alert .lead').then(confirmOrderDetails => {
                cy.wrap(confirmOrderDetails).should('contain.text', randomProduct.price); 
                cy.wrap(confirmOrderDetails).should('contain.text', 'Card Number: 0123456789'); 
                cy.wrap(confirmOrderDetails).should('contain.text', 'Name: Test'); 
            })

            //cy.wait(3000); //DEBUG
        });
            
    });

});