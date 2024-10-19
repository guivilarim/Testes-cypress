describe('Tabela de Dados Ordenáveis', () => {
  context('Quando o usuário ordena a tabela', () => {
      it('deve ordenar a tabela pelo sobrenome', () => {
          cy.visit('https://the-internet.herokuapp.com/tables');
          cy.get('th').contains('Last Name').click();
          cy.get('table#table1 tbody tr').first().contains('Bach').should('exist');
      });
  });

  context('Quando o usuário verifica os dados da tabela', () => {
      it('deve exibir os dados corretos da tabela', () => {
          cy.visit('https://the-internet.herokuapp.com/tables');

          const expectedData = [
              ['Bach', 'Frank', 'fbach@yahoo.com', '$51.00', 'http://www.frank.com'],
              ['Conway', 'Tim', 'tconway@earthlink.net', '$50.00', 'http://www.timconway.com'],
              ['Doe', 'Jason', 'jdoe@hotmail.com', '$100.00', 'http://www.jdoe.com'],
              ['Smith', 'John', 'jsmith@gmail.com', '$50.00', 'http://www.jsmith.com']
          ];

          expectedData.forEach(row => {
              cy.get('table#table1').contains(row[0]).parents('tr').within(() => {
                  cy.get('td').eq(0).should('have.text', row[0]);
                  cy.get('td').eq(1).should('have.text', row[1]);
                  cy.get('td').eq(2).should('have.text', row[2]);
                  cy.get('td').eq(3).should('have.text', row[3]);
              });
          });
      });
  });
});
