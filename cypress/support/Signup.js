import SIGNUPCOMP from './SignupComp.json'

class Signup {
  navigate () {
    cy.visit(SIGNUPCOMP.URL)
  }

  login () {
    cy.get(SIGNUPCOMP.LOGIN).click()
  }

  // /////////////////////////////// username & password /////////////////////////

  email (email) {
    cy.get(SIGNUPCOMP.EMAIL).children().first()
      .click()
     // .should('exist')
      .clear()
      .type(email)
    return this
  }

  ////.css-bncy46

  continue(){
    cy.get(SIGNUPCOMP.CONTINUE).click()

  }

  back(){
    cy.get(SIGNUPCOMP.BACK).click()
  }

  checkemail(email){
    cy.get(SIGNUPCOMP.EMAIL)
      .contains(email);
    
  }

  checkusername(username){
    cy.get(SIGNUPCOMP.USERNAME)
      .contains(username);
    
  }

  checkpass(pass){
    cy.get(SIGNUPCOMP.PASSWORD)
      .contains(pass);
    
  }

  username (username) {
    cy.get(SIGNUPCOMP.USERNAMEANDPASSWORDPARENT).children().first().click()
   // cy.get(SIGNUPCOMP.USERNAME)
     // .should('exist')
      .clear()
      .type(username)
    return this
  }

  password (password) {
    cy.get(SIGNUPCOMP.USERNAMEANDPASSWORDPARENT).children().last().click()
    //cy.get(SIGNUPCOMP.PASSWORD)  // :nth-child(2) > div > .css-rsk4te
    //cy.get('.css-nk5jtv')
     // .clear()
      .type(password)
    return this
  }


  recaptcha(){
    // Cypress.Commands.add('confirmCaptcha', function () {
    //   cy.get('iframe')
    //     .first()
    //     .then((recaptchaIframe) => {
    //       const body = recaptchaIframe.contents()
    //       cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click()
    //     })
    // })
    cy.get('iframe')
    .first()
    .its('0.contentDocument.body')
    .should('not.be.undefined')
    .then(cy.wrap)
    .find('.rc-anchor-center-container')
    .should('be.visible')
    .click();
    //cy.get(SIGNUPCOMP.USERNAMEANDPASSWORDPARENT).children().eq(1).click()
  }

  //TODO
  recaptchacheck(){
    cy.get(SIGNUPCOMP.RECAPTCHAEXPIRE)
      .should('eq', 'Verification expired. Check for the checkbox again.')
  }

  signup () {
    cy.get(SIGNUPCOMP.SIGNUP).click()
  }


  // /////////////////////////////// With google /////////////////////////

  // withgoogle () {
  //   cy.get(SIGNUPCOMP.WITHGOOGLE)
  //     .should('exist')
  //     .click()
  // }

  // gglemail (gmail) {
  //   cy.get(SIGNUPCOMP.EMAILGGL)
  //     .should('exist')
  //     .clear()
  //     .type(gmail)
  //   return this
  // }

  // gglpassword (password) {
  //   cy.get(SIGNUPCOMP.PASSGGL)
  //     .should('exist')
  //     .clear()
  //     .type(password)
  //   return this
  // }

  // pressnext1 () {
  //   cy.get(SIGNUPCOMP.NEXTBUTTONGGL1)
  // }

  // pressnext2 () {
  //   cy.get(SIGNUPCOMP.NEXTBUTTONGGL2)
  // }



  // // /////////////////////////////// With facebook /////////////////////////

  // withfacebook () {
  //   cy.get(SIGNUPCOMP.WITHFACEBOOK)
  //     .should('exist')
  //     .click()
  // }

  // facebookaccount (facebook) {
  //   cy.get(SIGNUPCOMP.ACCOUNTFACEBOOK)
  //     .should('exist')
  //     .clear()
  //     .type(gmail)
  //   return this
  // }

  // gglpassword (password) {
  //   cy.get(SIGNUPCOMP.PASSWORDFACEBOOK)
  //     .should('exist')
  //     .clear()
  //     .type(password)
  //   return this
  // }

  // pressnext1 () {
  //   cy.get(SIGNUPCOMP.NEXTBUTTONFACE1)
  // }

  // pressnext2 () {
  //   cy.get(SIGNUPCOMP.NEXTBUTTONFACE2)
  // }
}
export default Signup
