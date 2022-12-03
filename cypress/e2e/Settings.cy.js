import Settings from '../support/settings'
import SETTINGSCOMP from '../support/settings-comp.json'
import Home from '../support/home'
import Login from '../support/login'
import HOMECOMP from '../support/home-comp.json'
import LOGINCOMP from '../support/login-comp.json'


describe('Test Settings', function () {
  const settingsPage = new Settings()
  const homePage = new Home()
  const loginPage = new Login()

  it('Go to Account tab', function () {
    settingsPage.navigateAcc();
    cy.url().should('eq', Cypress.env('baseUrl') + SETTINGSCOMP.ACCOUNT);
    
  })

  it('Change the email (ideal case)', function () {
    settingsPage.changemail('doaamagdypassword', 'newmail@gmail.com')
    settingsPage.savenewmail();

    //assertion  --> make sure the email have changed   -- wrong (no assertions can be done here (as there will be verification email sent first))
    // cy.get(SETTINGSCOMP.CURRENTMAIL)
    // .should('eq', newmail);
    //or .contains(newmail);

  })

  it('Change the email with invalid mail and the correct password', function () {
    settingsPage.changemail('doaamagdypassword', 'abcd')
    settingsPage.savenewmail();

    //assertions
    cy.get(SETTINGSCOMP.SAVEEMIAL).should('be.disabled')
    cy.get(SETTINGSCOMP.CEMAILERRORMESSAGE).contains('You entered the current email address. Please enter a different one to proceed.')
    //cy.get(SETTINGSCOMP.CURRENTMAIL).contains('newmail@gmail.com');

    settingsPage.closeupdatemail();
    
  })


  //to delete this test case 
  it('Change the email with wrong password and correct new mail', function () {
    settingsPage.changemail('wrongpass', 'doaa@gmail.com')
    settingsPage.savenewmail();

  })

  it('Change the email with empty password to make sure the button is disabled', function () {
    settingsPage.changemail(' ', 'doaa@gmail.com')

    //assertion
    cy.get(SETTINGSCOMP.SAVEEMIAL)
      .should('be.disabled');

    settingsPage.closeupdatemail();
    
  })

  it('Change the email with empty mail to make sure the button is disabled', function () {
    settingsPage.changemail('doaamagdypassword', ' ')
  
    //assertion
    cy.get(SETTINGSCOMP.SAVEEMIAL)
      .should('be.disabled');

    settingsPage.closeupdatemail();
    
    
  })





//TODO --> try change password (but it is not exist in the UI)

  // it('Log out and try to enter by the old then the new password', function () {
  //   homePage.logout();
  //   homePage.gotologin();
  //   loginPage.username('ay7aga')

  //   //1-with old password
  //   loginPage.password('ay7aga123')
  //   //assertion --> make sure it doesn't log me in
  //   loginPage.submit();
  //   cy.url().should('eq', Cypress.env('baseUrl') + LOGINCOMP.URL)

  //   //2-wiht the new password
  //   loginPage.password('newpassword')
  //   loginPage.submit();
  //   //assertion
  //   cy.get(HOMECOMP.DROPDOWNRIGHT).contains('ay7aga');
    
  // })

  /////////////// gender

  it('Change the gender', function () {
    settingsPage.navigateAcc();
    cy.url().should('eq', Cypress.env('baseUrl') + SETTINGSCOMP.ACCOUNT);

    settingsPage.changegender('Woman');
    //assertions
    cy.get(SETTINGSCOMP.CHANGEDSAVEDMESSAGE).contains('Changes saved');
    settingsPage.navigateprof();
    settingsPage.navigateAcc();
    cy.get(SETTINGSCOMP.CGENDER).contains('Woman');
  })


  it('Change the country', function (){
    //settingsPage.navigateAcc();
    settingsPage.changecountry('Ecuador');

    //assertions
    cy.get(SETTINGSCOMP.CHANGEDSAVEDMESSAGE).contains('Changes saved');
    settingsPage.navigateprof();
    settingsPage.navigateAcc();
    cy.get(SETTINGSCOMP.CCOUNTRY).contains(newcountry);
      
  })


  



  it('Go to Profile tab', function () {
    settingsPage.navigateprof()
    cy.url().should('eq', Cypress.env('baseUrl') + SETTINGSCOMP.PROFILE);
    
  })



  it('test adding new link', ()=>{
    settingsPage.addsociallink(3, 'anything', 'https://ay7aga.com');
    


  })

 })
