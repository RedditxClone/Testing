import HOMECOMP from '../support/HomeComp.json'
import SETTINGSCOMP from '../support/SettingsComp.json'
import LOGINCOMP from '../support/LoginComp.json'
import SIGNUPCOMP from '../support/SignupComp.json'

class Home {
  naviage () {
    cy.visit(HOMECOMP.URL)
  }

  gotologin(){
    cy.get(HOMECOMP.LOGIN)
        .should('exist')
        .click();
    //assertion
    cy.url().should('eq', LOGINCOMP.URL);
}

  gotosignup(){
    cy.get(HOMECOMP.SIGNUP)
        .should('exist')
        .click();
    //assertion
    cy.url().should('eq', SIGNUPCOMP.URL);
}

  gotousersetting(){
    cy.get(HOMECOMP.DROPDOWNRIGHT)
        .should('exist')
        .click();
    cy.get(HOMECOMP.USERSETTINGS)
        .should('exist')
        .click();
    //assertion
    cy.url().should('eq', SETTINGSCOMP.ACCOUNT);  
  }

  comebacktohome(){
    cy.get(HOMECOMP.REDDITICON)
        .should('exist')
        .click();

    //assertion
    cy.url().should('eq', HOMECOMP.URL);
  }

  openclosecommwindow(){
    cy.get(HOMECOMP.DROPDOWNRIGHT)
        .should('exist')
        .click();
    cy.get(HOMECOMP.CREATECOMM)
        .should('exist')
        .click();
    cy.get(HOMECOMP.CLOSECOMMFORM)
        .should('exist')
        .click();
    //assertion --> make sure the comm form is closed
    cy.get(HOMECOMP.COMMFORM)
        .should('not.exist'); 
  }

  opencancelcommwindow(){
    cy.get(HOMECOMP.DROPDOWNRIGHT)
        .should('exist')
        .click();
    cy.get(HOMECOMP.CREATECOMM)
        .should('exist')
        .click();
    cy.get(HOMECOMP.CANCELCREATECOMM)
        .should('exist')
        .click();
    //assertion --> make sure the comm form is closed
    cy.get(HOMECOMP.COMMFORM)
        .should('not.exist'); 
  }

  createcommunity(name, type, adult){
    cy.get(HOMECOMP.DROPDOWNRIGHT)
        .should('exist')
        .click();
    cy.get(HOMECOMP.CREATECOMM)
        .should('exist')
        .click();
    cy.get(HOMECOMP.COMMNAME)
        .should('exist')
        .clear()
        .type(name);
    cy.get(HOMECOMP.COMMTYPE)
        .should('exist')
        .children().eq(type).click();
    if(adult)
        cy.get(HOMECOMP.ADULTCONTENT)
            .should('exist')
            .click();
    cy.get(HOMECOMP.CREATEBUTTON)
        .should('exist')
        .click();
    
    
  }
  asertioncreatecommunity(name){
    //assertions  --> 1-Form is no longer exist
    //2-url is the community url  
    //3-if for adult (then there will be a pop up window to ask about my age)
    cy.get(HOMECOMP.COMMFORM)
        .should('not.exist'); 
    cy.url().should('eq', HOMECOMP.URL + "/r/" + name + "/")

  }

  logout(){
    cy.get(HOMECOMP.LOGOUT)
        .should('exist')
        .click()

    //assertion
    cy.get(HOMECOMP.LOGIN).should('exist');
  }
  
}
export default Home
