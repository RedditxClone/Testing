import Home from '../support/home'
import HOMECOMP from '../support/home-comp.json'
import Login from '../support/login'

describe('Test Home', function () {
  const loginPage = new Login()
  const homePage = new Home()


  it('Go to Signup page', function () {
    homePage.navigate();
    homePage.goToSignup();
    //cy.go('back')
    
  })
  
  it('Go to login page and login', function () {
    homePage.navigate();
    homePage.goToLogin();
    //login with a known user
    // loginPage.username('doaamagdy');
    // loginPage.password('doaamagdypassword');
    // loginPage.submit();

    // //assertion
    // cy.contains('doaamagdy');
    
  })


  it('Go to login page and login', function () {

    loginPage.username('doaamagdy');

    
  })
  it('Go to login page and login', function () {
    loginPage.username('doaamagdy');
    
  })



  it('Go to login page and login', function () {
    loginPage.password('doaamagdypassword');
    
  })
  it('Go to login page and login', function () {
     loginPage.password('doaamagdypassword');

   })


  it('Go to login page and login', function () {
    loginPage.submit();
    
  })


  
  it('Go to user settings page then come back to home', function () {
    homePage.goToUserSetting();

    cy.go('back');
    
  })


  it('try to open community window then close it without create with cross button', function () {
    homePage.openCloseCommWindow();
    
  })


  it('try to open community window then close it without create with cancel button', function () {
    homePage.openCancelCommWindow();

        
  })

  it('try to Logout', function () {
    homePage.logout();
        
  })


  it('Go to login page and login', function () {
    homePage.goToLogin();
    //login with a known user
    // loginPage.username('doaamagdy');
    // loginPage.password('doaamagdypassword');
    // loginPage.submit();

    // //assertion
    // cy.contains('doaamagdy');
    
  })


  it('Go to login page and login', function () {

    loginPage.username('doaamagdy');

    
  })
  it('Go to login page and login', function () {
    loginPage.username('doaamagdy');
    
  })



  it('Go to login page and login', function () {
    loginPage.password('doaamagdypassword');
    
  })
  it('Go to login page and login', function () {
     loginPage.password('doaamagdypassword');

   })


  it('Go to login page and login', function () {
    loginPage.submit();
    
  })



  it('open the dynamic left window and close it again', function () {
    homePage.pressSideDrawerButton();
    homePage.cancelDynWind();
        
  })


  it('open the dynamic left window and go to create post page', function () {
    homePage.pressSideDrawerButton();
    homePage.goToPostDyn();
        
  })


  it('open the dynamic left window and return from post page to home page ', function () {
    homePage.pressSideDrawerButton();
    homePage.goToHomeDyn();
        
  })


  it('open the dynamic left window and open create community form then close it again', function () {
    homePage.pressSideDrawerButton();
    homePage.openCommFormDyn();
        
  })





  



  // it('test create another 2 communities which is wrong (as we have to wait for 10 min) ', function () {
  //   homePage.createCommunity('software', 'Public', false);
  //   homePage.asertionCreateCommunity('software');
  //   homePage.createCommunity('arch', 'Public', false);
  //   //assertion --> check for the error message that appears
  //   cy.get(HOMECOMP.COMMUNITYERRORCREATETRIPLE).contains('Phew, looks like');
  //   //cancel this form
  //   cy.get(HOMECOMP.CLOSECOMMFORM)
  //       .should('exist')
  //       .click();

  // })


  // it('follow a user and make sure he get notified ', function () {
  //   homePage.followUser('u/doaa')
    
  //   //logout
  //   homePage.logout();

  //   //sign in to doaa
  //   homePage.goToLogin();
  //   loginPage.username('doaa');
  //   loginPage.password('doaapassword');
  //   loginPage.submit();
  //   //assertion
  //   cy.get(HOMECOMP.DROPDOWNRIGHT).contains('doaa');
    
  //   //make sure doaa get notified by this follow action
  //   cy.get(HOMECOMP.NOTIFICATIONICON)
  //     .should('exist')
  //     .click();
    
  //   cy.get(HOMECOMP.NOTIFICATIONLIST)
  //     .contains('New follower!');
    
  // })









 })
