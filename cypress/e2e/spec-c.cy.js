// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

const baseUrl = Cypress.config('baseUrl')

it(`tests the server ${baseUrl}`, () => {
  cy.visit('/')
  cy.contains('h1', 'My App')
})
