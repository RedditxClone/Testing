import Signup from '../support/Signup'
import SIGNUPCOMP from '../support/SignupComp.json'
import HOMECOMP from '../support/HomeComp.json'
import LOGINCOMP from '../support/LoginComp.json'

describe('Test Signup', function () {
  const signuppage = new Signup()
  // beforeEach(()=>{
  //     signuppage.naviage()
  // })

  it('Go to login page then come back again', function () {
    signuppage.naviage()
    signuppage.login()
    cy.wait(5000) // wait for 5 secs
    // assertion
    cy.url().should('eq', LOGINCOMP.LOGINURL)
    // go back to login again
    cy.go('back')
  })

  

  // /////////////////////////////// Sign up with email /////////////////////////
  it('signup with wrong email', function () {
    signuppage.email('ay7aga@gmail.com');
    signuppage.continue()
    // assertion
    cy.url().should('eq', SIGNUPCOMP.URL)
  })

  it('signup with empty or invalid(not exist or with no known domain) email', function () {
    //empty email
    signuppage.email('   ');
    signuppage.continue();
    // assertion
    //TODO --> check for the red border line and the message
    cy.wait(3000);
    cy.url().should('eq', SIGNUPCOMP.URL);

    //with no domain
    signuppage.email('ay7aga ');
    signuppage.continue();
    // assertion
    //TODO --> check for the red border line and the message
    cy.wait(3000);
    cy.url().should('eq', SIGNUPCOMP.URL);

    //mail that doesn't exist 
    signuppage.email('ay7aga@gmail.com');
    signuppage.continue();
    // assertion
    //TODO --> check for the red border line and the message
    cy.wait(3000);
    cy.url().should('eq', SIGNUPCOMP.URL);
  })

  it('signup with valid email but empty username or empty password or both', function () {
    signuppage.email('doaa.magdy@gmail.com');
    signuppage.continue();
    //assertion
    cy.url().should('eq', SIGNUPCOMP.CONTINUEURL)

    //both are empty
    signuppage.username('');  //
    signuppage.password('');
    signuppage.recaptcha();
    signuppage.signup();
    // assertion
    cy.wait(3000);
    cy.url().should('eq', SIGNUPCOMP.CONTINUEURL)

    //pass only is empty
    signuppage.username('doaa');  //make it unique (make sure it doesn't exist in the DB)
    signuppage.recaptcha();
    signuppage.signup();
    // assertion
    cy.wait(3000);
    cy.url().should('eq', SIGNUPCOMP.CONTINUEURL);

    //username only is empty
    signuppage.username('');  //
    signuppage.password('123456789aa');  //make it unique (make sure it doesn't exist in the DB)
    signuppage.recaptcha();
    signuppage.signup();
    // assertion
    cy.wait(3000);
    cy.url().should('eq', SIGNUPCOMP.CONTINUEURL)

  })


  it('signup with valid email but repeated (invalid) username or invalid(repeated/less than 8 chars) password or both', function () {
    //invalid (repeated) username and valid pass
    signuppage.username('repeateduser');  // TODO make an account with this uername to be considered as repeated
    signuppage.password('valid123');
    signuppage.recaptcha();
    signuppage.signup();
    // assertions
    // TODO  --> check for the textbox to be turned into red and check for the message written below it
    cy.wait(3000);
    cy.url().should('eq', SIGNUPCOMP.CONTINUEURL)

    //valid (unique) username and repeated pass
    signuppage.username('validuser');  //make it unique (make sure it doesn't exist in the DB)
    signuppage.password('repeatedpass12');
    signuppage.recaptcha();
    signuppage.signup();
    // assertions
    // TODO  --> check for the textbox to be turned into red and check for the message written below it
    cy.wait(3000);
    cy.url().should('eq', SIGNUPCOMP.CONTINUEURL);

    //valid (unique) username and invalid (less than 8 char) pass
    signuppage.username('validuser');  //make it unique (make sure it doesn't exist in the DB)
    signuppage.password('123');
    signuppage.recaptcha();
    signuppage.signup();
    // assertions
    // TODO  --> check for the textbox to be turned into red and check for the message written below it
    cy.wait(3000);
    cy.url().should('eq', SIGNUPCOMP.CONTINUEURL);

  })


  it('signup with valid email & valid uesrname & valid password & recaptcha expiration check', function () {
    signuppage.username('validuser');  // TODO make an account with this uername to be considered as repeated
    signuppage.password('valid123');
    signuppage.recaptcha();
    //wait until recaptcha expire
    wait(2*60*60*1000);  //wait for 2 minutes
    //check whether or not it is expired
    signuppage.recaptchacheck()
    signuppage.recaptcha();
    signuppage.signup();
    // assertions
    cy.wait(3000);
    cy.url().should('eq', SIGNUPCOMP.SIGNEDUPURL)

  })


  it('check the back button', function () {
    //first logout from the created account in the above step
    cy.get(HOMECOMP.DROPDOWNRIGHT)
        .scrollTo('bottom')
        .get(HOMECOMP.LOGOUT)
        .click();
    cy.wait(1000);
    //assertion
    cy.url().should('eq', LOGINCOMP.URL);
    cy.get(LOGINCOMP.SIGNUP).click();
    cy.wait(2000);
    //assertion
    cy.url().should('eq', SIGNUPCOMP.URL);

    signuppage.email('doaa.magdy@gmail.com');
    signuppage.continue();
    cy.wait(2000);  //should we write it inside the function continue or here ???
    cy.url().should('eq', SIGNUPCOMP.CONTINUEURL);  //assertion
    signuppage.username('validuser');  // TODO make an account with this uername to be considered as repeated
    signuppage.password('valid123');
    signuppage.back();
    // assertions
    cy.wait(3000);
    cy.url().should('eq', SIGNUPCOMP.URL);

    signuppage.checkemail('doaa.magdy@gmail.com');
    signuppage.continue();
    //assertion
    signuppage.checkusername('validuser');
    signuppage.checkpass('valid123')

    //back again to continue testing --> with google / facebook
    signuppage.back();

  })

})
















//visit this page


//click continue with google



//1s test --> both email and password are correct
//enter the email and click the next button        --> what if there already some saved mails ??????
 
//


//enter the passworkd and click next


//