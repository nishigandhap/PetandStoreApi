/// < reference types =" cypress" />


describe("Put method suite for updating the existing data", () => {
    let randomId = ""
    let testId = ""
    const petUrl = Cypress.env("petUrl")

    it("Update the exisitng pet with put method", () => {
        var pattern = '0123456789'

        for (var i = 0; i < 5; i++)
            randomId += pattern.charAt(Math.floor(Math.random() * pattern.length))
        testId = randomId
        //1. Update existing data
        cy.request({
            method: 'PUT',
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
                "name": "New dog",
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                        "id": 0,
                        "name": "string"
                    }
                ],
                "status": "available"
            }
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).has.property('id')

        }).then((res) => {
            const petId = res.body.id
            cy.log("Pet id is: " + petId)

            // 2. Verify data is updated
            cy.request({
                method: 'GET',
                url: petUrl + petId
            }).then((res) => {
                expect(res.status).to.eq(200)
                expect(res.body).has.property('id', petId)

            })
        })

    })

})