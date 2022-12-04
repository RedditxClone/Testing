import SPSettings from '../support/safety-privacy-settings'
import SPSETTINGSCOMP from '../support/safety-privacy-settings-comp.json'
import Home from '../support/home'
import Login from '../support/login'


describe('Test Safety & Privacy Settings', function () {
  const settingsPage = new SPSettings()
  const homePage = new Home()
  const loginPage = new Login()

  it('login then go to Safety and Privacy tab', function () {
    loginPage.navigate();
    loginPage.username('doaamagdy');
    loginPage.password('doaamagdypassword');
    loginPage.submit();
    homePage.goToUserSetting();
    settingsPage.navigateSafetyPrivacy();
    //cy.url().should('eq', Cypress.env('baseUrl') + SPSETTINGSCOMP.SAFETYANDPRIVACY);
    
  })

  it('block a new user', function () {
    settingsPage.blockNewUser('ahmedmagdy');

    //assertion
    cy.get(SPSETTINGSCOMP.BLOCKEDMESSAGE).contains('ahmedmagdy is now blocked');
    settingsPage.navigateProf();
    settingsPage.navigateSafetyPrivacy();
    cy.get(SPSETTINGSCOMP.BLOCKEDLIST).contains('ahmedmagdy');
  })

  it('remove the recently blocked user', function () {
    settingsPage.removeBlockedUser();

    //assertions
    cy.get(SPSETTINGSCOMP.UNBLOCKEDMESSAGE).contains('ahmedmagdy is now unblocked');

    
  })


  it('try to block the same user again which is incorrect as we have to wait for 24 hours', function () {
    settingsPage.blockNewUser('ahmedmagdy');

    //assertions
    cy.get(SPSETTINGSCOMP.BLOCKAGAINERRORMESG).contains('You can\'t block u/ahmedmagdy for 24 hours after unblocking them');
    
  }) 




 })
