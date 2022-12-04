import ACCSETTINGSCOMP from './account-settings-comp.json'

class AccSettings {
  navigate () {
    cy.visit(ACCSETTINGSCOMP.URL)
  }

  ///////// Account Tap
  navigateAcc () {
    cy.get(ACCSETTINGSCOMP.SETTINGSTABS).children().eq(0).click();
    //cy.visit(ACCSETTINGSCOMP.ACCOUNT)
  }

  //not completed yet
  changEmail(currentpass, newmail){
    cy.get(ACCSETTINGSCOMP.CEMAIL)
        .should('exist')
        .click();
    if(currentpass != ' ')
      cy.get(ACCSETTINGSCOMP.CURRENTPASS)
          .should('exist')
          .clear()
          .type(currentpass);
    if(newmail != ' ')
      cy.get(ACCSETTINGSCOMP.NEWMAIL)
          .should('exist')
          .clear()
          .type(newmail);
    

    return this;

  }

  saveNewMail(){
    cy.get(ACCSETTINGSCOMP.SAVEEMIAL)
      .should('be.enabled')
      .click();
  }

  closeUpdatEmail(){
    cy.get(ACCSETTINGSCOMP.CLOSECEMAIL)
      .should('exist')
      .click();
  }

  //not supported by the front yet
  changePass(oldpass, newpass){
    cy.get(ACCSETTINGSCOMP.CPASS)
        .should('exist')
        .click();
    cy.wait(2000);
    cy.get(ACCSETTINGSCOMP.OLDPASS)
        .should('exist')
        .clear()
        .type(oldpass);
    cy.get(ACCSETTINGSCOMP.NEWPASS)
        .should('exist')
        .clear()
        .type(newpass);
    cy.get(ACCSETTINGSCOMP.SAVENEWPASS).click();

    //TODO --> assertion  --> should I make assertion by logging out then try again to login with the old & new password ?????
    return this
  }


  // it is not accepted to include this in our app :(
  //TODO LATER  --> make sure of it
  changeGender(newgender){
    cy.get(ACCSETTINGSCOMP.CGENDER)
        .should('exist')
        .select(newgender);
    //assertion
    cy.get(ACCSETTINGSCOMP.CGENDER)
        .invoke("text")                //TODO  --> make sure after getting the link whethr by value or by text
        .should('eq', newgender);
    return this;

  }

  changeCountry(newcountry){
    cy.get(ACCSETTINGSCOMP.CCOUNTRY).select(newcountry).invoke("val").should("eq", newcountry);
    //assertion
    cy.get(ACCSETTINGSCOMP.CCOUNTRY).contains(newcountry);
        //.invoke("text")
        //.should('eq', newcountry);
    return this;
  }

  deleteAccount(username, password){
    cy.get(ACCSETTINGSCOMP.DELETEACCOUNT)
        .should('exist')
        .click();

    cy.get(ACCSETTINGSCOMP.USERNAMEDELETE)
        .should('exist')
        .clear()
        .type(username);
    cy.get(ACCSETTINGSCOMP.PASSWORDDELETE)
        .should('exist')
        .clear()
        .type(password);
    
    cy.get(ACCSETTINGSCOMP.IUNDERSTAND)
        .should('exist')
        .check();
    
    cy.get(ACCSETTINGSCOMP.DELETE)
        .should('exist')
        .click();
    
    //TODO asssertion --> make sure the account is deleted by checking the url

  }
  navigateProf() {
    cy.get(ACCSETTINGSCOMP.SETTINGSTABS).children().eq(1).click();
    //cy.visit(ACCSETTINGSCOMP.PROFILE)
  }

}
export default AccSettings
