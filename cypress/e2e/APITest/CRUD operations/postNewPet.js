/// <reference types ="cypress"/>


describe("Create new pet and verify pet is stored", () => {

    let randomId = ""
    let testId = ""
    const petUrl = Cypress.env("petUrl")

    it("Add new pet to the store and verify pet is stored", () => {
        var pattern = '0123456789'
        for (var i = 0; i < 5; i++)
            randomId += pattern.charAt(Math.floor(Math.random() * pattern.length))
        testId = randomId
        //1. Create new pet with petId
        cy.request({
            method: 'POST',
            url: petUrl,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "id": testId,
                "category": {
                    "id": 0,
                    "name": "string"
                },
                "name": "New pet",
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                        "id": 0,
                        "name": "New pet"
                    }
                ],
                "status": "available"
            }

        }).then((res) => {
            const petId = res.body.id
            expect(res.status).to.eq(200)
            expect(res.body).has.property('id', petId)

            // 2. Verify new pet is stored
            cy.request({
                method: 'GET',
                url: petUrl + petId,
                body: {
                    "id": petId

                }
            }).then((res) => {
                expect(res.status).to.eq(200)
                expect(res.body).has.property('id', petId)
            })

        })

    })

})