import FEEDSETTINGSCOMP from '../support/feed-settings-comp.json'

class FeedSettings {

    navigateFeed(){
        cy.visit(FEEDSETTINGSCOMP.FEED)

    }

    checkAdultContent(){
        cy.get(FEEDSETTINGSCOMP.ADULTCONTENT)
            .should('exist')
            .check();
    }

    uncheckAdultContent(){
        cy.get(FEEDSETTINGSCOMP.ADULTCONTENT)
            .should('exist')
            .uncheck();
    }

    checkAutoplayMedia(){
        cy.get(FEEDSETTINGSCOMP.AUTOPLAYMEDIA)
            .should('exist')
            .check();

    }

    uncheckAutoplayMedia(){
        cy.get(FEEDSETTINGSCOMP.AUTOPLAYMEDIA)
            .should('exist')
            .uncheck();
    }



    navigateAcc () {
        cy.visit(FEEDSETTINGSCOMP.ACCOUNT)
    }



}
export default FeedSettings
