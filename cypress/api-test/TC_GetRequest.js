describe (' Test GET request ' , () => { //mocha framework,
    it(' should be able to send GET request and verify the response', () => {

        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET'

        }).then(res => {
            //cy.log(JSON.stringify(res.body));
            expect(res.status).to.equal(200);
            expect(res.body.length).to.eq(100);
        })

    })
})