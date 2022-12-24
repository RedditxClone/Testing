import Login from '../support/login'
import LOGINCOMP from '../support/login-comp.json'
import Community from '../support/community'
import COMMUNITYCOMP from '../support/community-comp.json'

describe('Test Community', function () {
    const loginPage = new Login()
    const community = new Community();
  
  
    it('Go to login page and login as a user', function () {
      loginPage.navigate()

    
        
      cy.get(LOGINCOMP.USERNAME)
      .type('doaamagdy')

      cy.get(LOGINCOMP.PASSWORD)
      .type('doaamagdypassword')

      loginPage.submit()



    })

    it('Go to login page and login as a user', function () {
  
        cy.get(LOGINCOMP.USERNAME)
        .clear()
        .type('doaamagdy')
  
        cy.get(LOGINCOMP.PASSWORD)
        .clear()
        .type('doaamagdypassword')
  
        cy.get(LOGINCOMP.USERNAME)
        .clear()
        .type('doaamagdy')
  
        cy.get(LOGINCOMP.PASSWORD)
        .clear()
        .type('doaamagdypassword')
  
        // assertion
        cy.get(LOGINCOMP.LOGIN).click()
        
        loginPage.submit()
        //assertion
        cy.contains('doaamagdy');
  
      })


    it('check that the default type is public', function () {
        community.openCommForm();
        //check the default type
        cy.get(COMMUNITYCOMP.COMMTYPE)
            .should('exist')
            .contains('Public').should('be.checked');

    })

    it('test create community with empty name', function () {
        community.createCommunity(' ', 'Public', false);
        cy.get(COMMUNITYCOMP.COMMUNITYERROR).contains('A community name is required')
        //cancel this form
        cy.get(COMMUNITYCOMP.CLOSECOMMFORM)
            .should('exist')
            .click();

    })

    it('test create community with repeated name', function () {
        community.createCommunity('doaa', 'Public', false);
        //assertion --> check for the error message that appears
        cy.get(HOMECOMP.COMMUNITYERROR).contains('Sorry, r/doaa is taken. Try another.')
        //cancel this form
        cy.get(HOMECOMP.CLOSECOMMFORM)
            .should('exist')
            .click();
    })

    it('create community with empty name (InValid)', function () {


    })



    it('create community with no type (InValid)', function () {


    })

    it('create community with valid name and type (InValid)', function () {


    })

    it('create community with empty name (InValid)', function () {


    })


   
   })