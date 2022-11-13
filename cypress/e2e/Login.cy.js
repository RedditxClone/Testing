import Login from '../support/Login'
import LOGINCOMP from '../support/LoginComp.json'
import SIGNUPCOMP from '../support/SignupComp.json'
import HOMECOMP from '../support/HomeComp.json'


describe('Test login', function () {
  const loginpage = new Login()


  it('Go to SignUp page then come back again', function () {
    loginpage.navigate()
    loginpage.signup()
    
    // assertion
    cy.url().should('eq', SIGNUPCOMP.URL)
    // go back to login again
    cy.go('back')
  })

  it('Go to forget username page then come back again', function () {
    loginpage.forgetusername();
    
    // assertion
    cy.url().should('eq', LOGINCOMP.FORGETUSERNAMEURL);
    // go back to login again
    cy.go('back')
  })


  it('Go to forget password page then come back again', function () {
    loginpage.forgetpassword();
    
    // assertion
    cy.url().should('eq', LOGINCOMP.FORGETPASSWORDURL);
    // go back to login again
    cy.go('back')
  })


  // /////////////////////////////// test cases for username & password method /////////////////////////


  it('Login with valid username and empty password', function () {
    loginpage.username('doaamagdy'); // TODO --> create it later
    loginpage.submit()
    // assertion
    //cy.get(LOGINCOMP.LOGIN).should('be.enabled');
    cy.url().should('eq', LOGINCOMP.URL)
  })

  it('Login with empty username and valid password', function () {
    loginpage.password('9876543210'); // TODO --> create it later
    loginpage.submit()
    // assertion
    //cy.get(LOGINCOMP.LOGIN).should('be.enabled');
    cy.url().should('eq', LOGINCOMP.URL)
  })


  it('Login with invalid username and password', function () {
    loginpage.username('doaamagdy')
    loginpage.password('123456789')
    loginpage.submit()
    // assertion
    //cy.get(LOGINCOMP.LOGIN).should('be.enabled');
    cy.url().should('eq', LOGINCOMP.URL)
  })

  it('Login with invalid username and valid password', function () {
    loginpage.username('doaamagdy')
    loginpage.password('ay7aga123')
    loginpage.submit()
    // assertion
    //cy.get(LOGINCOMP.LOGIN).should('be.enabled');
    cy.url().should('eq', LOGINCOMP.URL)
  })

  it('Login with valid username and invalid password', function () {
    loginpage.username('ay7aga')
    loginpage.password('notvalid')
    loginpage.submit()
    // assertion
    //cy.get(LOGINCOMP.LOGIN).should('be.enabled');
    cy.url().should('eq', LOGINCOMP.URL)
  })

  // I put this case at the end to avoid needing to logout to complete other test cases (as back mehtod won't logout)
  it('Login with valid username and password', function () {
    loginpage.username('ay7aga'); 
    loginpage.password('ay7aga123');
    // assertion
    cy.get(LOGINCOMP.LOGIN).should('be.enabled');
    
    loginpage.submit()
    //assertion
    cy.contains('ay7aga');
    //cy.get(LOGINCOMP.USERNAMESIGNED).contains('ay7aga');
    //cy.url().should('eq', LOGINCOMP.LOGEDINURL)
  })

  // /////////////////////////////// test cases for sign in with gmail /////////////////////////
//   it.only('Login with empty gmail', function () {
//     loginpage.navigate()
//     loginpage.withgoogle('', '');
//     cy.wait(3000)
//     // TODO --> assertion (url should remian the same) but I will check by making sure that the email field stell exist and it doesn't proceed to next page
//     cy.get(LOGINCOMP.EMAIL).should('exist')
//   })

//   it('Login with valid gmail & empty password', function () {
//     // loginpage.withgoogle()
//     loginpage.gglemail('doaa.magdy2001@gmail.com')
//     loginpage.pressnext1()
//     cy.wait(3000)
//     loginpage.gglpassword('')
//     loginpage.pressnext2()
//     cy.wait(3000) // wait for 3 secs
//     // assertion
//     cy.get(LOGINCOMP.PASSGGL).should('exist')
//     cy.go('back')
//   })

//   it('Login with invalid gmail & password', function () {
//     // loginpage.withgoogle()
//     loginpage.gglemail('ay7aga@gmail.com')
//     loginpage.pressnext1()
//     cy.wait(3000)
//     loginpage.gglpassword('123456789')
//     loginpage.pressnext2()
//     cy.wait(3000) // wait for 3 secs
//     // assertion
//     cy.get(LOGINCOMP.PASSGGL).should('exist')
//     cy.go('back')
//   })

//   it('Login with valid gmail & invalid password', function () {
//     // loginpage.withgoogle()
//     loginpage.gglemail('doaa.magdy2001@gmail.com')
//     loginpage.pressnext1()
//     cy.wait(3000)
//     loginpage.gglpassword('123456789')
//     loginpage.pressnext2()
//     cy.wait(3000) // wait for 3 secs
//     // assertion
//     cy.url().should('contains', 'accounts.google.com')
//     cy.get(LOGINCOMP.PASSGGL).should('exist')
//     cy.go('back')
//   })

//   it('Login with valid gmail & valid password', function () {
//     // loginpage.withgoogle()
//     loginpage.gglemail('doaa.magdy2001@gmail.com')
//     loginpage.pressnext1()
//     cy.wait(3000)
//     loginpage.gglpassword('') // to write it later
//     loginpage.pressnext2()
//     cy.wait(3000) // wait for 3 secs
//     // assertion
//     cy.get(LOGINCOMP.LOGEDINURLGGL).should('exist')
//   })
 })
