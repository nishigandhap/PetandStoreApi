
/// <reference types = "cypress"/>


describe("Delete pet from the store and verify pet is not found", () => {
    let randomId = ""
    let testId = ""
    const petUrl = Cypress.env("petUrl")

    it("Create a new pet and delete it from the store and verify pet is not found", () => {
        var pattern = '0123456789'
        for (var i = 0; i < 5; i++)
            randomId += pattern.charAt(Math.floor(Math.random() * pattern.length))
        testId = randomId
        // 1. Create new pet
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
            cy.log("Pet id is: " + petId)
            expect(res.status).to.eq(200)
            expect(res.body).has.property('id', petId)

            // 2. Get newly create pet with petId
            cy.request({
                method: 'GET',
                url: petUrl + petId
            }).then((res) => {
                expect(res.status).to.eq(200)
                expect(res.body).has.property('id', petId)

                // 3. Delete the newly created pet with petId
                cy.request({
                    method: 'DELETE',
                    url: petUrl + petId,
                    failOnStatusCode: false,
                    body: {
                        "code": 200,
                        "type": "unknown",
                        "message": petId
                    }
                }).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body).has.property('code', 200)

                    // 4. Verify pet is not found i.e deleted
                    cy.request({
                        method: 'GET',
                        url: petUrl + petId,
                        failOnStatusCode: false,
                        body: {
                            "code": 1,
                            "type": "error",
                            "message": "Pet not found"
                        }
                    }).then((res) => {
                        expect(res.status).to.eq(404)
                        expect(res.body).has.property("code", 1)
                        expect(res.body).has.property("message", 'Pet not found')

                    })
                })
            })
        })
    })
})
