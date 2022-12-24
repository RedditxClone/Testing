import Login from '../support/login'
import LOGINCOMP from '../support/login-comp.json'
import Search from '../support/search-bar'
import SEARCHCOMP from '../support/search-bar-comp.json'

describe('Test Search', function () {
    const loginPage = new Login()
    const search = new Search();
  
  
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
  
   
      //   loginPage.username('doaamagdy')
      //   loginPage.password('doaamagdypassword')
        // assertion
        cy.get(LOGINCOMP.LOGIN).click()
        
        loginPage.submit()
        //assertion
        cy.contains('doaamagdy');
  
      })

      it('search for a garbage', function () {
        cy.get(SEARCHCOMP.SEARCHBAR)
            .clear()
            .type('garbage {enter}')

    })


    it('search for existing post', function () {
        search.searchFor('test12', 'post', 1)

    })

    it('search for non-existing post', function () {
        search.searchFor('abcfghabc', 'post', 0)

    })

    it('search for existing comment', function () {
        search.searchFor('this is a comment', 'comment', 1)

    })

    it('search for non-existing comment', function () {
        search.searchFor('abcfghabc', 'comment', 0)

    })

    it('serch for existing user and follow/unfollow him', function () {
        search.searchFor('aya', 'people', 1)
        search.followUser();

    })

    it('search for existing community and join/leave it', function () {
        search.searchFor('new', 'community', 1)
        search.joinComm();

    })

    it('search for non-existing community', function () {
        search.searchFor('nonexisting', 'community', 0)
        search.searchFor('nonexisting', 'community', 0)

    })

    it('serch for non-existing user', function () {
        search.searchFor('garbageuser', 'people', 0)

    })
   
   })