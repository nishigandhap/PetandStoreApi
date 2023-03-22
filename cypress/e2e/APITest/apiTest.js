/// <reference types ='cypress'/>

describe('API test suite', function () {

    const petUrl = Cypress.env('petUrl')
    // const conductUrl = Cypress.env('conductUrl')

    it('Get pet status', function () {
        cy.request('GET', petUrl + 'findByStatus?status=available', { fixture: 'getAPI' })
            .then((res) => {
                expect(res.status).to.eq(200)
                expect(res.body[0].status).to.be.exist
                cy.log(JSON.stringify(res))
            })
    })

    it.only('GET articles', function () {
        // cy.request('GET', Cypress.env('baseUrl') + '/api/tags').as('tags')
        // cy.get('@tags').then((response) => {
        //     expect(response.status).to.eq(200)
        //     expect(response.body.tags[0]).to.be.exist
        // })

        cy.fixture('articles.json').then((data) => {
            const articlesData = data.articles[0].slug
            cy.intercept('GET', Cypress.env('baseUrl') + '/api/articles*', data).as('getArticles')
            cy.log(articlesData)
            cy.wait('@getArticles').its('response.statusCode').should('eq', 200)
        })
    })


})



//cy.intercept('GET', Cypress.env('baseUrl') + '/api/articles*', { fixture: 'articles.json' }).as('getArticles')