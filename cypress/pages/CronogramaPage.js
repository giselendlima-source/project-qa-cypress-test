import { avancarMeses } from '../support/helpers/datePicker'

class CronogramaPage {

    //Entrar na Tela - Cronograma
    entrarTelaCronograma() {
        cy.contains('a,button,span', 'Cronograma').first().click()
    }

    //Checa se está na Tela Cronograma e seleciona o tipo de cronograma
    selecionarCronogramaPersonalizado() {
        cy.contains('span', 'Criar Cronograma', { timeout: 8000 }).should('be.visible')
        cy.contains('div', 'Personalizado').click()
        cy.contains('p', 'Defina sua rota').should('be.visible')
    }

    //Seleciona o tipo de cargo
    selecionarTipoCargo(cargo) {
        cy.contains('p', 'Qual cargo você almeja?').should('be.visible')
        cy.contains('[role="combobox"]', 'Selecione').click()
        cy.contains(cargo).click()
    }

    //Seleciona a data de conclusão
    selecionarDataConclusao() {
        cy.contains('button, span', 'Escolha uma data').scrollIntoView().click();
        cy.contains('button[aria-label="Dia 30"]', '30').click()
    }

    //Seleciona a data de conclusão após 6 meses
    selecionarDataConclusaoApos6m() {
        cy.contains('button, span', 'Escolha uma data').scrollIntoView().click();
        avancarMeses(6)
        cy.contains('button[aria-label="Dia 30"]', '30').click()
    }

    //Preenche os campos de horas na seção 3 com meia hora
    preencherHorasComMeiaHoraEmTodosOsDias() {
        const clicarVariasVezes = ($el) => {
            cy.wrap($el).click();
        };
        cy.get('div.flex.flex-col.gap-2').each(($dia) => {
            cy.wrap($dia)
                .find('button svg.lucide-plus')
                .parent()
                .then(clicarVariasVezes);
        });
    }

    //Preenche os campos de horas na seção 3 com 1 hora e meia
    preencherHorasComUmaHoraMeiaEmTodosOsDias() {
        const clicarVariasVezes = ($el) => {
            cy.wrap($el).click().click().click();
        };

        cy.get('div.flex.flex-col.gap-2').each(($dia) => {
            cy.wrap($dia)
                .find('button svg.lucide-plus')
                .parent()
                .then(clicarVariasVezes);
        });
    }

    //Clica em Gerar Cronograma
    clicarBotaoGerar() {
        cy.contains('button', 'Gerar Cronograma').click();
    }

    //Clica em Ajustar Cronograma
    clicarAjustarCronograma() {
        cy.contains('button', 'Ajustar Cronograma').click({ force: true })
    }

    //Clica em Continuar mesmo assim
    confirmarContinuarMesmoAssim() {
        cy.get('body').then($body => {
            if ($body.find('button:contains("Continuar Mesmo Assim")').length > 0) {
                cy.contains('button', 'Continuar Mesmo Assim').click({ force: true });
            }
        });
    }

    //Clica em criar um novo cronograma
    criarOutroCronograma() {
        cy.get('button svg path[d="M5 12h14"]').click({ force: true, multiple: true });

    }

    //Valida o campo após clicar em Ajustar cronograma
    validarCamposDefinaSuaRota() {
        cy.contains('[role="combobox"]', 'Promotor').should('exist')
    }
}


export default new CronogramaPage()