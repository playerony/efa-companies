describe('portfolio', () => {
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

  it('should allow the user to add and remove portfolio items', () => {
    cy.get('input').should('be.visible').type('BA');

    cy.wait(['@get-companies-ba']);
    cy.get('.anticon-plus').first().click();

    cy.get('input').should('be.visible').clear().type('tesco');

    cy.wait(['@get-companies-tesco']);
    cy.get('.anticon-plus').first().click();

    cy.get('.ant-table')
      .find('.ant-table-row')
      .should('have.length', 2)
      .contains('Remove')
      .first()
      .click();

    cy.get('.ant-table')
      .find('.ant-table-row')
      .should('have.length', 1)
      .contains('Remove')
      .first()
      .click();

    cy.contains('No Data');
  });

  it('should redirect to details page when user click on portfolio element', () => {
    cy.get('input').should('be.visible').type('BA');

    cy.wait(['@get-companies-ba']);
    cy.get('.anticon-plus').first().click();

    cy.get('.ant-table').find('.ant-table-row').click();

    cy.url().should('eq', 'http://localhost:3000/BA');
  });
});
