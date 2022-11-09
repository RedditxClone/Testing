import LOGINCOMP from '../support/LoginComp.json'

class Login{
    naviage(){
        cy.visit(LOGINCOMP.URL)
    }

    ///////////////////////////////// username & password /////////////////////////
    username(username){
        cy.get(LOGINCOMP.USERNAME)
            .should('exist')
            .clear()
            .type(username);
        return this
    }

    password(password){
        cy.get(LOGINCOMP.PASSWORD)
            .clear()
            .type(password);
        return this
    }

    submit(){
        cy.get(LOGINCOMP.LOGIN).click()
    }
    

    ///////////////////////////////// gmail & password /////////////////////////

    withgoogle(){
        cy.get(LOGINCOMP.WITHGOOGLE)
            .should('exist')
            .click()
    }

    gglemail(gmail){
        cy.get(LOGINCOMP.EMAIL)
            .should('exist')
            .clear()
            .type(gmail);
        return this
    }

    gglpassword(password){
        cy.get(LOGINCOMP.PASSGGL)
            .should('exist')
            .clear()
            .type(password);
        return this
    }

    pressnext1(){
        cy.get(LOGINCOMP.NEXTBUTTON1);
    }

    pressnext2(){
        cy.get(LOGINCOMP.NEXTBUTTON2);
    }
}
export default Login