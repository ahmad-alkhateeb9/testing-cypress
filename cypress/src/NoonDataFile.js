export class Utilities {
    path = 'https:\/\/noon.com\/uae-en\/'
    serchButton = '#searchBar';
    pickedSearch = 'cat food'
    pickedProduct = '[data-qa-id="productImagePLP_Ocean Fish Flavour Cat Food Junior 2-12 Months 1.1kg "]'
    productName = '[data-qa="pdp-name-N14428540A"]'
    addToCartButton = '[data-qa="cart_offer_addToCart"]'
    contiuneShopingButton = 'Continue Shopping'
    cartButton = '[data-qa="btn_cartLink"]'
    theProductInCart = 'Ocean Fish Flavour Cat Food Junior 2-12 Months 1.1kg'
    removingButton = '[data-qa="cart-remove_item"]'
    emptyCart = 'Your shopping cart looks empty'
    wait(){
        cy.get('[data-qa="div_hearder_desktop"]').should('be.visible').then(($e1)=>{ $e1.text()})
      }
}

export const test = new Utilities();