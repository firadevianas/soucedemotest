import config from './config'

describe('Api Testing',function(){

    it('API - GET details',()=>{
        cy.request({
            method: 'GET',
            url: `${config.URL}`,
            failOnStatusCode: false,
        }).as('details')
        cy.get('@details').its('status').should('eq',200)
        cy.get('@details').then((response)=>{
            cy.log(JSON.stringify(response.body))
        })
    })
})