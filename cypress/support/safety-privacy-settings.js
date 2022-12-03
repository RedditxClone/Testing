import SPSETTINGSCOMP from './safety-privacy-settings-comp.json'

class SPSettings {
  //////// safety & privacy

  navigatesafetyprivacy(){
    cy.get(SPSETTINGSCOMP.SETTINGSTABS).children().eq(2).click();
    //cy.visit(SPSETTINGSCOMP.SAFETYANDPRIVACY);

  }


  blocknewuser(username){
    cy.get(SPSETTINGSCOMP.BLOCKNEWUSER)
        .should('exist')
        .clear()
        .type(username);
    cy.get(SPSETTINGSCOMP.ADD)
        .should('exist')
        .click();

  }


  removeblockeduser(username){
    cy.get(SPSETTINGSCOMP.BLOCKEDLIST).first().find('Remove').click();

  }


  navigateprof() {
    cy.get(SPSETTINGSCOMP.SETTINGSTABS).children().eq(1).click();
    //cy.visit(SPSETTINGSCOMP.PROFILE)
  }


  
}
export default SPSettings
