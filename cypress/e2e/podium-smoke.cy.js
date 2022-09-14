import "../support/commands"

describe('Podium Smoke Tests', () => {
  
  it('check that the website loads', () => {
    cy.visit('/')
    cy.contains('All we have to decide is what to do with the time that is given us.')
  })
    
  it('opens and closed modal', () => {
    cy.visit('/')
     
    cy.get('#podium-bubble').then(($iframe) => {
      const $button = $iframe.contents().find('#main > div > div > div > div > button')
      cy.wrap($button).click()
    })

    cy.get('#podium-bubble').then(($iframe) => {
      const $button = $iframe.contents().find('#main > div > div > div > div > button')
      cy.wrap($button).click()
    })
  
      
  })

  it('opens checks that terms link is present', () => {
    cy.visit('/')
     
    cy.get('#podium-bubble').then(($iframe) => {
      const $button = $iframe.contents().find('#main > div > div > div > div > button')
      cy.wrap($button).click()
    })
    cy.wait(1000)
    cy.get('#podium-modal').then(($podiummodal) => {
      const $terms = $podiummodal.contents().find('#main > div > div > div > div > div > div > div > div.LocationSelector__PodiumPower > div')  
      cy.wrap($terms).contains('use is subject to terms')

    })
      
  })

  it('can type in the modal', () => {
    cy.visit('/')
    cy.get('#podium-bubble').then(($iframe) => {
      const $button = $iframe.contents().find('#main > div > div > div > div > button')
      cy.wrap($button).click()
    })
    cy.wait(1000)
    cy.get('#podium-modal').then(($podiummodal) => {
      const $input = $podiummodal.contents().find('#main > div > div > div > div > div > div > div > div.LocationSelector__ColorHeader > div.LocationSelector__SearchContainer > form > input')  
      cy.wrap($input).type('84043')

    })
  })

  it('can open the form and enter data', () => {
    cy.visit('/')
    
    cy.get('#podium-bubble').then(($iframe) => {
      const $button = $iframe.contents().find('#main > div > div > div > div > button')
      cy.wrap($button).click()
    })
    cy.wait(1000)
    cy.get('#podium-modal').then(($podiummodal) => {
      const $formoption = $podiummodal.contents().find('#main > div > div > div > div > div > div > div > div.LocationsList > div > button.LocationContainer.StaggerFadeIn3.LocationContainer--desktop')  
      cy.wrap($formoption).click()
    })
    cy.get('#podium-modal').then(($podiummodal) => {
      const $messageopen = $podiummodal.contents().find('#ComposeMessage > form')  
      cy.wrap($messageopen).contains('intro message')
    })
    
    cy.get('#podium-modal').then(($podiummodal) => {
      const $name = $podiummodal.contents().find('#Name')  
      cy.wrap($name).type('Test Name')
    })
    cy.get('#podium-bubble').then(($iframe) => {
      const $button = $iframe.contents().find('#main > div > div > div > div > button')
      cy.wrap($button).click()
    })
  

  })

})