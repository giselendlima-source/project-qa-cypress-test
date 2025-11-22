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

## Boas práticas utilizadas

Esperas automáticas do Cypress (sem wait fixo desnecessário)

Seletores estáveis baseados em atributos confiáveis

Modularização com Page Objects onde faz sentido

Testes independentes entre si

.gitignore configurado para ignorar vídeos, screenshots e node_modules

## Contato

Caso haja necessidade de evoluir a documentação ou incluir novos testes, fique à vontade para pedir!
