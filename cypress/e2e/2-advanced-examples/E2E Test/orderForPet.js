/// < reference types ="cypress" />


describe("Order Pet from the store suite", () => {
    const petUrl = Cypress.env("petUrl")
    const storeUrl = Cypress.env("storeUrl")
    let randomId = ""
    let testId = ""

    it("E2E order pet", () => {
        var pattern = '0123456789'
        for (var i = 0; i < 5; i++)
            randomId += pattern.charAt(Math.floor(Math.random() * pattern.length))
        testId = randomId
        //1. Create new pet Id
        cy.request({
            method: 'POST',
            url: petUrl,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "id": testId
            }
        }).then((res) => {
            const petId = res.body.id
            expect(res.status).to.eq(200)
            expect(res.body).has.property('id', petId)

            //2. Get pet with status id
            cy.request({
                method: 'GET',
                url: petUrl + petId,
            }).then((res) => {
                expect(res.status).to.eq(200)
                expect(res.body.id).to.eq(petId)
            }).then((res) => {
                //3. Order pet
                cy.request({
                    method: 'POST',
                    url: storeUrl + 'order',
                    body: {
                        "id": petId,
                        "status": 'placed'
                    }
                }).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body).has.property('id', petId)
                    expect(res.body).has.property('status', 'placed')
                })
            })
        })

    })
})