import Home from '../support/home'
import HOMECOMP from '../support/home-comp.json'
import Login from '../support/login'

describe('Test Home', function () {
  const loginPage = new Login()
  const homePage = new Home()


  it('Go to Signup page', function () {
    homePage.navigate();
    homePage.gotosignup();
    cy.go('back')
    
  })
  
  it('Go to login page and login', function () {
    //homePage.navigate();
    homePage.gotologin();
    //login with a known user
    loginPage.username('doaamagdy');
    loginPage.password('doaamagdypassword');
    loginPage.submit();

    //assertion
    cy.get(HOMECOMP.DROPDOWNRIGHT).contains('doaamagdy');
    
  })

  // it('Go to user settings page', function () {
  //   homePage.gotousersetting();
    
  // })

  
  it('Go to user settings page then come back to home', function () {
    homePage.gotousersetting();
    //homePage.comebacktohome();

    //I will back due to the bug here --> the user setting cover the icon (bug) to be able to complete the script
    cy.go('back');
    
  })


  it('try to open community window then close it without create with cross button', function () {
    homePage.openclosecommwindow();
    cy.reload()
    
  })

  it('Go to login page and login', function () {
    homePage.gotologin();
    //login with a known user
    loginPage.username('doaamagdy');
    loginPage.password('doaamagdypassword');
    loginPage.submit();

    //assertion
    cy.get(HOMECOMP.DROPDOWNRIGHT).contains('doaamagdy');
    
  })

  

  it('try to open community window then close it without create with cancel button', function () {
    homePage.opencancelcommwindow();
    cy.reload()
    
  })

  it('Go to login page and login', function () {
    homePage.gotologin();
    //login with a known user
    loginPage.username('doaamagdy');
    loginPage.password('doaamagdypassword');
    loginPage.submit();

    //assertion
    cy.get(HOMECOMP.DROPDOWNRIGHT).contains('doaamagdy');
    
  })


  it('test create community', function () {
    homePage.createcommunity('doaa', 'Public', false);
    homePage.asertioncreatecommunity('doaa');
    
    
  })


  it('test create community with empty name', function () {
    homePage.createcommunity('', 'Public', false);
    cy.get(HOMECOMP.COMMUNITYERROR).contains('A community name is required')
    //cancel this form
    cy.get(HOMECOMP.CLOSECOMMFORM)
        .should('exist')
        .click();
    
    
    
  })

  it('test create another community with the same name', function () {
    homePage.createcommunity('doaa', 'Public', false);
    //assertion --> check for the error message that appears
    cy.get(HOMECOMP.COMMUNITYERROR).contains('Sorry, r/doaa is taken. Try another.')
    //cancel this form
    cy.get(HOMECOMP.CLOSECOMMFORM)
        .should('exist')
        .click();
    
  })

  it('test create another 2 communities which is wrong (as we have to wait for 10 min) ', function () {
    homePage.createcommunity('software', 'Public', false);
    homePage.asertioncreatecommunity('software');
    homePage.createcommunity('arch', 'Public', false);
    //assertion --> check for the error message that appears
    cy.get(HOMECOMP.COMMUNITYERRORCREATETRIPLE).contains('Phew, looks like');
    //cancel this form
    cy.get(HOMECOMP.CLOSECOMMFORM)
        .should('exist')
        .click();

  })


  it('follow a user and make sure he get notified ', function () {
    homePage.followuser('u/doaa')
    
    //logout
    homePage.logout();

    //sign in to doaa
    homePage.gotologin();
    loginPage.username('doaa');
    loginPage.password('doaapassword');
    loginPage.submit();
    //assertion
    cy.get(HOMECOMP.DROPDOWNRIGHT).contains('doaa');
    
    //make sure doaa get notified by this follow action
    cy.get(HOMECOMP.NOTIFICATIONICON)
      .should('exist')
      .click();
    
    cy.get(HOMECOMP.NOTIFICATIONLIST)
      .contains('New follower!');
    
  })









 })
