it('Create new user', () => {
    var user = {
        "name": 'Riyan',
        "job": 'Quality Assurance'
    } 
    cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
        expect(response.status).equal(201)
        /// Assertion tambahan
        expect(response.body.name).equal(user.name)
        expect(response.body.job).equal(user.job)
    })
})
