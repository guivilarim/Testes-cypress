describe('Autenticação Básica', () => {
  
  beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/login');
  });

  context('Quando o usuário tenta fazer login', () => {
      it('deve logar com sucesso com credenciais válidas', () => {
          cy.get('#username').type('tomsmith');
          cy.get('#password').type('SuperSecretPassword!');
          cy.get('.fa').click();
          cy.contains('You logged into a secure area!').should('be.visible');
      });

      it('deve mostrar um erro com credenciais inválidas', () => {
          cy.get('#username').type('invalidUser');
          cy.get('#password').type('invalidPassword');
          cy.get('.fa').click();
          cy.contains('Your username is invalid!').should('be.visible');
      });
  });

  context('Quando o usuário usa Autenticação Básica', () => {
      it('deve logar com sucesso', () => {
          cy.visit('https://the-internet.herokuapp.com/basic_auth', {
              auth: {
                  username: 'admin',
                  password: 'admin'
              }
          });
          cy.contains('Congratulations! You must have the proper credentials.').should('be.visible');
      });
  });

  context('Quando o usuário faz login e logout', () => {
      it('deve logar e deslogar com sucesso', () => {
          cy.get('#username').type('tomsmith');
          cy.get('#password').type('SuperSecretPassword!');
          cy.get('button[type="submit"]').click();
          cy.contains('You logged into a secure area!').should('be.visible');
          
          cy.get('a[href="/logout"]').click();
          cy.contains('You logged out of the secure area!').should('be.visible');
      });
  });

  context('Autenticação Digest', () => {
    it('deve acessar uma página protegida com credenciais válidas', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth: {
                username: 'admin',
                password: 'admin'
            }
        });
        cy.contains('Congratulations! You must have the proper credentials.').should('be.visible');
    });
  });
});
