/// <reference types="cypress" />

describe('Test Reqres endpoints', () => {
    it('GET single user', () => {
        cy.api('/api/users/2').then(response => {
            expect(response.status).to.eq(200);
        })
    });

    it('GET list of users', () => {
        cy.api({
            url: '/api/users', 
            qs: {
                page: 2
            }
         }).then(response => {
            expect(response.status).to.eq(200);
        })
    });

    it('GET single user not found', () => {
        cy.api({url: `/api/users/23`, failOnStatusCode: false}).then(response => {
            expect(response.body).to.be.empty;
            expect(response.status).to.eq(404);
        });
    });

    it('POST new user', () => {
        cy.api({
            url: '/api/users',
            method: 'POST',
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then(response => {
            expect(response.status).to.eq(201);
            expect(response.body.name).to.eq('morpheus');
            expect(response.body.job).to.eq('leader')
        });
    });

    it('PUT new user', () => {
        cy.api({
            url: '/api/users/2',
            method: 'PUT',
            body: {
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq('morpheus');
            expect(response.body.job).to.eq('zion resident')
        });
    });

    it('DELETE new user', () => {
        cy.api({
            url: '/api/users/2',
            method: 'DELETE',
        }).then(response => {
            expect(response.status).to.eq(204);
        });
    });

    it('Register new user', () => {
        cy.api({
            url: '/api/register',
            method: 'POST',
            body: {
                email: "eve.holt@reqres.in",
                password: "pistol"
            }
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.id).to.eq(4);
            expect(response.body.token).to.not.empty;
        });
    });

    it('Unsuccesfull user registration', () => {
        cy.api({
            url: '/api/register',
            method: 'POST',
            failOnStatusCode: false,
            body: {
                email: "sydney@fife",
            }
        });

        cy.get('[data-cy=status]')
        .eq(0)
        .should('be.visible')
        .and('contain', '400')
        .and('have.css', 'color', 'rgb(255, 87, 112)')
    });

    it('Login successful', () => {
        cy.api({
            url: '/api/login',
            method: 'POST',
            body: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.token).to.not.empty;
        });
    });
}) 