describe('Interações com Elementos', () => {

  context('Quando o usuário interage com o modal', () => {
      it('deve abrir e fechar o modal', () => {
          cy.visit('https://the-internet.herokuapp.com/entry_ad');
          cy.get('.modal').should('be.visible');
          cy.get('.modal-footer').contains('Close').click();
          cy.get('.modal').should('not.be.visible');
      });
  });

  context('Quando o usuário seleciona uma opção no dropdown', () => {
      it('deve selecionar uma opção do dropdown', () => {
          cy.visit('https://the-internet.herokuapp.com/dropdown');
          cy.get('#dropdown').select('Option 1');
          cy.get('#dropdown').should('have.value', '1');
      });
  });

  context('Quando o usuário interage com checkboxes', () => {
      it('deve marcar e desmarcar checkboxes', () => {
          cy.visit('https://the-internet.herokuapp.com/checkboxes');
          cy.get('input[type="checkbox"]').first().check().should('be.checked');
          cy.get('input[type="checkbox"]').last().uncheck().should('not.be.checked');
      });
  });

  context('Quando o usuário arrasta e solta um elemento', () => {
      it('deve arrastar e soltar o elemento', () => {
          cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
          const dataTransfer = new DataTransfer();
          cy.get('#column-a').trigger('dragstart', { dataTransfer });
          cy.get('#column-b').trigger('drop', { dataTransfer });
          cy.get('#column-a').should('contain', 'B');
          cy.get('#column-b').should('contain', 'A');
      });
  });

  context('Quando o usuário verifica a mensagem de notificação', () => {
      it('deve exibir a mensagem de notificação correta', () => {
          cy.visit('https://the-internet.herokuapp.com/notification_message_rendered');
          cy.get('a').contains('Click here').click();
          cy.contains('Action successful');
      });
  });

  context('Quando o usuário interage com campos de número', () => {
      it('deve permitir a entrada de números', () => {
          cy.visit('https://the-internet.herokuapp.com/inputs');
          cy.get('input[type="number"]').type('123').should('have.value', '123');
          cy.get('input[type="number"]').clear().should('have.value', '');
          cy.get('input[type="number"]').type('-456').should('have.value', '-456');
      });
  });

  context('Adicionar e Remover Elementos', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/add_remove_elements/');
    });

    it('deve adicionar um novo elemento à lista', () => {
        cy.get('button[onclick="addElement()"]').click();
        cy.get('div#elements').children().should('have.length', 1);
    });

    it('deve remover um elemento da lista', () => {
        cy.get('button[onclick="addElement()"]').click(); 
        cy.get('button.added-manually').click(); 
        cy.get('div#elements').children().should('have.length', 0);
    });
  });

});
