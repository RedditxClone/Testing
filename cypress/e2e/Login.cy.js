import Login from '../support/Login'
import LOGINCOMP from '../support/LoginComp.json'

describe('Test login', function (){

    const loginpage = new Login();
    // beforeEach(()=>{
    //     loginpage.naviage();
    // })


    ///////////////////////////////// test cases for username & password method /////////////////////////
    it("Login with valid username and empty password", function (){
        loginpage.naviage();
        loginpage.username('doaamagdy');   //TODO --> create it later
        loginpage.submit();
        //assertion
        cy.url().should('eq', LOGINCOMP.URL)
    })


    it("Login with empty username and valid password", function (){
        loginpage.password('9876543210');   //TODO --> create it later
        loginpage.submit();
        //assertion
        cy.url().should('eq', LOGINCOMP.URL)
    })


    
    it("Login with invalid username and password", function (){
        loginpage.username('doaamagdy');
        loginpage.password('123456789');
        loginpage.submit();
        //assertion
        cy.url().should('eq', LOGINCOMP.URL)
    })

    // I put this case at the end to avoid needing to logout to complete other test cases (as back mehtod won't logout)
    it("Login with invalid username and password", function (){
        loginpage.username('doaamagdy');
        loginpage.password('9876543210');
        loginpage.submit();
        //assertion
        cy.url().should('eq', LOGINCOMP.LOGEDINURL)
    })




    ///////////////////////////////// test cases for sign in with gmail /////////////////////////
    it("Login with empty gmail", function (){
        //loginpage.naviage();
        loginpage.withgoogle();
        loginpage.pressnext1();
        cy.wait(3000);
        //TODO --> assertion (url should remian the same) but I will check by making sure that the email field stell exist and it doesn't proceed to next page
        cy.get(LOGINCOMP.EMAIL).should('exist');
    })

    it("Login with valid gmail & empty password", function (){
        //loginpage.withgoogle();
        loginpage.gglemail('doaa.magdy2001@gmail.com');
        loginpage.pressnext1();
        cy.wait(3000);
        loginpage.gglpassword('');
        loginpage.pressnext2();
        cy.wait(3000);  //wait for 3 secs
        //assertion
        cy.get(LOGINCOMP.PASSGGL).should('exist');
        cy.back();
    })

    it("Login with invalid gmail & password", function (){
        //loginpage.withgoogle();
        loginpage.gglemail('ay7aga@gmail.com');
        loginpage.pressnext1();
        cy.wait(3000);
        loginpage.gglpassword('123456789');
        loginpage.pressnext2();
        cy.wait(3000);  //wait for 3 secs
        //assertion
        cy.get(LOGINCOMP.PASSGGL).should('exist');
        cy.back();
    })

    it("Login with valid gmail & invalid password", function (){
        //loginpage.withgoogle();
        loginpage.gglemail('doaa.magdy2001@gmail.com');
        loginpage.pressnext1();
        cy.wait(3000);
        loginpage.gglpassword('123456789');
        loginpage.pressnext2();
        cy.wait(3000);  //wait for 3 secs
        //assertion
        cy.get(LOGINCOMP.PASSGGL).should('exist');
        cy.back();
    })

    it("Login with valid gmail & valid password", function (){
        //loginpage.withgoogle();
        loginpage.gglemail('doaa.magdy2001@gmail.com');
        loginpage.pressnext1();
        cy.wait(3000);
        loginpage.gglpassword('');  //to write it later
        loginpage.pressnext2();
        cy.wait(3000);  //wait for 3 secs
        //assertion
        cy.get(LOGINCOMP.LOGEDINURLGGL).should('exist');
    })


})
