describe('Test PUT API request', () => {
    it('should be able to send the request with PUT method', () => {
       
        let url = 'https://jsonplaceholder.typicode.com/posts/1';
        let headers =  {
                'Content-type': 'application/json; charset=UTF-8',
            }
        let requestBody = {
                id: 1,
                title: 'update_title',
                body: 'update_body',
                userId: 1,
            }

        let requestObject = {
            url: url,
            method: 'PUT',
            heades: headers,
            body: requestBody
        }

        cy.request(requestObject).then(res => {
            //cy.log(JSON.stringify(res));
            let {status, body} = res
            expect(status).to.eq(200, 'Verify the status code')
            //cy.log(JSON.stringify(body))
            let {userId, id, title} = body
            let responseBody = body.body

            //verify requestBody = responseBody
            expect(userId).to.eq(requestBody.userId, 'Verify the userId')
            expect(id).to.eq(1, 'Verify the id')
            expect(title).to.eq(requestBody.title, 'Verify the title')
            expect(responseBody).to.eq(requestBody.body, 'Verify the body')
        })

    });
});