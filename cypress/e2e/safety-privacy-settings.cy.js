import SPSettings from '../support/safety-privacy-settings'
import SPSETTINGSCOMP from '../support/safety-privacy-settings-comp.json'
import Home from '../support/home'
import Login from '../support/login'


describe('Test Settings', function () {
  const settingsPage = new SPSettings()
  const homePage = new Home()
  const loginPage = new Login()

  it('login then go to Safety and Privacy tab', function () {
    loginPage.navigate();
    loginPage.username('doaamagdy');
    loginPage.password('doaamagdypassword');
    loginPage.submit();
    homePage.gotousersetting();
    settingsPage.navigatesafetyprivacy();
    cy.url().should('eq', Cypress.env('baseUrl') + SPSETTINGSCOMP.SAFETYANDPRIVACY);
    
  })

  it('block a new user', function () {
    settingsPage.blocknewuser('ahmedmagdy');

    //assertion
    cy.get(SPSETTINGSCOMP.BLOCKEDMESSAGE).contains('ahmedmagdy is now blocked');
    settingsPage.navigateprof();
    settingsPage.navigatesafetyprivacy();
    cy.get(SPSETTINGSCOMP.BLOCKEDLIST).contains('ahmedmagdy');
  })

  it('remove the recently blocked user', function () {
    settingsPage.removeblockeduser();

    //assertions
    cy.get(SPSETTINGSCOMP.UNBLOCKEDMESSAGE).contains('ahmedmagdy is now unblocked');

    
  })


  it('try to block the same user again which is incorrect as we have to wait for 24 hours', function () {
    settingsPage.blocknewuser('ahmedmagdy');

    //assertions
    cy.get(SPSETTINGSCOMP.BLOCKAGAINERRORMESG).contains('You can\'t block u/ahmedmagdy for 24 hours after unblocking them');
    
  }) 




 })
