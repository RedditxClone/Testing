import LOGINCOMP from './login-comp.json'

class Login {
  navigate () {
    cy.visit(LOGINCOMP.URL)
  }

  signup () {
    cy.get(LOGINCOMP.SIGNUP).click()
  }

  forgetusername(){
    cy.get(LOGINCOMP.PARENTFORGET)
      .children().first()
      .click()

  }

  forgetpassword(){
    cy.get(LOGINCOMP.PARENTFORGET)
      .children().eq(1)
      .click();

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

  clearusername()
  {
    cy.get(LOGINCOMP.USERNAME)
      .should('exist')
      .clear()
    return this

  }

  clearpass()
  {
    cy.get(LOGINCOMP.PASSWORD)
      .clear()
    return this

  }

  submit () {
    cy.get(LOGINCOMP.LOGIN).click()
  }



}
export default Login
