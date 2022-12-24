import Home from '../support/home'
import HOMECOMP from '../support/home-comp.json'
import Login from '../support/login'

describe('Test Home', function () {
  const loginPage = new Login()
  const homePage = new Home()



  
  it('Go to login page and login', function () {
    //homePage.navigate();
    // homePage.goToLogin();
    // //login with a known user
    // loginPage.username('doaamagdy');
    // loginPage.password('doaamagdypassword');
    // loginPage.submit();

    // //assertion
    // cy.contains('doaamagdy');

    cy.visit('https://swproject.demosfortest.com/r/aaaa')
    
  })





 })
