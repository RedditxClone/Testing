import Signup from '../support/signup'
import SIGNUPCOMP from '../support/signup-comp.json'
import HOMECOMP from '../support/home-comp.json'
import LOGINCOMP from '../support/login-comp.json'

describe('Test Signup', function () {
  const signupPage = new Signup()


  it('Go to login page then come back again', function () {
    signupPage.navigate() 
    signupPage.login()
    // assertion
    cy.url().should('eq', Cypress.env('baseUrl') +  LOGINCOMP.URL)
    // go back to login again
    cy.go('back')
  })

  

  // /////////////////////////////// Sign up with email /////////////////////////
  it('signup with already exist email', function () {
    signupPage.email('ay7aga@gmail.com');
    signupPage.continue()
    // assertion
    cy.url().should('eq', Cypress.env('baseUrl') +  SIGNUPCOMP.CONTINUEURL)
    signupPage.back();
  })

  it('signup with empty email', function () {
    //empty email 
    signupPage.email('   ');
    // assertions
    //TODO --> check for the red border line and the message
    cy.get(SIGNUPCOMP.ERRORMAIL).contains('Please fix your email to continue');
    cy.get(SIGNUPCOMP.CONTINUE).should('be.disabled');
    cy.url().should('eq', Cypress.env('baseUrl') +  SIGNUPCOMP.URL);

    
  })

  
  it('signup with email with no domain', function () {
    //with no domain
    signupPage.email('ay7aga ');
    cy.get(SIGNUPCOMP.ERRORMAIL).contains('Please fix your email to continue');
    // assertion
    //TODO --> check for the red border line and the message
    cy.get(SIGNUPCOMP.ERRORMAIL).contains('Please fix your email to continue');
    cy.get(SIGNUPCOMP.CONTINUE).should('be.disabled');
    cy.url().should('eq', Cypress.env('baseUrl') +  SIGNUPCOMP.URL);
    
  })

  
  it('signup with email of domain only', function () {
    //with domain onlly
    signupPage.email('@gmail.com');
    // assertion
    //TODO --> check for the red border line and the message
    cy.get(SIGNUPCOMP.ERRORMAIL).contains('Please fix your email to continue');
    cy.get(SIGNUPCOMP.CONTINUE).should('be.disabled');
    cy.url().should('eq', Cypress.env('baseUrl') +  SIGNUPCOMP.URL);
    
  })


  it('signup with empty username and empty password', function () {
    signupPage.email('doaa@gmail.com');
    signupPage.continue();
    //assertion
    cy.url().should('eq', Cypress.env('baseUrl') +  SIGNUPCOMP.CONTINUEURL)
    cy.get(SIGNUPCOMP.SIGNUP).should('be.disabled');

    //both are empty
    signupPage.username(' ');
    signupPage.password(' ');
    // assertion
    cy.get(SIGNUPCOMP.USERNAMERULE).contains('Username must be between 3 and 20 characters');
    //cy.get(SIGNUPCOMP.INVALIDPASS).contains('Invalid Password')
    //cy.contains('Invalid Password');
    cy.get(SIGNUPCOMP.SIGNUP).should('be.disabled');
    cy.url().should('eq', Cypress.env('baseUrl') +  SIGNUPCOMP.CONTINUEURL)

    signupPage.back();
    signupPage.continue();
    cy.reload();

  })
  
  it('signup with pass only is empty & username is valid', function () {
    //pass only is empty & username is valid
    signupPage.username('doaa');  //make it unique (make sure it doesn't exist in the DB)
    // assertion
    cy.get(SIGNUPCOMP.USERNAMERULE).should('not.exist');
    //cy.get(SIGNUPCOMP.INVALIDPASS).contains('Invalid Password');
    //cy.contains('Invalid Password');
    cy.get(SIGNUPCOMP.SIGNUP).should('be.disabled');
    cy.url().should('eq', Cypress.env('baseUrl') +  SIGNUPCOMP.CONTINUEURL)

    signupPage.back();
    signupPage.continue();
    cy.reload();
    
  })
  
  it('signup with username only is empty', function () {
    //username only is empty
    // signupPage.navigate();
    // signupPage.email('doaa@gmail.com');
    // signupPage.continue();



    signupPage.username(' ');  //
    signupPage.password('123456789aa');  //make it unique (make sure it doesn't exist in the DB)
    // assertion
    cy.get(SIGNUPCOMP.USERNAMERULE).contains('Username must be between 3 and 20 characters');
    cy.get(SIGNUPCOMP.INVALIDPASS).should('not.exist');
    cy.get(SIGNUPCOMP.SIGNUP).should('be.disabled');
    cy.url().should('eq', Cypress.env('baseUrl') +  SIGNUPCOMP.CONTINUEURL)
    
    signupPage.back();
    signupPage.continue();
    cy.reload();
  })


  it('sign up with username less than 3 and unique valid pass', function () {
    signupPage.username('d3');  //
    signupPage.password('123456789aa');
    
    //assertions
    cy.get(SIGNUPCOMP.USERNAMERULE).contains('Username must be between 3 and 20 characters');
    cy.get(SIGNUPCOMP.INVALIDPASS).should('not.exist');
    cy.get(SIGNUPCOMP.SIGNUP).should('be.disabled');
    cy.url().should('eq', Cypress.env('baseUrl') +  SIGNUPCOMP.CONTINUEURL);

    signupPage.back();
    signupPage.continue();
    cy.reload();
  })

  it('sign up with username less greater than 2 and invalid pass (less than 9)', function () {
    signupPage.username('123');  //
    signupPage.password('123456789');
    
    //assertions
    cy.get(SIGNUPCOMP.USERNAMERULE).should('not.exist');
    //cy.get(SIGNUPCOMP.INVALIDPASS).contains('Invalid Password');
    //cy.contains('Invalid Password');
    cy.get(SIGNUPCOMP.SIGNUP).should('be.disabled');
    cy.url().should('eq', Cypress.env('baseUrl') +  SIGNUPCOMP.CONTINUEURL);

    signupPage.back();
    signupPage.continue();
    cy.reload();
  })
  
  it('signup with repeated (invalid) username and valid password', function () {
    //invalid (repeated) username and valid pass
    signupPage.username('repeateduser');  // TODO make an account with this uername to be considered as repeated
    signupPage.password('valid123');
    // TODO  --> check for the textbox to be turned into red and check for the message written below it
    //assertions
    cy.get(SIGNUPCOMP.USERNAMERULE).contains('That username is already taken');
    //cy.get(SIGNUPCOMP.INVALIDPASS).should('not.exist');
    cy.get(SIGNUPCOMP.SIGNUP).should('be.disabled');
    cy.url().should('eq', Cypress.env('baseUrl') +  SIGNUPCOMP.CONTINUEURL);

    signupPage.back();
    signupPage.continue();
    cy.reload();

  })


  it('signup with valid (unique) username and repeated pass', function () {
    //invalid (repeated) username and valid pass
    signupPage.username('newname');  // TODO make an account with this uername to be considered as repeated
    signupPage.password('repeatedpass');
    // TODO  --> check for the textbox to be turned into red and check for the message written below it
    //assertions
    cy.get(SIGNUPCOMP.USERNAMERULE).should('not.exist');
    //cy.get(SIGNUPCOMP.INVALIDPASS).contains('Invalid Password');
    //cy.contains('Invalid Password');
    cy.get(SIGNUPCOMP.SIGNUP).should('be.disabled');
    cy.url().should('eq', Cypress.env('baseUrl') +  SIGNUPCOMP.CONTINUEURL);

    signupPage.back();
    signupPage.continue();
    cy.reload();

  })


  it('valid (unique) username and invalid (less than 8 char) pass', function () {
    //invalid (repeated) username and valid pass
    signupPage.username('newname');  // TODO make an account with this uername to be considered as repeated
    signupPage.password('123');
    // TODO  --> check for the textbox to be turned into red and check for the message written below it
    //assertions
    cy.get(SIGNUPCOMP.USERNAMERULE).should('not.exist');
   // cy.get(SIGNUPCOMP.INVALIDPASS).contains('Invalid Password');
   //cy.contains('Invalid Password');
    cy.get(SIGNUPCOMP.SIGNUP).should('be.disabled');
    cy.url().should('eq', Cypress.env('baseUrl') +  SIGNUPCOMP.CONTINUEURL);

    

  })

  it('check the back button', function () {
    signupPage.back();
    //assertion
    cy.url().should('eq', Cypress.env('baseUrl') +  SIGNUPCOMP.URL);

  })

  // it('signup with valid email & valid uesrname & valid password & recaptcha expiration check', function () {
  //   signupPage.navigate();
  //   signupPage.email('doaa@gmail.com');
  //   signupPage.continue();
  //   signupPage.username('validuser');  // TODO make an account with this uername to be considered as repeated
  //   signupPage.password('validpasss');
  //   signupPage.recaptcha();
  //   //wait until recaptcha expire
  //   //cy.wait(8000);  //wait for 2 minutes
  //   //check whether or not it is expired
  //   //signupPage.recaptchacheck()
  //   //signupPage.recaptcha();
  //   signupPage.signup();
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
  //   cy.url().should('eq', Cypress.env('baseUrl') +  LOGINCOMP.URL);
  //   cy.get(LOGINCOMP.SIGNUP).click();
  //   cy.wait(2000);
  //   //assertion
  //   cy.url().should('eq', Cypress.env('baseUrl') +  SIGNUPCOMP.URL);

  //   signupPage.email('doaa.magdy@gmail.com');
  //   signupPage.continue();
  //   cy.wait(2000);  //should we write it inside the function continue or here ???
  //   cy.url().should('eq', Cypress.env('baseUrl') +  SIGNUPCOMP.CONTINUEURL);  //assertion
  //   signupPage.username('validuser');  // TODO make an account with this uername to be considered as repeated
  //   signupPage.password('valid123');
  //   signupPage.back();
  //   // assertions
  //   cy.wait(3000);
  //   cy.url().should('eq', Cypress.env('baseUrl') +  SIGNUPCOMP.URL);

  //   signupPage.checkemail('doaa.magdy@gmail.com');
  //   signupPage.continue();
  //   //assertion
  //   signupPage.checkusername('validuser');
  //   signupPage.checkpass('valid123')

  //   //back again to continue testing --> with google / facebook
  //   signupPage.back();

  // })






//visit this page


//click continue with google



//1s test --> both email and password are correct
//enter the email and click the next button        --> what if there already some saved mails ??????
 
//


//enter the passworkd and click next

