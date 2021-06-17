describe('search-preview', () => {
  beforeEach(() => {
    cy.intercept('**/query?function=SYMBOL_SEARCH&keywords=BA*', {
      fixture: 'companies/ba.mock.json',
    }).as('get-companies-ba');

    cy.intercept('**/query?function=SYMBOL_SEARCH&keywords=tesco*', {
      fixture: 'companies/tesco.mock.json',
    }).as('get-companies-tesco');

    cy.viewport('macbook-16');
    cy.visit('/');
  });

  it('should search for companies by provided symbol or name', () => {
    cy.get('.ant-spin-container').contains('No Data');

    cy.get('input').should('be.visible').type('BA');

    cy.wait(['@get-companies-ba']);
    cy.get('.ant-list').find('li').should('have.length', 3);
    cy.get('input').should('be.visible').clear().type('tesco');

    cy.wait(['@get-companies-tesco']);
    cy.get('.ant-list').find('li').should('have.length', 2);

    cy.get('input').should('be.visible').clear();

    cy.get('.ant-spin-container').contains('No Data');
  });

  it('should allow the user to add a found company to their portfolio', () => {
    cy.get('input').should('be.visible').type('BA');

    cy.wait(['@get-companies-ba']);
    cy.get('.anticon-plus').first().click();
    cy.get('.anticon-plus').first().click();
    cy.get('.anticon-plus').first().click();

    cy.get('input').should('be.visible').clear().type('tesco');

    cy.wait(['@get-companies-tesco']);
    cy.get('.anticon-plus').first().click();

    cy.get('.ant-table').find('.ant-table-row').should('have.length', 2);
  });
});
