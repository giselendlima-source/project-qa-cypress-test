# Projeto de Automação de Testes – Cypress

Este repositório contém a automação dos principais fluxos do sistema Betaconcursos, utilizando Cypress como framework de testes end-to-end.
Os testes abrangem funcionalidades críticas da aplicação, garantindo qualidade e reduzindo riscos durante o desenvolvimento.

## Tecnologias Utilizadas

Node.js
Cypress 13+
JavaScript
Page Objects (quando necessário)
Git

## Estrutura do Projeto
/cypress
  /e2e
    - cronograma/
    - questoes/
  /fixtures
  /support
.gitignore
package.json
README.md

## Como executar o projeto
1. Instalar dependências

npm install

2. Abrir o Cypress em modo interativo

npx cypress open

3. Executar no modo headless

npx cypress run
