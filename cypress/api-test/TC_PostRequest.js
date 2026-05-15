describe('Test POST API Request', () => {
    it('should be able to send a POST request and get response', () => {

        let url = 'https://jsonplaceholder.typicode.com/posts';
        let headers =  {
                'Content-type': 'application/json; charset=UTF-8',
            }
        let requestBody = {
                title: 'foo',
                body: 'bar',
                userId: 1,
            }

        let requestObject = {
            url: url,
            method: 'POST',
            heades: headers,
            body: requestBody
        }

        cy.request(requestObject).then(res => {
            //cy.log(JSON.stringify(res));
            let {status, body} = res
            expect(status).to.eq(201, 'Status is not 2xx')
            //cy.log(JSON.stringify(body))
            let {userId, id, title} = body
            let responseBody = body.body

            //verify requestBody = responseBody
            expect(userId).to.eq(requestBody.userId, 'userId is not correct')
            expect(id).to.eq(101, 'id is not correct')
            expect(title).to.eq(requestBody.title, 'title is not correct')
            expect(responseBody).to.eq(requestBody.body, 'body is not correct')
        })

    });
});