import USERHOMECOMP from './UserHomeComp.json'
import SETTINGSCOMP from './SettingsComp.json'
import LOGINCOMP from './LoginComp.json'
import SIGNUPCOMP from './SignupComp.json'

class UserHome {
  navigate () {
    cy.visit(USERHOMECOMP.URL)
  }

  gotologin(){
    cy.get(HOMECOMP.LOGIN)
        .should('exist')
        .click();
    //assertion
    cy.url().should('eq', LOGINCOMP.URL);
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

  

  gotousersetting(){
    cy.get(USERHOMECOMP.DROPDOWNRIGHT)
        .should('exist')
        .click();
    cy.get(USERHOMECOMP.USERSETTINGS)
        .should('exist')
        .click();
    //assertion
    cy.url().should('eq', SETTINGSCOMP.ACCOUNT);  
  }

  comebacktohome(){
    cy.get(USERHOMECOMP.REDDITICON)
        .should('exist')
        .click();

    //assertion
    cy.url().should('eq',USERHOMECOMP.URL);
  }

  openclosecommwindow(){
    cy.get(USERHOMECOMP.DROPDOWNRIGHT)
        .should('exist')
        .click();
    cy.get(USERHOMECOMP.CREATECOMM)
        .should('exist')
        .click();
    cy.get(USERHOMECOMP.CLOSECOMMFORM)
        .should('exist')
        .click();
    //assertion --> make sure the comm form is closed
    cy.get(USERHOMECOMP.COMMFORM)
        .should('not.exist'); 
  }

  opencancelcommwindow(){
    cy.get(USERHOMECOMP.DROPDOWNRIGHT)
        .should('exist')
        .click();
    cy.get(USERHOMECOMP.CREATECOMM)
        .should('exist')
        .click();
    cy.get(USERHOMECOMP.CANCELCREATECOMM)
        .should('exist')
        .click();
    //assertion --> make sure the comm form is closed
    cy.get(USERHOMECOMP.COMMFORM)
        .should('not.exist'); 
  }

  createcommunity(name, type, adult){
    cy.get(USERHOMECOMP.DROPDOWNRIGHT)
        .should('exist')
        .click();
    cy.get(USERHOMECOMP.CREATECOMM)
        .should('exist')
        .click();
    cy.get(USERHOMECOMP.COMMNAME)
        .should('exist')
        .clear()
        .type(name);
    cy.get(USERHOMECOMP.COMMTYPE)
        .should('exist')
        .children().eq(type).click();
    if(adult)
        cy.get(USERHOMECOMP.ADULTCONTENT)
            .should('exist')
            .click();
    cy.get(USERHOMECOMP.CREATEBUTTON)
        .should('exist')
        .click();
    
    
  }
  asertioncreatecommunity(name){
    //assertions  --> 1-Form is no longer exist
    //2-url is the community url  
    //3-if for adult (then there will be a pop up window to ask about my age)
    cy.get(USERHOMECOMP.COMMFORM)
        .should('not.exist'); 
    cy.url().should('eq',USERHOMECOMP.URL + "/r/" + name + "/")

  }

  logout(){
    cy.get(USERHOMECOMP.LOGOUT)
        .should('exist')
        .click()

    //assertion
    cy.get(USERHOMECOMP.LOGIN).should('exist');
  }
  
}
export default UserHome
