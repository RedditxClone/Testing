import Settings from '../support/Settings'
import SETTINGSCOMP from '../support/SettingsComp.json'

describe('Test Settings', function () {
  const settingspage = new Settings()

  it('Go to About', function () {
    settingspage.naviageAcc();
    cy.url().should('eq', SETTINGSCOMP.ACCOUNT);
    
  })

  it('Change the gender', function () {
    settingspage.naviageAcc();
    cy.url().should('eq', SETTINGSCOMP.ACCOUNT);
    
  })


  



  it('Go to Profile tab', function () {
    settingspage.naviageprof()
    cy.url().should('eq', SETTINGSCOMP.PROFILE);
    
  })



  it('test adding new link', ()=>{
    settingspage.addsociallink(3, 'anything', 'https://ay7aga.com');
    


  })

 })
