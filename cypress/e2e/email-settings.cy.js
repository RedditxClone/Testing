import EmailSettings from '../support/email-settings'
import EMAILSETTINGSCOMP from '../support/email-settings-comp.json'
import Home from '../support/home'
import Login from '../support/login'


describe('Test Settings', function () {
  const settingsPage = new EmailSettings()
  const homePage = new Home()
  const loginPage = new Login()

  it('login then go to Emails tab', function () {
    loginPage.navigate();
    loginPage.username('doaamagdy');
    loginPage.password('doaamagdypassword');
    loginPage.submit();
    homePage.gotousersetting();
    settingsPage.navigateEmail();
    //assertion
    cy.url().should('eq', Cypress.env('baseUrl') + EMAILSETTINGSCOMP.EMAILS);
    
  })



  it('make sure that all default values are like original reddit', function () {
    cy.get(EMAILSETTINGSCOMP.NEWFOLLOWER)
      .should('be.checked');

    cy.get(EMAILSETTINGSCOMP.CHATREQUESTS)
      .should('be.checked');

    cy.get(EMAILSETTINGSCOMP.UNSUBSCRIBEFROMALLMAILS)
      .should('not.be.checked');
  })


  it('uncheck the new followers checkbox', function () {
    settingsPage.uncheckNewFollowers();

    //assertion
    cy.get(EMAILSETTINGSCOMP.CHANGESSAVEDMSG).contains('Changes saved')
    settingsPage.navigateAcc();
    settingsPage.navigateEmail();
    cy.get(EMAILSETTINGSCOMP.NEWFOLLOWER)
      .should('not.be.checked')

    
  })

  it('check the new followers checkbox', function () {
    settingsPage.checkNewFollowers();

    //assertion
    cy.get(EMAILSETTINGSCOMP.CHANGESSAVEDMSG).contains('Changes saved')
    settingsPage.navigateAcc();
    settingsPage.navigateEmail();
    cy.get(EMAILSETTINGSCOMP.NEWFOLLOWER)
      .should('be.checked')

  })

  
  it('uncheck the chat requests checkbox', function () {
    settingsPage.uncheckChatReq();

    //assertion
    cy.get(EMAILSETTINGSCOMP.CHANGESSAVEDMSG).contains('Changes saved')
    settingsPage.navigateAcc();
    settingsPage.navigateEmail();
    cy.get(EMAILSETTINGSCOMP.CHATREQUESTS)
      .should('not.be.checked')

    
  })


  it('check the chat requests checkbox', function () {
    settingsPage.checkChatReq();

    //assertion
    cy.get(EMAILSETTINGSCOMP.CHANGESSAVEDMSG).contains('Changes saved')
    settingsPage.navigateAcc();
    settingsPage.navigateEmail();
    cy.get(EMAILSETTINGSCOMP.CHATREQUESTS)
      .should('be.checked')

    
  })


  

  it('check the unsubscribe from all mails checkbox', function () {
    settingsPage.checkUnsubscribeFromAllMails();

    //assertion
    cy.get(EMAILSETTINGSCOMP.CHANGESSAVEDMSG).contains('Changes saved')
    settingsPage.navigateAcc();
    settingsPage.navigateEmail();
    cy.get(EMAILSETTINGSCOMP.UNSUBSCRIBEFROMALLMAILS)
      .should('be.checked')

    
  })


  it('uncheck the unsubscribe from all mails checkbox', function () {
    settingsPage.uncheckUnsubscribeFromAllMails();

    //assertion
    cy.get(EMAILSETTINGSCOMP.CHANGESSAVEDMSG).contains('Changes saved')
    settingsPage.navigateAcc();
    settingsPage.navigateEmail();
    cy.get(EMAILSETTINGSCOMP.UNSUBSCRIBEFROMALLMAILS)
      .should('not.be.checked')

    
  })


 })
