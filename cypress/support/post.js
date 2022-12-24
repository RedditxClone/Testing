import POSTCOMP from './post-comp.json'

class Post {


  //body --> body / URL / Image / Video /
  clickCreatePost(){
    cy.get(POSTCOMP.CREATEPOSTBUTTON)
      .should('exist')
      .click();

  }

  createPost(title, body, spoiler, nsfw, type, ifComm)
  {

    if(title != ' ')
      cy.get(POSTCOMP.TITLE)
        .should('exist')
        .clear()
        .type(title);

    //TODO --> specific community
    if(ifComm){
      
      cy.get(POSTCOMP.COMMUNITY)
        .should('exist').click().get(POSTCOMP.COMM).click()
    }
      
        // .eq(2)
        // .children()
        // .eq(1)
        // .click();
    
    if(spoiler)
    {
      cy.get(POSTCOMP.SPOILER)
        .should('exist')
        .click();
    }

    if(nsfw)
    {
      cy.get(POSTCOMP.NFSW)
        .should('exist')
        .click();
    }

    if(type == "post")
    {
      this.postPost(body)
    }
    else if(type == "image")
    {
      this.postImage(body)
    }
    else if(type == "video")
    {
      this.postVideo(body)
    }
    else if(type == "link")
    {
      this.postLink(body)
    }
    else if(type == "poll")
    {
      this.postPoll()
    }

  }

  postPost(body){
    cy.get(POSTCOMP.POSTTAB)
    .should('exist')
    .click();

    if(body != ' ')
      cy.get(POSTCOMP.BODY)
        .should('exist')
        .clear()
        .type(body);

  }

  postImage(img){
    cy.get(POSTCOMP.IMGVIDEOTAB)
    .should('exist')
    .click();
    
    if(img != ' ')
      cy.get(POSTCOMP.UPLOADIMG)
        .should('exist')
        .attachFile(img)

  }

  postVideo(video){
    cy.get(POSTCOMP.IMGVIDEOTAB)
    .should('exist')
    .click();

    if(video != ' ')
      cy.get(POSTCOMP.UPLOADIMG)
      .should('exist')
      .attachFile(video);

  }

  postLink(link){
    
    cy.get(POSTCOMP.LINKTAB)
    .should('exist')
    .click();
    if(link != ' ')
      cy.get(POSTCOMP.URL)
        .should('exist')
        .clear()
        .type(link);

  }

  postPoll(){
    cy.get(POSTCOMP.POLLTAB)
    .should('exist')
    .click();

  }

  validSubmitPost(){
    cy.get(POSTCOMP.POSTBUTTON).last()
      //.should('be.enabled')
      .click({ force: true });
  }

  invalidSubmitPost(){
    cy.get(POSTCOMP.POSTBUTTON)
      .should('not.be.enabled')
  }


  upVote(){
    cy.get(POSTCOMP.POSTSLIST)
      .children()
      .first()
      .get(POSTCOMP.UPVOTE)
      .click()

  }

  downVote(){
    cy.get(POSTCOMP.POSTSLIST)
    .children()
    .first()
    .get(POSTCOMP.DOWNVOTE)
    .click()

  }

  savePost(){
    cy.get(POSTCOMP.POSTSLIST)
    .children()
    .first()
    .get(POSTCOMP.SAVE)
    .click()

  }

  hidePost(){
    cy.get(POSTCOMP.POSTSLIST)
      .children()
      .first()
      .get(POSTCOMP.MOREOPTIONS)
      .click()
      

    cy.get(POSTCOMP.POSTSLIST)
      .children()
      .first()
      .get(POSTCOMP.UPVOTE)
      .click()

  }

}
export default Post
