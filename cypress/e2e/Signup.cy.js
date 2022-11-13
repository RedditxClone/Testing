import Signup from '../support/Signup'
import SIGNUPCOMP from '../support/SignupComp.json'
import HOMECOMP from '../support/HomeComp.json'
import LOGINCOMP from '../support/LoginComp.json'

describe('Test Signup', function () {
  const signuppage = new Signup()


  it('Go to login page then come back again', function () {
    signuppage.navigate() 
    signuppage.login()
    // assertion
    cy.url().should('eq', LOGINCOMP.URL)
    // go back to login again
    cy.go('back')
  })

  

  // /////////////////////////////// Sign up with email /////////////////////////
  it('signup with already exist email', function () {
    signuppage.email('ay7aga@gmail.com');
    signuppage.continue()
    // assertion
    cy.url().should('eq', SIGNUPCOMP.CONTINUEURL)
    signuppage.back();
  })

  it('signup with empty email', function () {
    //empty email 
    signuppage.email('   ');
    // assertions
    //TODO --> check for the red border line and the message
    cy.get(SIGNUPCOMP.ERRORMAIL).contains('Please fix your email to continue');
    cy.get(SIGNUPCOMP.CONTINUE).should('be.disabled');
    cy.url().should('eq', SIGNUPCOMP.URL);

    
  })

  
  it('signup with email with no domain', function () {
    //with no domain
    signuppage.email('ay7aga ');
    cy.get(SIGNUPCOMP.ERRORMAIL).contains('Please fix your email to continue');
    // assertion
    //TODO --> check for the red border line and the message
    cy.get(SIGNUPCOMP.ERRORMAIL).contains('Please fix your email to continue');
    cy.get(SIGNUPCOMP.CONTINUE).should('be.disabled');
    cy.url().should('eq', SIGNUPCOMP.URL);
    
  })

  
  it('signup with email of domain only', function () {
    //with domain onlly
    signuppage.email('@gmail.com');
    // assertion
    //TODO --> check for the red border line and the message
    cy.get(SIGNUPCOMP.ERRORMAIL).contains('Please fix your email to continue');
    cy.get(SIGNUPCOMP.CONTINUE).should('be.disabled');
    cy.url().should('eq', SIGNUPCOMP.URL);
    
  })


  it('signup with empty username and empty password', function () {
    signuppage.email('doaa@gmail.com');
    signuppage.continue();
    //assertion
    cy.url().should('eq', SIGNUPCOMP.CONTINUEURL)
    cy.get(SIGNUPCOMP.SIGNUP).should('be.disabled');

    //both are empty
    signuppage.username(' ');
    signuppage.password(' ');
    // assertion
    cy.get(SIGNUPCOMP.USERNAMERULE).contains('Username must be between 3 and 20 characters');
    //cy.get(SIGNUPCOMP.INVALIDPASS).contains('Invalid Password')
    //cy.contains('Invalid Password');
    cy.get(SIGNUPCOMP.SIGNUP).should('be.disabled');
    cy.url().should('eq', SIGNUPCOMP.CONTINUEURL)

    signuppage.back();
    signuppage.continue();
    cy.reload();

  })
  
  it('signup with pass only is empty & username is valid', function () {
    //pass only is empty & username is valid
    signuppage.username('doaa');  //make it unique (make sure it doesn't exist in the DB)
    // assertion
    cy.get(SIGNUPCOMP.USERNAMERULE).should('not.exist');
    //cy.get(SIGNUPCOMP.INVALIDPASS).contains('Invalid Password');
    //cy.contains('Invalid Password');
    cy.get(SIGNUPCOMP.SIGNUP).should('be.disabled');
    cy.url().should('eq', SIGNUPCOMP.CONTINUEURL)

    signuppage.back();
    signuppage.continue();
    cy.reload();
    
  })
  
  it('signup with username only is empty', function () {
    //username only is empty
    // signuppage.navigate();
    // signuppage.email('doaa@gmail.com');
    // signuppage.continue();



    signuppage.username(' ');  //
    signuppage.password('123456789aa');  //make it unique (make sure it doesn't exist in the DB)
    // assertion
    cy.get(SIGNUPCOMP.USERNAMERULE).contains('Username must be between 3 and 20 characters');
    cy.get(SIGNUPCOMP.INVALIDPASS).should('not.exist');
    cy.get(SIGNUPCOMP.SIGNUP).should('be.disabled');
    cy.url().should('eq', SIGNUPCOMP.CONTINUEURL)
    
    signuppage.back();
    signuppage.continue();
    cy.reload();
  })


  it('sign up with username less than 3 and unique valid pass', function () {
    signuppage.username('d3');  //
    signuppage.password('123456789aa');
    
    //assertions
    cy.get(SIGNUPCOMP.USERNAMERULE).contains('Username must be between 3 and 20 characters');
    cy.get(SIGNUPCOMP.INVALIDPASS).should('not.exist');
    cy.get(SIGNUPCOMP.SIGNUP).should('be.disabled');
    cy.url().should('eq', SIGNUPCOMP.CONTINUEURL);

    signuppage.back();
    signuppage.continue();
    cy.reload();
  })

  it('sign up with username less greater than 2 and invalid pass (less than 9)', function () {
    signuppage.username('123');  //
    signuppage.password('123456789');
    
    //assertions
    cy.get(SIGNUPCOMP.USERNAMERULE).should('not.exist');
    //cy.get(SIGNUPCOMP.INVALIDPASS).contains('Invalid Password');
    //cy.contains('Invalid Password');
    cy.get(SIGNUPCOMP.SIGNUP).should('be.disabled');
    cy.url().should('eq', SIGNUPCOMP.CONTINUEURL);

    signuppage.back();
    signuppage.continue();
    cy.reload();
  })
  
  it('signup with repeated (invalid) username and valid password', function () {
    //invalid (repeated) username and valid pass
    signuppage.username('repeateduser');  // TODO make an account with this uername to be considered as repeated
    signuppage.password('valid123');
    // TODO  --> check for the textbox to be turned into red and check for the message written below it
    //assertions
    cy.get(SIGNUPCOMP.USERNAMERULE).contains('That username is already taken');
    //cy.get(SIGNUPCOMP.INVALIDPASS).should('not.exist');
    cy.get(SIGNUPCOMP.SIGNUP).should('be.disabled');
    cy.url().should('eq', SIGNUPCOMP.CONTINUEURL);

    signuppage.back();
    signuppage.continue();
    cy.reload();

  })


  it('signup with valid (unique) username and repeated pass', function () {
    //invalid (repeated) username and valid pass
    signuppage.username('newname');  // TODO make an account with this uername to be considered as repeated
    signuppage.password('repeatedpass');
    // TODO  --> check for the textbox to be turned into red and check for the message written below it
    //assertions
    cy.get(SIGNUPCOMP.USERNAMERULE).should('not.exist');
    //cy.get(SIGNUPCOMP.INVALIDPASS).contains('Invalid Password');
    //cy.contains('Invalid Password');
    cy.get(SIGNUPCOMP.SIGNUP).should('be.disabled');
    cy.url().should('eq', SIGNUPCOMP.CONTINUEURL);

    signuppage.back();
    signuppage.continue();
    cy.reload();

  })


  it('valid (unique) username and invalid (less than 8 char) pass', function () {
    //invalid (repeated) username and valid pass
    signuppage.username('newname');  // TODO make an account with this uername to be considered as repeated
    signuppage.password('123');
    // TODO  --> check for the textbox to be turned into red and check for the message written below it
    //assertions
    cy.get(SIGNUPCOMP.USERNAMERULE).should('not.exist');
   // cy.get(SIGNUPCOMP.INVALIDPASS).contains('Invalid Password');
   //cy.contains('Invalid Password');
    cy.get(SIGNUPCOMP.SIGNUP).should('be.disabled');
    cy.url().should('eq', SIGNUPCOMP.CONTINUEURL);

    

  })

  it('check the back button', function () {
    signuppage.back();
    //assertion
    cy.url().should('eq', SIGNUPCOMP.URL);

  })

  // it('signup with valid email & valid uesrname & valid password & recaptcha expiration check', function () {
  //   signuppage.navigate();
  //   signuppage.email('doaa@gmail.com');
  //   signuppage.continue();
  //   signuppage.username('validuser');  // TODO make an account with this uername to be considered as repeated
  //   signuppage.password('validpasss');
  //   signuppage.recaptcha();
  //   //wait until recaptcha expire
  //   //cy.wait(8000);  //wait for 2 minutes
  //   //check whether or not it is expired
  //   //signuppage.recaptchacheck()
  //   //signuppage.recaptcha();
  //   signuppage.signup();
  //   // assertions
  //   cy.get(HOMECOMP.SIGNEDUPURL).contains('validuser');
  // })




})









  // it('check the back button', function () {
  //   //first logout from the created account in the above step
  //   cy.get(HOMECOMP.DROPDOWNRIGHT)
  //       .scrollTo('bottom')
  //       .get(HOMECOMP.LOGOUT)
  //       .click();
  //   cy.wait(1000);
  //   //assertion
  //   cy.url().should('eq', LOGINCOMP.URL);
  //   cy.get(LOGINCOMP.SIGNUP).click();
  //   cy.wait(2000);
  //   //assertion
  //   cy.url().should('eq', SIGNUPCOMP.URL);

  //   signuppage.email('doaa.magdy@gmail.com');
  //   signuppage.continue();
  //   cy.wait(2000);  //should we write it inside the function continue or here ???
  //   cy.url().should('eq', SIGNUPCOMP.CONTINUEURL);  //assertion
  //   signuppage.username('validuser');  // TODO make an account with this uername to be considered as repeated
  //   signuppage.password('valid123');
  //   signuppage.back();
  //   // assertions
  //   cy.wait(3000);
  //   cy.url().should('eq', SIGNUPCOMP.URL);

  //   signuppage.checkemail('doaa.magdy@gmail.com');
  //   signuppage.continue();
  //   //assertion
  //   signuppage.checkusername('validuser');
  //   signuppage.checkpass('valid123')

  //   //back again to continue testing --> with google / facebook
  //   signuppage.back();

  // })






//visit this page


//click continue with google



//1s test --> both email and password are correct
//enter the email and click the next button        --> what if there already some saved mails ??????
 
//


//enter the passworkd and click next

