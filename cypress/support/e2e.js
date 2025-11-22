// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'


Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignora especificamente o erro React #418 / Hotjar
  if (
    err.message.includes('Minified React error #418') ||
    err.stack.includes('hotjar')
  ) {
    // returning false impede que o Cypress falhe o teste
    return false
  }

  // Para outros erros, deixa falhar normalmente
})
