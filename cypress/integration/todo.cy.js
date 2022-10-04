/// <reference types="cypress" />
import { test } from '../../src/NoonDataFile'

describe('Post Resource', () => {
  let saver
  it('vist noon site', () => {
    cy.visit(test.path)
  })

  it('search for cats food', () => {
    cy.get(test.serchButton).type('cat ')
    cy.contains(test.pickedSearch).click()
    test.wait()
  })

  it('pick item', () => {

    cy.get(test.pickedProduct).click()
    cy.get(test.productName).then(($name) => {
      saver = $name.text()
    })
    test.wait()
  })

  it('check add and remove from cart', () => {
    cy.get(test.addToCartButton).click()
    cy.contains(test.contiuneShopingButton).click()

    test.wait()
    
    cy.get(test.cartButton).click()
    cy.contains(test.theProductInCart).then(($checkedname) => {
      if (saver === $checkedname.text())
        cy.log("its matched")
      else
        cy.log("not matched")
    })

    test.wait()

    cy.get(test.removingButton).click()
    
  })

  it('make sure cart is empty', () => {
    if (cy.contains(test.emptyCart))
    cy.log("it's deleted")
    else
    cy.log("it's not deleted")
  })

  
})