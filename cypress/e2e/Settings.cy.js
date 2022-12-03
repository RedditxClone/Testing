import Settings from '../support/settings'
import SETTINGSCOMP from '../support/SettingsComp.json'
import Home from '../support/home'
import Login from '../support/login'
import HOMECOMP from '../support/HomeComp.json'
import LOGINCOMP from '../support/LoginComp.json'


describe('Test Settings', function () {
  const settingsPage = new Settings()
  const homePage = new Home()
  const loginPage = new Login()

  it('Go to About', function () {
    settingsPage.navigateAcc();
    cy.url().should('eq', Cypress.env('baseUrl') + SETTINGSCOMP.ACCOUNT);
    
  })

  it('Change the email (ideal case)', function () {
    settingsPage.changemail('ay7aga123', 'newmail@gmail.com')
    settingsPage.savenewmail();

    //assertion  --> make sure the email have changed
    cy.get(SETTINGSCOMP.CURRENTMAIL)
    .should('eq', newmail);
    //or .contains(newmail)

  })

  it('Change the email with invalid mail', function () {
    settingsPage.changemail('ay7aga123', 'abcd')
    settingsPage.savenewmail();

    //assertion
    
    cy.get(SETTINGSCOMP.CURRENTMAIL).contains('newmail@gmail.com');
    
  })


  it('Change the email with wrong password', function () {
    settingsPage.changemail('wrongpass', 'doaa@gmail.com')
    settingsPage.savenewmail();

    //assertion
    cy.get(SETTINGSCOMP.CURRENTMAIL).contains('newmail@gmail.com');
    
  })

  it('Change the email with empty password to make sure the button is disabled', function () {
    cy.get(SETTINGSCOMP.CEMAIL)
        .should('exist')
        .click();

    cy.get(SETTINGSCOMP.NEWMAIL)
        .should('exist')
        .clear()
        .type('doaa@gmail.com');

    //assertion
    cy.get(SETTINGSCOMP.SAVEEMIAL)
      .should('be.disabled');

    settingsPage.closeupdatemail();
    cy.get(SETTINGSCOMP.CURRENTMAIL).contains('newmail@gmail.com');
    
  })

  it('Change the email with empty mail to make sure the button is disabled', function () {
    //I won't use the func here as we can't pass to it empty string ''
    cy.get(SETTINGSCOMP.CEMAIL)
        .should('exist')
        .click();
    cy.get(SETTINGSCOMP.CURRENTPASS)
        .should('exist')
        .clear()
        .type('ay7aga');

    //assertion
    cy.get(SETTINGSCOMP.SAVEEMIAL)
      .should('be.disabled');

    settingsPage.closeupdatemail();
    cy.get(SETTINGSCOMP.CURRENTMAIL).contains('newmail@gmail.com');
    
  })





//TODO --> try change password (but it is not exist in the UI)

  it('Log out and try to enter by the old then the new password', function () {
    homePage.logout();
    homePage.gotologin();
    loginPage.username('ay7aga')

    //1-with old password
    loginPage.password('ay7aga123')
    //assertion --> make sure it doesn't log me in
    loginPage.submit();
    cy.url().should('eq', Cypress.env('baseUrl') + LOGINCOMP.URL)

    //2-wiht the new password
    loginPage.password('newpassword')
    loginPage.submit();
    //assertion
    cy.get(HOMECOMP.DROPDOWNRIGHT).contains('ay7aga');
    
  })

  

  it('Change the gender', function () {
    settingsPage.navigateAcc();
    cy.url().should('eq', Cypress.env('baseUrl') + SETTINGSCOMP.ACCOUNT);
    
  })


  



  it('Go to Profile tab', function () {
    settingsPage.navigateprof()
    cy.url().should('eq', Cypress.env('baseUrl') + SETTINGSCOMP.PROFILE);
    
  })



  it('test adding new link', ()=>{
    settingsPage.addsociallink(3, 'anything', 'https://ay7aga.com');
    


  })

 })
