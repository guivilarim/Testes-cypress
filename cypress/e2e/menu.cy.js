describe('Menu Flutuante', () => {
    context('Quando o usuário rola a página', () => {
        it('deve exibir o menu flutuante', () => {
            cy.visit('https://the-internet.herokuapp.com/floating_menu');
            cy.scrollTo(0, 1000);
            cy.get('#menu').should('be.visible');
            cy.scrollTo(0, 0);
        });
    });

    context('Quando o usuário clica com o botão direito', () => {
        it('deve exibir um alerta', () => {
            cy.visit('https://the-internet.herokuapp.com/context_menu');
            cy.get('#hot-spot').rightclick();
            cy.on('window:alert', (str) => {
                expect(str).to.equal('You selected a context menu');
            });
        });
    });
});
