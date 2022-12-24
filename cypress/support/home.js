import HOMECOMP from './home-comp.json'
import LOGINCOMP from './login-comp.json'
import SIGNUPCOMP from './signup-comp.json'

class Home {
  navigate () {
    cy.visit(HOMECOMP.URL)
  }

  goToLogin(){
    cy.get(HOMECOMP.LOGIN)
        .should('exist')
        .click();
    //assertion
    cy.url().should('eq', Cypress.env('baseUrl') +  LOGINCOMP.URL);
}

  goToSignup(){
    cy.get(HOMECOMP.SIGNUP)
        .should('exist')
        .click();
    //assertion
    cy.url().should('eq', Cypress.env('baseUrl') +  SIGNUPCOMP.URL);
}

  goToUserSetting(){
    cy.get(HOMECOMP.DROPDOWNRIGHT)
        .should('exist')
        .click();
    cy.get(HOMECOMP.USERSETTINGS)
        .should('exist')
        .click();
    //assertion
    cy.url().should('eq', Cypress.env('baseUrl') +  HOMECOMP.USERSETTINGSURL);  
  }

  comeBackToHome(){
    cy.get(HOMECOMP.REDDITICON)
        .should('exist')
        .click();

    //assertion
    cy.url().should('eq', Cypress.env('baseUrl') +  HOMECOMP.URL);
  }

  openCloseCommWindow(){
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
    //cy.get(HOMECOMP.COMMFORM)
      //  .should('not.exist'); 
  }

  openCancelCommWindow(){
    //cy.get(HOMECOMP.DROPDOWNRIGHT)
      //  .should('exist')
        //.click();
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




  changeStatus(){
    cy.get(HOMECOMP.DROPDOWNRIGHT)
        .should('exist')
        .click();
    //default --> true
    cy.get(HOMECOMP.ONLINESTATUS)
        .should('exist')
        .should('have.attr', 'aria-checked', 'true')
        .click();
    //check that it have been changed 
    cy.get(HOMECOMP.ONLINESTATUS)
        .should('exist')
        .should('have.attr', 'aria-checked', 'false')
        .click();
  }

  createPostByIcon(tittle, text, community){
    cy.get(HOMECOMP.CREATEPOSTICON)
        .should('exist')
        .click();
    
    if(tittle != ' ')
        cy.get(HOMECOMP.POSTTITTLE)
            .should('exist')
            .click()
            .clear()
            .type(tittle);
    cy.get(HOMECOMP.POSTTEXT)
        .should('exist')
        .click()
        .clear()
        .type(text);
    cy.get(HOMECOMP.CHOOSECOMMUNITY)
        .should('exist')
        .select(community).invoke("val").should("eq", community);

    return this;
    
  }

  followUser(user){
    //search the user in the search bar
    cy.get(HOMECOMP.SEARCH)
        .should('exist')
        .click()
        .clear()
        .type(user)
        .type('{enter}');

    cy.get(HOMECOMP.SEARCHPEOPLE)
        .should('exist')
        .click();
    
    //can make assertion here --> to check that the url changed so that type=user

    cy.get(HOMECOMP.FOLLOW)
        .should('exist')
        .click();

    //make sure the button turned to following 
    cy.get(HOMECOMP.FOLLOW)
        .should('exist')
        .contains('Following');

    //and if i hover with the mouse then it will turn to unfollow
    cy.get(HOMECOMP.FOLLOW)
        .should('exist')
        .trigger('mouseover')
        .contains('Unfollow');

    //follow him
  }

  pressSideDrawerButton(){
    cy.get(HOMECOMP.DROPDOWNLEFT)
        .click()
    cy.get('[data-testid="sidedrawerbutton"]')
        .click()

    //assertion
    cy.get(HOMECOMP.LEFTDYNAMICMENUE)
        .should('exist')
  }

  cancelDynWind(){
    cy.get(HOMECOMP.CANCELDYNAMICMENUE)
        .click()
  }

  goToPostDyn(){
    cy.get(HOMECOMP.DYNWINCREATEPOST)
        .click();

    //assertion
    cy.url().should('eq', Cypress.env('baseUrl') +  "/submit")

  }

  openCommFormDyn(){
    cy.get(HOMECOMP.DYNWINCREATECOMM)
        .click()
    
    cy.get(HOMECOMP.COMMFORM)
    .should('exist'); 

    //then close it
    cy.get(HOMECOMP.CANCELCREATECOMM)
    .should('exist')
    .click();
    //assertion --> make sure the comm form is closed
    cy.get(HOMECOMP.COMMFORM)
        .should('not.exist'); 

  }


  goToHomeDyn(){
    cy.get(HOMECOMP.DYNWINHOME)
        .click()

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
