import LoginPage from '../pages/LoginPage'
import CronogramaPage from '../pages/CronogramaPage'

describe('US1 - Cronograma Personalizado', () => {
  beforeEach(() => {
    LoginPage.logarComoAluno()
    cy.url().should('include', '/inicio')
    CronogramaPage.entrarTelaCronograma()
  })
//CT-C001 - Criar cronograma personalizado (fluxo principal)
  it('CT-C001 - Criar cronograma personalizado (fluxo principal)', () => {
    CronogramaPage.selecionarCronogramaPersonalizado()
    CronogramaPage.selecionarTipoCargo('Delegado')
    CronogramaPage.selecionarDataConclusaoApos6m()
    CronogramaPage.preencherHorasComUmaHoraMeiaEmTodosOsDias()
    CronogramaPage.clicarBotaoGerar()
    CronogramaPage.confirmarContinuarMesmoAssim()
    cy.url().should('include', '/cronograma')
  })

//Caso de Teste CT-C003 - Ajustar cronograma
  it('CT-C003 - Ajustar cronograma', () => {
    CronogramaPage.criarOutroCronograma()
    CronogramaPage.selecionarCronogramaPersonalizado()
    CronogramaPage.selecionarTipoCargo('Promotor')
    CronogramaPage.selecionarDataConclusao()
    CronogramaPage.preencherHorasComMeiaHoraEmTodosOsDias()
    CronogramaPage.clicarBotaoGerar()
    CronogramaPage.clicarAjustarCronograma()
    CronogramaPage.validarCamposDefinaSuaRota()

  })
})
