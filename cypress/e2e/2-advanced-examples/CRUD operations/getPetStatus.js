/// <reference types ="cypress"/>

describe("Get Pet status suite", () => {
    const petUrl = Cypress.env("petUrl")
    const storeUrl = Cypress.env("storeUrl")

    it('Get pet status available', () => {
        cy.request({
            method: 'GET',
            url: petUrl + "findByStatus?status=available"
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
            expect(res.body[0].status).to.eq('available')
        })
    })

    it('Get pet status pending', () => {
        cy.request({
            method: 'GET',
            url: petUrl + "findByStatus?status=pending"

        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
            expect(res.body[0].status).to.eq("pending")
        })

    })
    it('Get pet status sold', () => {
        cy.request({
            method: 'GET',
            url: petUrl + "findByStatus?status=sold"

        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
            expect(res.body[0].status).to.eq("sold")
        })
    })

    it("Get pets inventory status", () => {
        cy.request({
            method: 'GET',
            url: storeUrl + 'inventory'

        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
        })
    })

    it("Enter invalid petId and check 404 status code is displayed", () => {
        cy.request({
            method: 'GET',
            url: petUrl + '87',
            failOnStatusCode: false,
            body: {
                "code": 1,
                "type": "error",
                "message": "Pet not found"
            }
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(404)
            expect(res.body).has.property('code', 1)
            expect(res.body).has.property('type', 'error')
            expect(res.body).has.property('message', 'Pet not found')
        })

    })

})