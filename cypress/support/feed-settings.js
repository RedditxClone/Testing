import FEEDSETTINGSCOMP from '../support/feed-settings-comp.json'

class FeedSettings {

    navigateFeed(){
        cy.get(FEEDSETTINGSCOMP.SETTINGSTABS).children().eq(3).click();

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
        cy.get(FEEDSETTINGSCOMP.SETTINGSTABS).children().eq(0).click();
    }



}
export default FeedSettings
