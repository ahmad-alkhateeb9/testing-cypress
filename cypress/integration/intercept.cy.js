/// <reference types="cypress" />
import { test } from '../src/objectData'

describe('try url', () => {
    let saver
    it('test lorem ipsum site', () => {

        cy.intercept({
                method: 'GET',
                url: test.pathOne
            }, { fixture: 'example.json' })

        cy.visit(test.pathTow)

    })
})
    // cy.intercept({
    //     method: 'GET',
    //     url: test.path
    // }, (req) => {
    //     req.reply((res) => {

    //         fixture: 'example.json'
    //       res.send
    //     })
    //         .as('name')