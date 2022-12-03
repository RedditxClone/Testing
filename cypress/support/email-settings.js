import EMAILSETTINGSCOMP from './email-settings-comp.json'

class EmailSettings {
  navigateEmail () {
    cy.get(EMAILSETTINGSCOMP.SETTINGSTABS).children().eq(5).click();
    //cy.visit(EMAILSETTINGSCOMP.EMAILS)
  }

  navigateAcc () {
    cy.get(EMAILSETTINGSCOMP.SETTINGSTABS).children().eq(0).click();
  }

  checkNewFollowers(){
    cy.get(EMAILSETTINGSCOMP.NEWFOLLOWER)
        .should('exist')
        .check();
  }

  uncheckNewFollowers(){
    cy.get(EMAILSETTINGSCOMP.NEWFOLLOWER)
        .should('exist')
        .uncheck();
  }

  checkChatReq(){
    cy.get(EMAILSETTINGSCOMP.CHATREQUESTS)
        .should('exist')
        .check();
  }

  uncheckChatReq(){
    cy.get(EMAILSETTINGSCOMP.CHATREQUESTS)
        .should('exist')
        .uncheck();
  }

  checkUnsubscribeFromAllMails(){
    cy.get(EMAILSETTINGSCOMP.UNSUBSCRIBEFROMALLMAILS)
        .should('exist')
        .check();
  }

  uncheckUnsubscribeFromAllMails(){
    cy.get(EMAILSETTINGSCOMP.UNSUBSCRIBEFROMALLMAILS)
        .should('exist')
        .uncheck();
  }
  

}
export default EmailSettings
