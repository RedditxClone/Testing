import LOGINCOMP from '../support/LoginComp.json'

class Login {
  naviage () {
    cy.visit(LOGINCOMP.URL)
  }

  signup () {
    cy.get(LOGINCOMP.SIGNUP).click()
  }

  forgetusername(){
    cy.get(LOGINCOMP.FORGETUSERNAME).click()

  }

  forgetpassword(){
    cy.get(LOGINCOMP.FORGETPASSWORD).click()

  }

  // /////////////////////////////// username & password /////////////////////////

  username (username) {
    cy.get(LOGINCOMP.USERNAME)
      .should('exist')
      .clear()
      .type(username)
    return this
  }

  password (password) {
    cy.get(LOGINCOMP.PASSWORD)
      .clear()
      .type(password)
    return this
  }

  submit () {
    cy.get(LOGINCOMP.LOGIN).click()
  }


  // /////////////////////////////// gmail & password /////////////////////////

  //TODO --> it doesn't work
  // withgoogle (email, password) {
  //   cy.get(LOGINCOMP.WITHGOOGLE)
  //     .should('exist')
  //     .click()

  //     cy.wait(5000);


  //     cy.window().then(win => {
  //       cy.stub(win, 'open').as('windowOpen');
  //     });

  //     cy.wait(5000);
  //    // cy.get('#open-window').click()
  //     // Google Login Redirection: Email Input
  //     //cy.url().should('contain', 'accounts.google.com')
  //       cy.get('input[type="email"]')
  //       .clear()
  //       .type(email)
  //       .type('{enter}').wait(3000);

  //   // Google Login Redirection: Password Input
  //   //cy.url().should('contain', 'accounts.google.com')
  //     cy.get('input[type="password"]')
  //     .clear()
  //     .type(password)
  //     .type('{enter}').wait(3000);

    
  // }

  // gglemail (gmail) {
  //   cy.get(LOGINCOMP.EMAIL)
  //     .should('exist')
  //     .clear()
  //     .type(gmail)
  //   return this
  // }

  // gglpassword (password) {
  //   cy.get(LOGINCOMP.PASSGGL)
  //     .should('exist')
  //     .clear()
  //     .type(password)
  //   return this
  // }

  // pressnext1 () {
  //   cy.get(LOGINCOMP.NEXTBUTTON1)
  // }

  // pressnext2 () {
  //   cy.get(LOGINCOMP.NEXTBUTTON2)
  // }
}
export default Login
