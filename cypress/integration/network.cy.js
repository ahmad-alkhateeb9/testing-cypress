/// <reference types="cypress" />
import { test } from '../../src/networkData'

describe('try url', () => {
    let saver
    it('test lorem ipsum site', () => {

        // cy.intercept('GET','https:\/\/lipsum.com\/').as('site').then(($e) => {
        // cy.request('https://jsonplaceholder.cypress.io/comments')

        // cy.get('@site').should((response) => {
        //     expect(response.body).to.have.property('h1','Lorem Ipsum')
        // expect(response.body).to.have.include('<title>')

        // expect(response).
        // })
        cy.request(test.path).as('site')
        cy.get('@site').its('body').should('include',test.searcher )

        // .should('contain', 'lorem ipsum')
    })
})