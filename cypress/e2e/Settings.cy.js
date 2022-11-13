import Settings from '../support/Settings'
import SETTINGSCOMP from '../support/SettingsComp.json'
import Home from '../support/Home'
import Login from '../support/Login'
import HOMECOMP from '../support/HomeComp.json'
import LOGINCOMP from '../support/LoginComp.json'


describe('Test Settings', function () {
  const settingspage = new Settings()
  const homepage = new Home()
  const loginpage = new Login()

  it('Go to About', function () {
    settingspage.navigateAcc();
    cy.url().should('eq', SETTINGSCOMP.ACCOUNT);
    
  })

  it('Change the email (ideal case)', function () {
    settingspage.changemail('ay7aga123', 'newmail@gmail.com')
    settingspage.savenewmail();

    //assertion  --> make sure the email have changed
    cy.get(SETTINGSCOMP.CURRENTMAIL)
    .should('eq', newmail);
    //or .contains(newmail)

  })

  it('Change the email with invalid mail', function () {
    settingspage.changemail('ay7aga123', 'abcd')
    settingspage.savenewmail();

    //assertion
    
    cy.get(SETTINGSCOMP.CURRENTMAIL).contains('newmail@gmail.com');
    
  })


  it('Change the email with wrong password', function () {
    settingspage.changemail('wrongpass', 'doaa@gmail.com')
    settingspage.savenewmail();

    //assertion
    cy.get(SETTINGSCOMP.CURRENTMAIL).contains('newmail@gmail.com');
    
  })

  it('Change the email with empty password to make sure the button is disabled', function () {
    cy.get(SETTINGSCOMP.CEMAIL)
        .should('exist')
        .click();

    cy.get(SETTINGSCOMP.NEWMAIL)
        .should('exist')
        .clear()
        .type('doaa@gmail.com');

    //assertion
    cy.get(SETTINGSCOMP.SAVEEMIAL)
      .should('be.disabled');

    settingspage.closeupdatemail();
    cy.get(SETTINGSCOMP.CURRENTMAIL).contains('newmail@gmail.com');
    
  })

  it('Change the email with empty mail to make sure the button is disabled', function () {
    //I won't use the func here as we can't pass to it empty string ''
    cy.get(SETTINGSCOMP.CEMAIL)
        .should('exist')
        .click();
    cy.get(SETTINGSCOMP.CURRENTPASS)
        .should('exist')
        .clear()
        .type('ay7aga');

    //assertion
    cy.get(SETTINGSCOMP.SAVEEMIAL)
      .should('be.disabled');

    settingspage.closeupdatemail();
    cy.get(SETTINGSCOMP.CURRENTMAIL).contains('newmail@gmail.com');
    
  })





//TODO --> try change password (but it is not exist in the UI)

  it('Log out and try to enter by the old then the new password', function () {
    homepage.logout();
    homepage.gotologin();
    loginpage.username('ay7aga')

    //1-with old password
    loginpage.password('ay7aga123')
    //assertion --> make sure it doesn't log me in
    loginpage.submit();
    cy.url().should('eq', LOGINCOMP.URL)

    //2-wiht the new password
    loginpage.password('newpassword')
    loginpage.submit();
    //assertion
    cy.get(HOMECOMP.DROPDOWNRIGHT).contains('ay7aga');
    
  })

  

  it('Change the gender', function () {
    settingspage.navigateAcc();
    cy.url().should('eq', SETTINGSCOMP.ACCOUNT);
    
  })


  



  it('Go to Profile tab', function () {
    settingspage.navigateprof()
    cy.url().should('eq', SETTINGSCOMP.PROFILE);
    
  })



  it('test adding new link', ()=>{
    settingspage.addsociallink(3, 'anything', 'https://ay7aga.com');
    


  })

 })
