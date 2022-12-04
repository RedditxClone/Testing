import PROFILESETTINGSCOMP from './profile-settings-comp.json'

class ProfileSettings {

  ///////// Account Tap
  navigateAcc () {
    cy.get(PROFILESETTINGSCOMP.SETTINGSTABS).children().eq(0).click();

  }

  ///// Profile Tap
  navigateProf() {
    cy.get(PROFILESETTINGSCOMP.SETTINGSTABS).children().eq(1).click();
  }


  displayName(name){
    cy.get(PROFILESETTINGSCOMP.DISPLAYNAME)
        .should('exist')
        .clear()
        .type(name);
    
    
  }

  //to ask for an id for the about input
  about(description){
    cy.get(PROFILESETTINGSCOMP.ABOUT)
        .should('exist')
        .clear()
        .type(description);
    

  }


  addSocialLink(nthchosenlink, displaytext, link){
    cy.get(PROFILESETTINGSCOMP.ADDSOCIALLINKES)//.children().eq(nthchosenlink)
        .should('exist')
        .click();
    cy.get(PROFILESETTINGSCOMP.CHOOSELINK).children().eq(nthchosenlink)
         .should('exist')
         .click();
    cy.get(PROFILESETTINGSCOMP.DISPLAYTEXT).first()
        .should('exist')
        .clear()
        .type(displaytext);
    cy.get(PROFILESETTINGSCOMP.TYPELINK).last()
        .should('exist')
        .clear()
        .type(link);
    cy.get(PROFILESETTINGSCOMP.SAVELINK)
        .should('be.enabled')
        .click();
    

    return this;

  }

  //not done by front yet
  removeSoialLink(link)
  {
    cy.get(PROFILESETTINGSCOMP.REMOVELINK)
        .should('exist')
        .click();
  }

  //NOT YET
  profilePic(photo){
    cy.get(PROFILESETTINGSCOMP.PROFILEPIC)
        .should('exist')
        .attachFile(photo);
    //TODO --> Assertion
     
  }

  //NOT YET
  banner(banner){
    cy.get(PROFILESETTINGSCOMP.BANNER)
        .should('exist')
        .attachFile(banner)


  }

  checkNsfw(){
    cy.get(PROFILESETTINGSCOMP.NSFW)
        .should('exist')
        .check();
    cy.get(PROFILESETTINGSCOMP.IUNDERSTAND)
        .should('exist')
        .click();

  }

  uncheckNsfw(){
    cy.get(PROFILESETTINGSCOMP.NSFW)
        .should('exist')
        .uncheck();

  }


  checkAllowPeopleFollowYou(){
    cy.get(PROFILESETTINGSCOMP.ALLOWFOLLOWERS)
        .should('exist')
        .check();

  }

  uncheckAllowPeopleFollowYou(){
    cy.get(PROFILESETTINGSCOMP.ALLOWFOLLOWERS)
        .should('exist')
        .uncheck();

  }

}
export default ProfileSettings
