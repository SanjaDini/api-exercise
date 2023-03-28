/// <reference types="cypress" />

describe('Test API calls with cypress api plugin', () => {
    let randomString = (Math.random() + 1).toString(36).substring(7);
    let main_key;
    
    it('GET method', () => {
        cy.api('https://l761dniu80.execute-api.us-east-2.amazonaws.com/default/exercise_api').then(response => {
            expect(response.status).to.eq(200)
        });
    });

    it('PUT method', () => {
        cy.api({
            url: 'https://l761dniu80.execute-api.us-east-2.amazonaws.com/default/exercise_api',
            method: 'PUT',
            failOnStatusCode: true,
            headers: {
                "accept": "application/json",
                "content-Type": "application/json"
            },
            body: {
                "main_key": randomString,
                "value": randomString
            }
        }).then(response => {
            main_key = response.body.main_key;
            expect(response.body.main_key).to.eq(randomString);
            expect(response.body.value).to.eq(randomString);
        });
    });

    it('DELETE method', () => {
        cy.api({
            url: 'https://l761dniu80.execute-api.us-east-2.amazonaws.com/default/exercise_api',
            method: 'DELETE',
            body: {
                "main_key": main_key
            }
        }).then(response => {
            expect(response.status).to.eq(200)
        });
    })
});