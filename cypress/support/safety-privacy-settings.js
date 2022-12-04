import SPSETTINGSCOMP from './safety-privacy-settings-comp.json'

class SPSettings {
  //////// safety & privacy

  navigateSafetyPrivacy(){
    cy.get(SPSETTINGSCOMP.SETTINGSTABS).children().eq(2).click();
    //cy.visit(SPSETTINGSCOMP.SAFETYANDPRIVACY);

  }


  blockNewUser(username){
    cy.get(SPSETTINGSCOMP.BLOCKNEWUSER)
        .should('exist')
        .clear()
        .type(username);
    cy.get(SPSETTINGSCOMP.ADD)
        .should('exist')
        .click();

  }


  removeBlockedUser(username){
    cy.get(SPSETTINGSCOMP.BLOCKEDLIST).first().find('Remove').click();

  }


  navigateProf() {
    cy.get(SPSETTINGSCOMP.SETTINGSTABS).children().eq(1).click();
    //cy.visit(SPSETTINGSCOMP.PROFILE)
  }


  
}
export default SPSettings
