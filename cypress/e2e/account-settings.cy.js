import AccSettings from '../support/account-settings'
import ACCSETTINGSCOMP from '../support/account-settings-comp.json'
import Home from '../support/home'
import Login from '../support/login'


describe('Test Settings', function () {
  const settingsPage = new AccSettings()
  const homePage = new Home()
  const loginPage = new Login()

  it('login then go to Account tab', function () {
    loginPage.navigate();
    loginPage.username('doaamagdy');
    loginPage.password('doaamagdypassword');
    loginPage.submit();
    homePage.gotousersetting();
    cy.url().should('eq', Cypress.env('baseUrl') + ACCSETTINGSCOMP.ACCOUNT);
    
  })


  it('Change the country', function (){
    settingsPage.changecountry('Ecuador');

    //assertions
    cy.get(ACCSETTINGSCOMP.CHANGEDSAVEDMESSAGE).contains('Changes saved');
    settingsPage.navigateprof();
    settingsPage.navigateAcc();
    cy.get(ACCSETTINGSCOMP.CCOUNTRY).contains('Ecuador');
      
  })


  it('Change the gender', function () {
    settingsPage.navigateAcc();
    cy.url().should('eq', Cypress.env('baseUrl') + ACCSETTINGSCOMP.ACCOUNT);

    settingsPage.changegender('Woman');
    //assertions
    cy.get(ACCSETTINGSCOMP.CHANGEDSAVEDMESSAGE).contains('Changes saved');
    settingsPage.navigateprof();
    settingsPage.navigateAcc();
    cy.get(ACCSETTINGSCOMP.CGENDER).contains('Woman');
  })




  it('Change the email (ideal case)', function () {
    settingsPage.changemail('doaamagdypassword', 'newmail@gmail.com')
    settingsPage.savenewmail();

    //assertion  --> make sure the email have changed   -- wrong (no assertions can be done here (as there will be verification email sent first))
    // cy.get(ACCSETTINGSCOMP.CURRENTMAIL)
    // .should('eq', newmail);
    //or .contains(newmail);

    //to be deleted when they fix it
    settingsPage.closeupdatemail();

  })

  it('Change the email with invalid mail and the correct password', function () {
    settingsPage.changemail('doaamagdypassword', 'abcd')
    settingsPage.savenewmail();

    //assertions
    cy.get(ACCSETTINGSCOMP.SAVEEMIAL).should('be.disabled')
    cy.get(ACCSETTINGSCOMP.CEMAILERRORMESSAGE).contains('You entered the current email address. Please enter a different one to proceed.')
    //cy.get(ACCSETTINGSCOMP.CURRENTMAIL).contains('newmail@gmail.com');

    settingsPage.closeupdatemail();
    
  })


  //to delete this test case 
  it('Change the email with wrong password and correct new mail', function () {
    settingsPage.changemail('wrongpass', 'doaa@gmail.com')
    settingsPage.savenewmail();

    settingsPage.closeupdatemail();

  })

  it('Change the email with empty password to make sure the button is disabled', function () {
    settingsPage.changemail(' ', 'doaa@gmail.com')

    //assertion
    cy.get(ACCSETTINGSCOMP.SAVEEMIAL)
      .should('be.disabled');

    settingsPage.closeupdatemail();
    
  })

  it('Change the email with empty mail to make sure the button is disabled', function () {
    settingsPage.changemail('doaamagdypassword', ' ')
  
    //assertion
    cy.get(ACCSETTINGSCOMP.SAVEEMIAL)
      .should('be.disabled');

    settingsPage.closeupdatemail();
    
    
  })

  it('delete the account', function(){
    settingsPage.deleteaccount('ahmedmagdy', 'ahmedmagdypassword');
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





 })
