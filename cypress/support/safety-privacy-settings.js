import SPSETTINGSCOMP from './safety-privacy-settings-comp.json'

class SPSettings {
  //////// safety & privacy

  navigatesafetyprivacy(){
    cy.visit(SPSETTINGSCOMP.SAFETYANDPRIVACY);

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
    cy.visit(SPSETTINGSCOMP.PROFILE)
  }


  
}
export default SPSettings
