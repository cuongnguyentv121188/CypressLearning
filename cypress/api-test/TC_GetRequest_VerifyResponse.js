describe (' Test GET request ' , () => { //mocha framework,
    it(' should be able to send GET request and verify the response that has no empty items', () => {

        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET'

        }).then(res => {
            // Destructure
            let {status, body} = res
            expect(status).to.equal(200);
            expect(body.length).to.eq(100);

            //get a random element from array object
             // random từ 0-1
            let randomIndex = Math.random() * body.length
            let roundedRandomIndex = Math.floor(randomIndex)  // làm tròn số
            let randomObject = body[roundedRandomIndex]

            //verification
            verifyNotEmpty('userID', randomObject.userId)
            verifyNotEmpty('id', randomObject.id)
            verifyNotEmpty('title', randomObject.title)
            verifyNotEmpty('body', randomObject.body)
        })

    })
})

let verifyNotEmpty = (name, data) => {
    if(!data){
        expect(true).to.eq(false, `${name} is empty`)
    }
}