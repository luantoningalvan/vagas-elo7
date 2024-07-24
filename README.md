# Teste Elo7

Esse é o frontend do teste, ele foi construído com NextJS e utiliza CSS Modules para estilização.

É possível conferir uma versão desse projeto rodando através do link [teste-elo7.luangalvan.dev](https://teste-elo7.luangalvan.dev)

O BFF para esse projeto pode ser encontrado [aqui](https://github.com/luantoningalvan/vagas-elo7-bff).

## Como executar

- Clone o repositório em sua máquina
- Instale as dependências utilizando yarn com `yarn install`
- Para iniciar a versão de desenvolvimento rode o comando `yarn dev`
- Para fazer a build do projeto executa `yarn build`

## Testes

- Para esse projeto foram feitos testes unitários utilizando Jest e testes E2E utilizando Cypress
- Para executar os testes unitários execute `yarn test` ou `yarn test:cov` para obter também a cobertura de testes
- Para executar os testes E2E, primeiramente inicie o projeto (preferencialmente rode a build e inicie a versão de prod com `yarn start`). Após iniciar o projeto na porta 3000, execute os testes do Cypress com `yarn cy:run`

## Comentários sobre o projeto

- Em uma situação real provavelmente existiria uma página sobre detalhes da vaga para o candidato poder entender melhor e se candidatar, essa página poderia utilizar os [dados estruturados de pesquisa do google](https://developers.google.com/search/docs/appearance/structured-data/job-posting), descrevendo a vaga e assim aparecendo diretamente nos resultados de pesquisa de um jeito especial.
- Apesar do BFF ter sido feito em Nest, uma outra solução seria utilizar a funcionalidade de API do Next que possibilita criar funções serverless e disponibilizá-las através de um endpoint.
- Uma boa opção para estilização nesse caso seria utilizar o Tailwind, ele funciona bem nas situações onde se tem SSR, afinal de contas as classes são geradas em tempo de build, diferente de outras soluções CSS-IN-JS como styled-componentes ou stitches. A escolha por utilizar o CSS modules foi por o Next já suportar nativamente eles e para poder mostrar de forma mais prática meu conhecimento em CSS "puro".

## O que deverá ser feito:

- Tela principal contendo um resumo sobre o Elo7, como é trabalhar aqui, alguns depoimentos e nossa cultura, além de conter uma listagem das vagas em aberto. Essa tela deve ser baseada no [figma](https://www.figma.com/design/leGMKKgckQXVkF9E1RrTOX/Case-Front-End?node-id=0-1&t=GuFVfugRYKbgV2ST-0).

## Orientações

- Os dados das vagas devem ser obtidos desta [API](https://img.elo7.com.br/mock-vagas.json).
- Infelizmente, os dados obtidos pelo mock acima não foram tratados e, por isso, devem ser seguidas as seguintes premissas para exibição das vagas ao candidato:
  - Não mostrar as vagas inativas.
  - Para os dados sem localização, substituir pela palavra "Remoto".

## Premissas

|      Abrangência       | O que esperamos                                                                                                           |
| :--------------------: | ------------------------------------------------------------------------------------------------------------------------- |
|       Linguagem        | Javascript / ECMAScript                                                                                                   |
|         Estilo         | Css / Sass                                                                                                                |
|       Requisição       | [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) / [Axios](https://axios-http.com/docs/intro)              |
| _Framework (opcional)_ | [Svelte](https://svelte.dev/), [React](https://reactjs.org/), [Vue](https://vuejs.org/) ou [Angular](https://angular.io/) |

## Requisitos

Os requisitos dos níveis anteriores são obrigatórios para o nível para o qual você está se candidatando. Caso queira implementar opcionais, você pode considerar itens dos níveis seguintes.

### Junior

- Responsividade.
- Busca nas vagas.

### Pleno

- Testes unitários.
- Deve ser desenvolvido um BFF que fique entre o backend e o frontend, com a responsabilidade de traduzir os modelos de negócio para modelos de visualização.

### Senior

- Containerização.
- Observabilidade (logs).

### Opcionais

- Testes de aceitação.
- Paginação.

## Dicas

- Mais importante do que o seu conhecimento em framework A ou B, iremos avaliar o seu conhecimento com Javascript / ECMAScript.
- É muito importante para nós entendermos o seu nível de conhecimento em HTML semântico e CSS / SASS.
- Vamos levar em conta a organização e estrutura do código desenvolvido.
- Temos uma preocupação muito grande também com a performance da aplicação. Velocidade de carregamento da página é um quesito importante para nós.
- Esperamos que o layout fique o mais próximo possível do layout fornecido.
- Reforçamos que o uso de framework é opcional, ou seja, você pode implementar sua solução usando apenas a API padrão de Javascript do navegador. Caso você use um framework, avaliamos também seu domínio do framework.
- Caso deseje aprimorar o template proposto, fique à vontade. Se algo não estiver óbvio, assuma o que for mais claro para você e documente suas suposições.
- Se quiser uma opinião sobre o que pode ser feito fique à vontade para perguntar.
- Vamos avaliar todos os pontos técnicos da vaga nesse teste.
