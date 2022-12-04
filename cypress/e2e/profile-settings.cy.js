import ProfileSettings from '../support/profile-settings'
import PROFILESETTINGSCOMP from '../support/profile-settings-comp.json'
import Home from '../support/home'
import Login from '../support/login'


describe('Test Profile Settings', function () {
  const settingsPage = new ProfileSettings()
  const homePage = new Home()
  const loginPage = new Login()


  it('login then go to Profile tab', function () {
    loginPage.navigate();
    loginPage.username('doaamagdy');
    loginPage.password('doaamagdypassword');
    loginPage.submit();
    homePage.goToUserSetting();
    
    settingsPage.navigateProf();
    
  })


  it('make sure that all default values are like original reddit', function () {
    settingsPage.navigateProf();
    cy.get(PROFILESETTINGSCOMP.NSFW)
      .should('not.be.checked')

    cy.get(PROFILESETTINGSCOMP.ALLOWFOLLOWERS)
      .should('be.checked')
  })

  it('check the NSFW checkbox', function () {
    settingsPage.checkNsfw();

    //assertion
    cy.get(PROFILESETTINGSCOMP.CHANGESSAVEDMSG).contains('Changes saved')
    settingsPage.navigateAcc();
    settingsPage.navigateProf();
    cy.get(PROFILESETTINGSCOMP.NSFW)
      .should('be.checked')

    
  })

  it('uncheck the NSFW checkbox', function () {
    settingsPage.uncheckNsfw();

    //assertion
    cy.get(PROFILESETTINGSCOMP.CHANGESSAVEDMSG).contains('Changes saved')
    settingsPage.navigateAcc();
    settingsPage.navigateProf();
    cy.get(PROFILESETTINGSCOMP.NSFW)
      .should('not.be.checked')

  })

  it('uncheck the <allow people follow you> checkbox', function () {
    settingsPage.checkAllowPeopleFollowYou();

    //assertion
    cy.get(PROFILESETTINGSCOMP.CHANGESSAVEDMSG).contains('Changes saved')
    settingsPage.navigateAcc();
    settingsPage.navigateProf();
    cy.get(PROFILESETTINGSCOMP.ALLOWFOLLOWERS)
      .should('be.checked')

  })

  it('uncheck the <allow people follow you> checkbox', function () {
    settingsPage.uncheckAllowPeopleFollowYou();

    //assertion
    cy.get(PROFILESETTINGSCOMP.CHANGESSAVEDMSG).contains('Changes saved')
    settingsPage.navigateAcc();
    settingsPage.navigateProf();
    cy.get(PROFILESETTINGSCOMP.ALLOWFOLLOWERS)
      .should('not.be.checked')

  })


  it('test display name', ()=>{
    settingsPage.displayName('doaa');

    //assertion
    settingsPage.navigateAcc();
    settingsPage.navigateProf();
    cy.get(PROFILESETTINGSCOMP.DISPLAYNAME)
        .should('exist')
        .contains('doaa');
    

  })

  it('test <about>', ()=>{
    settingsPage.about('I am a student in cairo university');

    //assertion
    settingsPage.navigateAcc();
    settingsPage.navigateProf();
    cy.get(PROFILESETTINGSCOMP.ABOUT)
        .should('exist')
        .contains('I am a student in cairo university');


  })

  it('test adding new link', ()=>{
    settingsPage.addsociallink(3, 'anything', 'https://ay7aga.com');

    //assertion
    settingsPage.navigateAcc();
    settingsPage.navigateProf();
    cy.get(PROFILESETTINGSCOMP.LINKSLIST)
        .should('exist')
        .contains('anything');
    
  })

  it('remove the added link', ()=>{
    settingsPage.removeSoialLink('anything');

    //assertion
    settingsPage.navigateAcc();
    settingsPage.navigateProf();
    cy.get(PROFILESETTINGSCOMP.LINKSLIST)
        .should('not.have.text', 'anything');
    
  })




 })
