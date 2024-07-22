# Desafio de Programação Elo7

Como parte do processo seletivo do Elo7, gostaríamos que você fizesse uma pequena tarefa. Conforme seu resultado convidamos você para uma sessão de pair-programming. A ideia é simples: desenvolver uma landing page. Forneceremos algumas informações via API e deixamos em exposição nossas vagas em aberto.

O objetivo desse desafio é avaliar como você desenvolve código em termos de estilo, eficiência e qualidade.

Crie um repositório no seu Github com a resolução da tarefa descrita abaixo e veremos a sua progressão por meio dos commits.

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
