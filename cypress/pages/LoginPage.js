class LoginPage {

    //Loga com o usuário já definido
    logarComoAluno() {
        cy.visit('https://betaconcursos.metodovde.com.br/entrar')
        cy.get('button').as('btn').click()
        cy.get('input[type="email"]').clear().type('giselenunes9@hotmail.com')
        cy.contains('button', 'Próximo').click()
        cy.get('input[type="password"]').type('VDE@Concursos')
        cy.contains('button', 'Entrar').click()
    }
}

export default new LoginPage()