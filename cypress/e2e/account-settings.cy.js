import AccSettings from '../support/account-settings'
import ACCSETTINGSCOMP from '../support/account-settings-comp.json'
import Home from '../support/home'
import Login from '../support/login'
import LOGINCOMP from '../support/login-comp.json'



describe('Test Account Settings', function () {
  const settingsPage = new AccSettings()
  const homePage = new Home()
  const loginPage = new Login()

  it('Go to login page and login as a user', function () {
    loginPage.navigate()

  
      
    cy.get(LOGINCOMP.USERNAME)
    .type('doaamagdy')

    cy.get(LOGINCOMP.PASSWORD)
    .type('doaamagdypassword')

    loginPage.submit()



  })



  it('Go to login page and login as a user', function () {

      cy.get(LOGINCOMP.USERNAME)
      .clear()
      .type('doaamagdy')

      cy.get(LOGINCOMP.PASSWORD)
      .clear()
      .type('doaamagdypassword')

      cy.get(LOGINCOMP.USERNAME)
      .clear()
      .type('doaamagdy')

      cy.get(LOGINCOMP.PASSWORD)
      .clear()
      .type('doaamagdypassword')

 
    //   loginPage.username('doaamagdy')
    //   loginPage.password('doaamagdypassword')
      // assertion
      cy.get(LOGINCOMP.LOGIN).click()
      
      loginPage.submit()
      //assertion
      cy.contains('doaamagdy');

    })


  it('go to Account tab', function () {

    homePage.goToUserSetting();
    //cy.url().should('eq', Cypress.env('baseUrl') + ACCSETTINGSCOMP.ACCOUNT);
    
  })

  it('Change the country', function (){
    settingsPage.changeCountry('Ecuador');

    //assertions
    cy.get(ACCSETTINGSCOMP.CHANGEDSAVEDMESSAGE).contains('Changes saved');
    settingsPage.navigateProf();
    settingsPage.navigateAcc();
    cy.get(ACCSETTINGSCOMP.CCOUNTRY).contains('Ecuador');
      
  })


  it('Change the gender', function () {
    settingsPage.closeUpdatEmail();
    settingsPage.changeGender('Woman');
    //assertions
    cy.get(ACCSETTINGSCOMP.CHANGEDSAVEDMESSAGE).contains('Changes saved');
    settingsPage.navigateProf();
    settingsPage.navigateAcc();
    cy.get(ACCSETTINGSCOMP.CGENDER).contains('Woman');
  })




  it('Change the email (ideal case)', function () {
    settingsPage.changEmail('doaamagdypassword', 'newmail@gmail.com')
    settingsPage.saveNewMail();

    //assertion  --> make sure the email have changed   -- wrong (no assertions can be done here (as there will be verification email sent first))
    // cy.get(ACCSETTINGSCOMP.CURRENTMAIL)
    // .should('eq', newmail);
    //or .contains(newmail);

    //to be deleted when they fix it
    settingsPage.closeUpdatEmail();

  })

  it('Change the email with invalid mail and the correct password', function () {
    settingsPage.closeUpdatEmail();
    settingsPage.changEmail('doaamagdypassword', 'abcd')
    settingsPage.saveNewMail();

    //assertions
    cy.get(ACCSETTINGSCOMP.SAVEEMIAL).should('be.disabled')
    cy.get(ACCSETTINGSCOMP.CEMAILERRORMESSAGE).contains('You entered the current email address. Please enter a different one to proceed.')
    //cy.get(ACCSETTINGSCOMP.CURRENTMAIL).contains('newmail@gmail.com');

    settingsPage.closeUpdatEmail();
    
  })


  //to delete this test case 
  it('Change the email with wrong password and correct new mail', function () {
    settingsPage.closeUpdatEmail();
    settingsPage.changEmail('wrongpass', 'doaa@gmail.com')
    settingsPage.saveNewMail();

    settingsPage.closeUpdatEmail();

  })

  it('Change the email with empty password to make sure the button is disabled', function () {
    settingsPage.closeUpdatEmail();
    settingsPage.changEmail(' ', 'doaa@gmail.com')

    //assertion
    cy.get(ACCSETTINGSCOMP.SAVEEMIAL)
      .should('be.disabled');

    settingsPage.closeUpdatEmail();
    
  })

  it('Change the email with empty mail to make sure the button is disabled', function () {
    settingsPage.closeUpdatEmail();
    settingsPage.changEmail('doaamagdypassword', ' ')
  
    //assertion
    cy.get(ACCSETTINGSCOMP.SAVEEMIAL)
      .should('be.disabled');

    settingsPage.closeUpdatEmail();
    
    
  })

  it('delete the account', function(){
    settingsPage.closeUpdatEmail();
    settingsPage.deleteAccount('doaamagdy', 'doaamagdypassword');
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
