describe('Alertas de Segurança', () => {
  context('Quando o usuário acessa uma página restrita', () => {
      it('deve exibir um alerta de segurança', () => {
          cy.visit('https://the-internet.herokuapp.com/secure');
          cy.on('window:alert', (str) => {
              expect(str).to.equal('This is a security alert');
          });
      });
  });

  context('Quando o usuário interage com um alerta de confirmação', () => {
      it('deve lidar corretamente com o alerta de confirmação JavaScript', () => {
          cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
          cy.get('button[onclick="jsConfirm()"]').click();
          cy.on('window:confirm', () => true);
          cy.contains('You clicked: Ok');
      });
  });
});
