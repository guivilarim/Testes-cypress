describe('Autenticação de Formulário', () => {
  context('Quando o usuário preenche e envia o formulário', () => {
      it('deve logar com sucesso', () => {
          cy.visit('https://the-internet.herokuapp.com/login');
          cy.get('#username').type('tomsmith');
          cy.get('#password').type('SuperSecretPassword!');
          cy.get('button[type="submit"]').click();
          cy.url().should('include', '/secure');
          cy.contains('You logged into a secure area!').should('be.visible');
      });
  });

  context('Quando o usuário faz upload de um arquivo', () => {
      it('deve carregar um arquivo com sucesso', () => {
          cy.visit('https://the-internet.herokuapp.com/upload');
          const fileName = 'teste-upload.png'; 
          cy.get('input[type="file"]').attachFile(fileName);
          cy.get('#file-submit').click();
          cy.contains('File Uploaded!').should('exist');
      });
  });
});
