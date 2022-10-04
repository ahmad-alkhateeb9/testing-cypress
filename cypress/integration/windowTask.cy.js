/// <reference types="cypress" />
import { test } from '../../src/forbsData'

describe('Post Resource', () => {

    var faceurl
    it('vist forbes site', () => {
        cy.visit(test.path)
        // cy.get('[data-src="Facebook"]').invoke('attr', 'href').then(($name) => {

        //     cy.log($name)  
        // })
    })

    it('search for cats food', () => {

        // cy.get('[data-src="Facebook"]').click({ force: true, multiple: true })

        // cy.window().its("actions").invoke("myMethod")
        // cy.window()
        //     .its("actions")
        //     .then((actions) => {
        //         cy.stub(actions, "myMethod").returns(test.facebook)
        //     })
        // cy.window().its("actions").invoke("myMethod").should("eq", 20)
        // const stub = cy.stub().as('open')
        // cy.on('window:before:load', (win) => {
        //     cy.stub(win, 'open').callsFake(stub)
        // })
        cy.window().then((win) => {
            cy.stub(win, 'open').as('open');
        });
        
        cy.get(test.facebook).invoke('attr', 'href').then(($x) => {
            cy.log($x)
            cy.get(test.facebook).click({ force: true })
            cy.get('@open').should('be.calledWith', $x)
        })
        
        cy.get(test.twitter).invoke('attr', 'href').then(($x) => {
            cy.log($x)
            cy.get(test.twitter).click({ force: true })
            cy.get('@open').should('be.calledWith', $x)
        })
        
        cy.get(test.linkedin).invoke('attr', 'href').then(($x) => {
            cy.log($x)
            cy.get(test.linkedin).click({ force: true })
            cy.get('@open').should('be.calledWith', $x)
        })

        cy.get(test.email).invoke('attr', 'href').then(($x) => {
            cy.log($x)
            cy.get(test.email).click({ force: true })
            cy.get('@open').should('be.calledWith', $x)
        })

        // cy.get('@open').should('be.calledWith', faceurl)

        

        // cy.get('[data-src="Twitter"]').click({ force: true, multiple: true })
        // cy.get('[data-src="Facebook"]').should('have.attr', 'target', '_blank')
        // cy.window()
        // cy.get('[data-src="Twitter"]').should('have.attr', 'target', '_blank')
        // cy.get('[data-src="LinkedIn"]').should('have.attr', 'target', '_blank')
        // cy.get('[data-ga-track="Email Click"]').should('have.attr', 'type', 'email')
        // cy.get('[data-src="Facebook"]').should('not.be.visible')
    })

})
