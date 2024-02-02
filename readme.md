# Teste Movimentações

Pagina de testes padrão

## Pré-requisitos

Para rodar esse projeto, faz-se necessário instalar o [Node.js](https://nodejs.org/en/download/) (que já inclui o NPM) e [GIT](https://git-scm.com/downloads).



## Instalação

Instale as dependências de Node.js do projeto com o comando:
```
npm install
```

Aguarde até finalizar.

## Gerar dados para o teste

Antes de se iniciar o teste, deve se gerar os arquivos para os casos de testes. Pode ser feito de forma manual, ao se rodar o comando:

```
npm run generate.js
```

Ele irá gerar um JSON de dados dentro da pasta [fixture](./cypress/fixtures/), que será utilizado no teste para a inserção dos dados e a verificação dos mesmos.


## Execuções via interface gráfica

Para o primeiro caso, a aplicação gráfica do Cypress pode ser iniciada executando um dos comando abaixo no terminal:

```
npx cypress open
```
Atalho criado:

```
npm run cy:open
```

Em seguida, uma janela será aberta para que o usuário possa selecionar o navegador desejado para os testes (caso sejam testes de [GUI](https://pt.wikipedia.org/wiki/Interface_gr%C3%A1fica_do_utilizador)). 

Os resultados da execução com interface gráfica são apresentados em tempo real na aplicação do Cypress.

## Execuções sem interface gráfica (headless)

Caso deseje executar os testes sem interface gráfica, somente via linha de comando, digite um dos comandos abaixo no terminal:

```
npx cypress run --env allure=true
```
Atalho criado:

```
npm run cy:headless
```

Ao fim da execução sem interface gráfica serão apresentados os resultados no terminal.

## Report com Allure

Após finalizado a execução do cenário, execute o comando abaixo para geração do report:

```
npm run allure:report
```
Em seguida, para abrir report no navegador, execute o comando:

```
npm run allure:open
```
Para conservar o historico das ultimas execuções locais, substitua o comando acima pelo comando:

```
npm run allure:serve
```

## Execução com report

Caso deseje executar o teste e gravar os reports simultaneamente executo o commando:
```
npm run allure:test
``` 

## Execução em subprocesso com report

Foi feito tambem a adaptação do teste em subprocesso com a geração do arquivo e geração do report com o Allure.
Basta executar o seguinte comando:

```
npm run cy:teste
```

Ele fará a geração do JSON, iciará o cypress em subprocesso e após a finalização, irá gerar o report do allure para documentações.

## Evidencias

### Video
As evidencias em video estão na pasta cypress/videos

### Configuração Allure
Para que seja possivel ter mais de um status na Allure alem dos status "Failed" e "Passed", deve ser criado um JSON para definir os outros status. Segue o modelo de status:

<details><summary>categories.json</summary>

```
[
    {
        "name": "Ignored tests",
        "matchedStatuses": ["skipped"]
    },
    {
        "name": "Infrastructure problems",
        "matchedStatuses": ["broken", "failed"],
        "messageRegex": ".*bye-bye.*"
    },
    {
        "name": "Outdated tests",
        "matchedStatuses": ["broken"],
        "traceRegex": ".*FileNotFoundException.*"
    },
    {
        "name": "Product defects",
        "matchedStatuses": ["failed"]
    },
    {
        "name": "Test defects",
        "matchedStatuses": ["broken"]
    }
]
```

</details>

## Estrutura do codigo

O teste depende de um codigo independente do cypress, o [generate.js](generate.js).
### Generate.js

Gerador desenvolvido utilizando dependencias como faker para gerar os dados aleatorios do teste

### Arquivo Config

Para tornar acessivel a url base foi definida no arquivo [config](Node/cypress.config.js).
```
baseUrl: 'url-a-ser-usada'
```

### Page Object Model (POM)

Foi feito uma estrutura no codigo que possibilita a gestão das interações dos testes em poucos arquivos, estes arquivos estão definidos no [commands.js](Node/cypress/support/commands.js).

## Tecnologias utilizadas

Abaixo seguem as tecnologias utilizadas:

* [GIT](https://git-scm.com/) - Aplicação utilizada para controle de versionamento de código.
* [Node.js](https://nodejs.org/en/) - Ambiente de execução para JavaScript externamente de um navegador web.
* [NPM](https://www.npmjs.com/) - Gerenciador de pacotes/dependências.
* [cypress](https://www.cypress.io/) - Framework utilizado para automação de testes de GUI e API.
* [moment](https://momentjs.com/) - Framework que permite gerar e manipular datas com facilidade no JS.
* [Faker](https://www.npmjs.com/package/@faker-js/faker) - Biblioteca utilizada para geração dos dados falsos utilizados no teste.