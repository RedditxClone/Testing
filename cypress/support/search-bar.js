import SEARCHCOMP from './search-bar-comp.json'

class Search {

    searchFor(words, type, exist){
        //Write the word in the search bar

        cy.get(SEARCHCOMP.SEARCHBAR).first()
            .clear()
            .type(words + '{enter}')

        if(type == "post")
        {
            this.serachPost(words);
            this.assertPostSearch(SEARCHCOMP.POSTSLIST, words, exist)

        }

        else if(type == "comment")
        {
            this.serachComment(words);
            this.assertCommentSearch(SEARCHCOMP.COMMENTSLIST, words, exist)

        }

        else if(type == "community")
        {
            this.serachCommunity(words);
            this.assertCommunitySearch(SEARCHCOMP.COMMLIST, words, exist)

        }
        else if(type == "people")
        {
            this.serachPeople(words);
            this.assertPeopleSearch(SEARCHCOMP.PEOPLELIST, words, exist)

        }

    }

    serachPost(words){
        cy.get(SEARCHCOMP.POSTSTAB)
            .click();

    }

    assertPostSearch(postList, words, exist){
        if(exist)
        {
            // cy.get(postList)
            // .children()
            // .first()
            // .should('have.text', words);
            cy.contains(words)
        }
        else{
            cy.get(postList)
            .children()
            .should('have.length', 1);

            cy.get(SEARCHCOMP.NORESULTSPOSTCOMMENTS)
            .should('have.text', 'No data found.')
            
        }
    }

    serachComment(words){
        cy.get(SEARCHCOMP.COMMENTSTAB)
            .click();

    }

    assertCommentSearch(commList, words, exist){
        if(exist)
        {
            cy.get(commList)
            .children()
            .first()
            .contains(words);
        }
        else{
            cy.get(commList)
            .children()
            .should('have.length', 1);

            cy.get(SEARCHCOMP.NORESULTSPOSTCOMMENTS)
            .should('have.text', 'No data found.')
            
        }
    }

    serachCommunity(words){
        cy.get(SEARCHCOMP.COMMUNITIESTAB)
            .click();
        

    }

    assertCommunitySearch(commList, words, exist){
        if(exist)
        {
            cy.get(commList)
            .children()
            .first()
            .contains(words);
        }
        else{
            cy.get(commList)
            .children()
            .should('have.length', 1);

            cy.get(SEARCHCOMP.NORESULTSPOEPLECOMMU)
            .should('have.text', 'No results found.')
            
        }
    }

    serachPeople(words){
        cy.get(SEARCHCOMP.PEOPLETAB)
            .click();

    }

    assertPeopleSearch(userList, words, exist){
        if(exist)
        {
            cy.get(userList)
            .children()
            .first()
            .contains(words);
        }
        else{
            cy.get(userList)
            .children()
            .should('have.length', 1);

            cy.get(SEARCHCOMP.NORESULTSPOEPLECOMMU)
            .should('have.text', 'No results found.')
            
        }
    }

    followUser(){
        cy.get(SEARCHCOMP.FOLLOW)
            .first()
            .click();

    }

    joinComm(){
        cy.get(SEARCHCOMP.JOINCOMM)
            .first()
            .click();

    }
  
}
export default Search
