describe('sauce demo',{ testIsolation: false },()=> {
    it('login',()=> {
        cy.visit('https://saucedemo.com')
        cy.get('input[name="user-name"]').type("standard_user")
        cy.get('input[name="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click();
    })
    it('add item to cart',()=> {
        cy.get('button[name="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('button[name="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('button[name="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    })
    it('check cart',()=>{
        cy.get('.shopping_cart_container').click();
        cy.url().should('eq','https://www.saucedemo.com/cart.html')
        cy.get('#item_4_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Backpack')
        cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > .inventory_item_price').should('have.text', '$29.99')
        cy.get('#item_0_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Bike Light')
        cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > .inventory_item_price').should('have.text', '$9.99')
        cy.get('#item_1_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Bolt T-Shirt')
        cy.get(':nth-child(5) > .cart_item_label > .item_pricebar > .inventory_item_price').should('have.text', '$15.99')
    })
    it('checkout item',()=>{
        cy.get('button[name="checkout"]').click();
        cy.url().should('eq','https://www.saucedemo.com/checkout-step-one.html')
    })
    it('checkout step 1',()=>{
        cy.get('input[name="firstName"]').type('firrr')
        cy.get('input[name="lastName"]').type('testing')
        cy.get('input[name="postalCode"]').type('122323')
        cy.get('input[name="continue"]').click()
    })
    it('checkout step 2',()=>{
        cy.url().should('eq','https://www.saucedemo.com/checkout-step-two.html')
        cy.get('.title').should('have.text','Checkout: Overview')
        cy.get('button[name="finish"]').click();
        cy.url().should('eq','https://www.saucedemo.com/checkout-complete.html')
        cy.get('.complete-header').should('have.text','THANK YOU FOR YOUR ORDER')
    });


})