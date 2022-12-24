import Login from '../support/login'
import Post from '../support/post'
import LOGINCOMP from '../support/login-comp.json'




describe('Test Post', function () {
    const loginPage = new Login()
    const post = new Post();
  
  
    it('Go to login page and login as a user', function () {
      loginPage.navigate()

    
        
      cy.get(LOGINCOMP.USERNAME)
      .type('doaamagdy')

      cy.get(LOGINCOMP.PASSWORD)
      .type('doaamagdypassword')

      loginPage.submit()



    })



    it('Go to login page and login as a user', function () {
  
        cy.get(LOGINCOMP.USERNAME)
        .clear()
        .type('doaamagdy')
  
        cy.get(LOGINCOMP.PASSWORD)
        .clear()
        .type('doaamagdypassword')
  
        cy.get(LOGINCOMP.USERNAME)
        .clear()
        .type('doaamagdy')
  
        cy.get(LOGINCOMP.PASSWORD)
        .clear()
        .type('doaamagdypassword')
  
   
      //   loginPage.username('doaamagdy')
      //   loginPage.password('doaamagdypassword')
        // assertion
        cy.get(LOGINCOMP.LOGIN).click()
        
        loginPage.submit()
        //assertion
        cy.contains('doaamagdy');
  
      })
  
    it('post a post without choosing community (InVaild)', function () {
        post.clickCreatePost()
        post.createPost('a test post', 'body of a test post', 1, 1, 'post', 0);

        //assertion
        post.invalidSubmitPost();

    })

    it('post a post without title (InVaild)', function () {
        post.createPost(' ', 'body of a test post', 1, 1, 'post', 1);

        //assertion
        post.invalidSubmitPost();

    })

    it('post a post with empty body (InVaild)', function () {
        post.createPost('a test post', ' ', 1, 1, 'post', 1);

        //assertion
        post.invalidSubmitPost();

    })

    it('post a link with empty URL (InVaild)', function () {
        post.createPost('a test post', ' ', 1, 1, 'link', 1);

        //assertion
        post.invalidSubmitPost();

    })

    it('post a link with invalid URL (InVaild)', function () {
        post.createPost('a test post', 'invalid url', 1, 1, 'link', 0);

        //assertion
        post.invalidSubmitPost();

    })



  
  
    it('post a post', function () {
        post.createPost('a test post', 'post body for testing', 1, 1, 'post', 1);

        //assertion
        post.validSubmitPost();
      
    })
  
  

    it('post a link', function () {
        cy.go('back');
        post.clickCreatePost()
        post.createPost('a test link post', 'www.google.com', 0, 1, 'link', 1);

        //assertion
        post.validSubmitPost();

    })
  
    it('post an image', function () {
        cy.go('back');
        post.clickCreatePost()
        const img = '../fixtures/images.jpg'
        post.createPost('a test image post', img, 1, 0, 'image', 1);

        //assertion
        post.validSubmitPost();
      
    })
  
  
    it('post a video', function () {
        cy.go('back');
        post.clickCreatePost()
        const video = '../fixtures/test_video.mp4'
        post.createPost('a test video post', video, 0, 0, 'video', 1);
  
        //assertion
        post.validSubmitPost();
     
    })
  
    it('post a poll', function () {
        cy.go('back');
        post.clickCreatePost()
        post.createPost('this is a poll for testing', ' ', 1, 1, 'poll', 1);
  
        //assertion
        post.validSubmitPost();
      
    })

   
   })



   
  