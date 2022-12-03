import FeedSettings from '../support/feed-settings'
import FEEDSETTINGSCOMP from '../support/feed-settings-comp.json'
import Home from '../support/home'
import Login from '../support/login'


describe('Test Settings', function () {
  const settingsPage = new FeedSettings()
  const homePage = new Home()
  const loginPage = new Login()

  it('login then go to Feed tab', function () {
    loginPage.navigate();
    loginPage.username('doaamagdy');
    loginPage.password('doaamagdypassword');
    loginPage.submit();
    homePage.gotousersetting();
    //settingsPage.navigateAcc();
    cy.url().should('eq', Cypress.env('baseUrl') + FEEDSETTINGSCOMP.ACCOUNT);
    settingsPage.navigateFeed();
    cy.url().should('eq', Cypress.env('baseUrl') + FEEDSETTINGSCOMP.FEED);
    
  })

  it('check the adult content checkbox', function () {
    settingsPage.checkAdultContent();

    //assertion
    settingsPage.navigateAcc();
    settingsPage.navigateFeed();
    cy.get(FEEDSETTINGSCOMP.ADULTCONTENT)
      .should('be.checked')

    
  })

  it('uncheck the adult content checkbox', function () {
    settingsPage.uncheckAdultContent();

    //assertion
    settingsPage.navigateAcc();
    settingsPage.navigateFeed();
    cy.get(FEEDSETTINGSCOMP.ADULTCONTENT)
      .should('not.be.checked')

    
  })


  it('check the autoplay media checkbox', function () {
    settingsPage.checkAutoplayMedia();

    //assertion
    settingsPage.navigateAcc();
    settingsPage.navigateFeed();
    cy.get(FEEDSETTINGSCOMP.AUTOPLAYMEDIA)
      .should('be.checked')

    
  })


  it('uncheck the autoplay media checkbox', function () {
    settingsPage.uncheckAutoplayMedia();

    //assertion
    settingsPage.navigateAcc();
    settingsPage.navigateFeed();
    cy.get(FEEDSETTINGSCOMP.AUTOPLAYMEDIA)
      .should('not.be.checked')

    
  })



 })
