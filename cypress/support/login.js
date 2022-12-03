import LOGINCOMP from './login-comp.json'

class Login {
  navigate () {
    cy.visit(LOGINCOMP.URL)
  }

  signup () {
    cy.get(LOGINCOMP.SIGNUP).click()
  }

  forgetUsername(){
    cy.get(LOGINCOMP.PARENTFORGET)
      .children().first()
      .click()

  }

  forgetPassword(){
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

  clearUsername()
  {
    cy.get(LOGINCOMP.USERNAME)
      .should('exist')
      .clear()
    return this

  }

  clearPass()
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
