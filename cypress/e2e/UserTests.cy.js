import { last } from "lodash";
import BaseLib from "./Base/BaseLib";

describe("Petstore API TESTING", function() {

    const baseLib  = new BaseLib
    var username = baseLib.randomUserName();
    var id = baseLib.randomID(100000000);
    var usernameUpdate = baseLib.randomUserName();
    var firstName = baseLib.randomText(10);
    var lastName = baseLib.randomText(5);
    var email = baseLib.randomText(5)+baseLib.randomID(100000000)+'@test.com';


    it("POST /v2/user (User Create)", function () {
        console.log(firstName);
        console.log(lastName);
        console.log(email);


        const userInfo = {
            "id": id,
            "username": username,
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": "test123",
            "phone": "5456455658",
            "userStatus": 1
          }

        cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/user',
        body: userInfo
    }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('code', 200);
                expect(response.body).to.have.property('type', 'unknown');
                expect(response.body).to.have.property("message", '' + id  + '');
                expect(response.headers).to.have.property('content-type', 'application/json');
              })
    

        });

    
    it("PUT /v2/user/{username} (User Update)", function () {
        const userInfo = {
            "id": id,
            "username": usernameUpdate,
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": "test123",
            "phone": "5456455658",
            "userStatus": 1
          }

        cy.request({
        method: 'PUT',
        url: 'https://petstore.swagger.io/v2/user/'+username,
        body: userInfo
    }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('code', 200);
                expect(response.body).to.have.property('type', 'unknown');
                expect(response.body).to.have.property("message", '' + id + '');
              })
    

        });


        it("GET /v2/user/{userName}", function () {
        cy.request('GET', 'https://petstore.swagger.io/v2/user/' + usernameUpdate).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('id', id);
                expect(response.body).to.have.property('username', usernameUpdate);
                expect(response.body).to.have.property('firstName', firstName);
                expect(response.body).to.have.property('lastName', lastName);
                expect(response.body).to.have.property('email', email);
                expect(response.body).to.have.property('password', 'test123');
                expect(response.body).to.have.property('phone', '5456455658');
                expect(response.body).to.have.property('userStatus', 1);
              })
        
        });


   
    it("GET /v2/user/login", function () {
        const userInfo = {
            "username": usernameUpdate,
            "password": "test123"
          }

        cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/user/login',
        query: userInfo
    }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('code', 200);
                expect(response.body).to.have.property('type', 'unknown');
              })
        });


    it("Delete /v2/user/ (User Delete)", function () {

            cy.request({
            method: 'DELETE',
            url: 'https://petstore.swagger.io/v2/user/'+usernameUpdate,
        }).then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body).to.have.property('code', 200);
                    expect(response.body).to.have.property('type', 'unknown');
                    expect(response.body).to.have.property('message', usernameUpdate);
                  })
        
    
            });
    
        it("GET /v2/user/{userName}", function () {
            cy.request({method:'GET', url:'https://petstore.swagger.io/v2/user/' + usernameUpdate, failOnStatusCode: false} ).then((response) => {
                    expect(response.status).to.eq(404)
                    expect(response.body).to.have.property('code', 1);
                    expect(response.body).to.have.property('type', 'error');
                    expect(response.body).to.have.property('message', "User not found");
                  })
            
            });

        it("GET /v2/user/logout", function () {
                cy.request('GET', 'https://petstore.swagger.io/v2/user/logout').then((response) => {
                        expect(response.status).to.eq(200)
                        expect(response.body).to.have.property('code', 200);
                        expect(response.body).to.have.property('type', 'unknown');
                        expect(response.body).to.have.property('message', "ok");
                      })
                
                });
        
    
});
    