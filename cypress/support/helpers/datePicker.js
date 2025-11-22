export const avancarMeses = (quantidade) => {
  for (let i = 0; i < quantidade; i++) {
    cy.get('button[aria-label="Próximo mês"]').click()
  }
}