describe('MD4 + Znajdz 5 elementow po', () => {
  beforeEach(() => {
    cy.visit('https://fabrykatestow.pl/')
  })

  it('ID', () => {
    cy.get('#gallery-1')
    cy.get('#header-menu-sidebar-bg')
    cy.get('#nv-primary-navigation-sidebar')
    cy.get('#cb-row--footer-desktop-top')
    cy.get('#neve-script-js-extra')

  })

  it('KLASA', () => {
    cy.get('.nav-menu-primary')
    cy.get('.screen-reader-text')
    cy.get('.nv-nav-search')
    cy.get('.nv-search-icon-wrap')
    cy.get('.elementor-background-overlay')

  })

  it('ATRYBUT', () => {
    cy.get('input[placeholder="Szukaj..."]')
    cy.get('button[value="Menu nawigacji"]')
    cy.get('a[href="https://fabrykatestow.pl/dokumenty"]')
    cy.get('a[data-elementor-lightbox-slideshow="72b26f4"]')
    cy.get('img[loading="lazy"]')

  })

  it('TEKST', () => {
    cy.get('span').contains('Sprawdź nasze kursy').click()
    cy.get('a').contains(' Regulamin').click() // niepotrzebna spacja na początku?
    cy.get('h2').contains('CHCESZ BYĆ NA BIEŻĄCO?').click()
    cy.get('h2').contains('ZAufali nam').click() // wielka litera 'A' jest celowo czy nie? 
    cy.get('p').contains('U nas absolutnie nic nie ryzykujesz.').click()

  })

})