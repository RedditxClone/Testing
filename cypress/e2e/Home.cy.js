import Home from '../support/Home'
import HOMECOMP from '../support/HomeComp.json'
import Login from '../support/Login'

describe('Test Home', function () {
  const loginpage = new Login()
  const homepage = new Home()


  it('Go to Signup page', function () {
    homepage.navigate();
    homepage.gotosignup();
    cy.go('back')
    
  })
  
  it('Go to login page and login', function () {
    homepage.gotologin();
    //login with a known user
    loginpage.username('ay7aga');
    loginpage.password('ay7aga123');
    loginpage.submit();

    //assertion
    cy.get(HOMECOMP.DROPDOWNRIGHT).contains('ay7aga');
    
  })

  // it('Go to user settings page', function () {
  //   homepage.gotousersetting();
    
  // })

  
  it('Go to user settings page then come back to home', function () {
    homepage.gotousersetting();
    homepage.comebacktohome();

    //I will back due to the bug here --> the user setting cover the icon (bug) to be able to complete the script
    cy.go('back');
    
  })


  it('try to open community window then close it without create with cross button', function () {
    homepage.openclosecommwindow();
    cy.reload()
    
  })

  it('Go to login page and login', function () {
    homepage.gotologin();
    //login with a known user
    loginpage.username('ay7aga');
    loginpage.password('ay7aga123');
    loginpage.submit();

    //assertion
    cy.get(HOMECOMP.DROPDOWNRIGHT).contains('ay7aga');
    
  })

  

  it('try to open community window then close it without create with cancel button', function () {
    homepage.opencancelcommwindow();
    cy.reload()
    
  })

  it('Go to login page and login', function () {
    homepage.gotologin();
    //login with a known user
    loginpage.username('ay7aga');
    loginpage.password('ay7aga123');
    loginpage.submit();

    //assertion
    cy.get(HOMECOMP.DROPDOWNRIGHT).contains('ay7aga');
    
  })


  it('test create community', function () {
    homepage.createcommunity('doaa', 1, false);
    homepage.asertioncreatecommunity('doaa');
    
    
  })


  it('test create community with empty name', function () {
    homepage.createcommunity('', 1, false);
    cy.get(HOMECOMP.COMMUNITYERROR).contains('A community name is required')
    //cancel this form
    cy.get(HOMECOMP.CLOSECOMMFORM)
        .should('exist')
        .click();
    
    
    
  })

  it('test create another community with the same name', function () {
    homepage.createcommunity('doaa', 1, false);
    //assertion --> check for the error message that appears
    cy.get(HOMECOMP.COMMUNITYERROR).contains('Sorry, r/doaa is taken. Try another.')
    //cancel this form
    cy.get(HOMECOMP.CLOSECOMMFORM)
        .should('exist')
        .click();
    
  })

  it('test create another 2 communities which is wrong (as we have to wait for 10 min) ', function () {
    homepage.createcommunity('software', 1, false);
    homepage.asertioncreatecommunity('software');
    homepage.createcommunity('arch', 1, false);
    //assertion --> check for the error message that appears
    cy.get(HOMECOMP.COMMUNITYERRORCREATETRIPLE).contains('Phew, looks like');
    //cancel this form
    cy.get(HOMECOMP.CLOSECOMMFORM)
        .should('exist')
        .click();

  })

 })
