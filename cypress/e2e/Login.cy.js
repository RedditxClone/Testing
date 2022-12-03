import Login from '../support/login'
import LOGINCOMP from '../support/login-comp.json'
import SIGNUPCOMP from '../support/signup-comp.json'


describe('Test login', function () {
  const loginPage = new Login()


  it('Go to SignUp page then come back again', function () {
    loginPage.navigate()
    loginPage.signup()
    
    // assertion
    cy.url().should('eq', Cypress.env('baseUrl') + SIGNUPCOMP.URL)
    // go back to login again
    cy.go('back')
  })

  it('Go to forget username page then come back again', function () {
    loginPage.forgetUsername();
    
    // assertion
    cy.url().should('eq', Cypress.env('baseUrl') + LOGINCOMP.FORGETUSERNAMEURL);
    // go back to login again
    cy.go('back')
  })


  it('Go to forget password page then come back again', function () {
    loginPage.forgetPassword();
    
    // assertion
    cy.url().should('eq', Cypress.env('baseUrl') + LOGINCOMP.FORGETPASSWORDURL);
    // go back to login again
    cy.go('back')
  })


  // /////////////////////////////// test cases for username & password method /////////////////////////


  it('Login with valid username and empty password', function () {
    loginPage.username('doaamagdy'); // TODO --> create it later
    loginPage.clearPass();
    // assertion
    cy.get(LOGINCOMP.LOGIN).should('be.disabled');
    cy.url().should('eq', Cypress.env('baseUrl') + LOGINCOMP.URL)
  })

  it('Login with empty username and valid password', function () {
    loginPage.password('9876543210'); // TODO --> create it later
    loginPage.clearUsername();
    // assertion
    cy.url().should('eq', Cypress.env('baseUrl') + LOGINCOMP.URL)
  })


  it('Login with invalid username and password', function () {
    loginPage.username('doaamagdy')
    loginPage.password('123456789')
    loginPage.submit()
    // assertion
    cy.get(LOGINCOMP.LOGIN).should('be.enabled');
    cy.url().should('eq', Cypress.env('baseUrl') + LOGINCOMP.URL)
  })

  it('Login with invalid username and valid password', function () {
    loginPage.username('doaamagdy')
    loginPage.password('ay7aga123')
    loginPage.submit()
    // assertion
    //cy.get(LOGINCOMP.LOGIN).should('be.enabled');
    cy.url().should('eq', Cypress.env('baseUrl') + LOGINCOMP.URL)
  })

  it('Login with valid username and invalid password', function () {
    loginPage.username('doaamagdy')
    loginPage.password('notvalid')
    //loginPage.submit()
    // assertion
    cy.get(LOGINCOMP.LOGIN).should('be.disabled');
    cy.url().should('eq', Cypress.env('baseUrl') + LOGINCOMP.URL)
  })

  // I put this case at the end to avoid needing to logout to complete other test cases (as back mehtod won't logout)
  it('Login with valid username and password', function () {
    loginPage.username('doaamagdy'); 
    loginPage.password('doaamagdypassword');
    // assertion
    cy.get(LOGINCOMP.LOGIN).should('be.enabled');
    
    loginPage.submit()
    //assertion
    cy.contains('doaamagdy');
    //cy.get(LOGINCOMP.USERNAMESIGNED).contains('ay7aga');
    //cy.url().should('eq', Cypress.env('baseUrl') + LOGINCOMP.LOGEDINURL)
  })

 
 })
