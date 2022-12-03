import HOMECOMP from './HomeComp.json'
import SETTINGSCOMP from './SettingsComp.json'
import LOGINCOMP from './LoginComp.json'
import SIGNUPCOMP from './SignupComp.json'

class Home {
  navigate () {
    cy.visit(HOMECOMP.URL)
  }

  gotologin(){
    cy.get(HOMECOMP.LOGIN)
        .should('exist')
        .click();
    //assertion
    cy.url().should('eq', Cypress.env('baseUrl') +  LOGINCOMP.URL);
}

  gotosignup(){
    cy.get(HOMECOMP.SIGNUP)
        .should('exist')
        .click();
    //assertion
    cy.url().should('eq', Cypress.env('baseUrl') +  SIGNUPCOMP.URL);
}

  gotousersetting(){
    cy.get(HOMECOMP.DROPDOWNRIGHT)
        .should('exist')
        .click();
    cy.get(HOMECOMP.USERSETTINGS)
        .should('exist')
        .click();
    //assertion
    cy.url().should('eq', Cypress.env('baseUrl') +  SETTINGSCOMP.ACCOUNT);  
  }

  comebacktohome(){
    cy.get(HOMECOMP.REDDITICON)
        .should('exist')
        .click();

    //assertion
    cy.url().should('eq', Cypress.env('baseUrl') +  HOMECOMP.URL);
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

  createcommunity(name, type, adult){   //type:  0 -->
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
        .contains(type).click();
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
    cy.url().should('eq', Cypress.env('baseUrl') +  HOMECOMP.URL + "/r/" + name + "/")

  }


  changestatus(){
    cy.get(UserHomeComp.DROPDOWNRIGHT)
        .should('exist')
        .click();
    //default --> true
    cy.get(UserHomeComp.ONLINESTATUS)
        .should('exist')
        .should('have.attr', 'aria-checked', 'true')
        .click();
    //check that it have been changed 
    cy.get(UserHomeComp.ONLINESTATUS)
        .should('exist')
        .should('have.attr', 'aria-checked', 'false')
        .click();
  }

  createpostbyicon(){
    

  }

  followuser(user){
    //search the user in the search bar
    cy.get(USERHOMECOMP.SEARCH)
        .should('exist')
        .click()
        .clear()
        .type(user)
        .type('{enter}');

    cy.get(USERHOMECOMP.SEARCHPEOPLE)
        .should('exist')
        .click();
    
    //can make assertion here --> to check that the url changed so that type=user

    cy.get(USERHOMECOMP.FOLLOW)
        .should('exist')
        .click();

    //make sure the button turned to following 
    cy.get(USERHOMECOMP.FOLLOW)
        .should('exist')
        .contains('Following');

    //and if i hover with the mouse then it will turn to unfollow
    cy.get(USERHOMECOMP.FOLLOW)
        .should('exist')
        .trigger('mouseover')
        .contains('Unfollow');

    //follow him
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
