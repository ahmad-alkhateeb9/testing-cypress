/// <reference types="cypress" />
import { test } from './page-objects/searchMethods'

describe('try url', () => {

    it('visit amazon site', () => {
        test.navigate()
        cy.wait(3000)
    })

    it('search for first product using env', () => {
        test.typeInSearch(Cypress.env('firstProductName'))
        test.goSearch()
        cy.wait(3000)
        test.clickOnFirstProduct()
        test.clearSearch()
        cy.wait(3000)
    })

    it('search for second product using env', () => {
        cy.wait(3000)
        test.typeInSearch(Cypress.env('secondProductName'))
        test.goSearch()
        cy.wait(3000)
        test.clickOnSecondProduct()
        test.clearSearch()
        cy.wait(3000)
    })
    // mobile section 
    // 'test',
    // {
    //     env: {
    //         viewportHeight: 320,
    //         viewportWidth: 568
    //     },
    // },
    // ()=>{
    //     it('mobile search for first product using env', () => {
    //         test.typeInSearch(Cypress.env('firstProductName'))
    //         test.goSearch()
    //         cy.wait(3000)
    //         test.clickOnFirstProduct()
    //         test.clearSearch()
    //         cy.wait(3000)
    //     })
    // }




    // it('smoke test staging api',
    //     {
    //     //   env: {
    //     //     viewportHeight: 320,
    //     //     viewportWidth: 568,
    //     //   },
    //     },
    //     () => {
    //         test.mobileNavigate()
    //         cy.viewport('iphone-7')
    //         cy.get('[data-aria-clear-label="Clear search keywords"]').type(Cypress.env('firstProductName'))
    //         // test.typeInSearch(Cypress.env('firstProductName'))
    //         test.goSearch()
    //         cy.wait(3000)
    //         test.clickOnFirstProduct()
    //         test.clearSearch()
    //         cy.wait(3000)
    //     }
    //   )
    
})