describe('Test DELETE API request', () => {
    it('should be able to send a DELETE request', () => {
        
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            method: 'DELETE'

        }).then(res => {
            //cy.log(JSON.stringify(res.status));
            expect(res.status).to.eq(200, 'Verfy the status')

        })

    });
});