import COMMUNITYCOMP from './community-comp.json'
import HOMECOMP from './home-comp.json'


class Community {

    openCommForm(){
        cy.get(COMMUNITYCOMP.DROPDOWNRIGHT)
            .should('exist')
            .click();
        
        //assertion
        cy.get(COMMUNITYCOMP.CREATECOMM)
            .should('exist')
            .click();
      }

    
    createCommunity(name, type, adult){   //type:  0 -->
        //this.openCommForm()

        if(name != ' ')
            cy.get(COMMUNITYCOMP.COMMNAME)
                .should('exist')
                .clear()
                .type(name);
        
        cy.get(COMMUNITYCOMP.COMMTYPE)
            .should('exist')
            .contains(type).click();

        if(adult)
            cy.get(COMMUNITYCOMP.ADULTCONTENT)
                .should('exist')
                .click();

    }


    asertionCreateCommunity(name){
        //assertions  --> 1-Form is no longer exist
        //2-url is the community url  
        //3-if for adult (then there will be a pop up window to ask about my age)
        cy.get(COMMUNITYCOMP.COMMFORM)
            .should('not.exist'); 
        cy.url().should('eq', Cypress.env('baseUrl') +  HOMECOMP.URL + "/r/" + name + "/")

    }

    addDescription(des){
        cy.get(COMMUNITYCOMP.DESCRIPTION)
            .clear()
            .type(des)


    }

    saveDescription(){
        cy.get('[data-testid="about-description"]')
        .click()

    }

    cancelDescription(){
        cy.get(COMMUNITYCOMP.CANCELDES)
        .click()

    }

    addSubTopic(st){
        cy.get(COMMUNITYCOMP.SUBTOPIC)
            .click()
        cy.get(COMMUNITYCOMP.SUBTOPICLIST).children().first().click()


    }

    saveSubTopic(){
        cy.get(COMMUNITYCOMP.SAVESUBTOPIC)
            .click()

    }

    cancelSubTopic(){
        cy.get(COMMUNITYCOMP.CANCELSUBTOPIC)
            .click()

    }

    scrollDown(){
        cy.scrollTo('bottom')
    }

    backToTop(){
        cy.get('[data-testid="scrollup"] > .MuiButtonBase-root')
            .click()
    }

    goToModTools(){
    
    }


    approvePost(){
        cy.contains('/#post-approve-$/').first()
            .click()
        //cy.get('#post-approve-63a5e89f8030bcf17375b5b1')
          //  .click()
        //assertion
        cy.get('/#post-approve-$/').first().should('have.css', 'background-color')
        .and('eq', 'rgb(242, 228, 125)')
    }

    spamPost(){

    }
    
  
}
export default Community
