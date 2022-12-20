Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    cy.get('#firstName').type('Mateus')
    cy.get('#lastName').type('veroneze')
    cy.get('#email').type('Mateuspv2003')
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()
})
