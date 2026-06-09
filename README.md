# Módulo 05 - Iniciando com Playwright

## Objetivo
Este projeto tem como foco o gerenciamento de links pessoais, demonstrando a integração entre uma API REST (Node.js/Express), um Banco de Dados NoSQL (MongoDB) e um WebApp (Frontend). <br>
E o seu desenvolvimento será realizado com o **Playwright**.

## Conteúdo Abordado
* Conteúdo 1 - Primeiros passos com Playwright
* Conteúdo 2 - Git e Github
* Conteúdo 3 - Testes Sincronizados com o 
* Conteúdo 4 - Test Generator
* Conteúdo 5 - Cobertura de Testes

## Estrutura do Repositório
```
linkai/                
├─ apps
|  ├─ api/                ← Backend (Node.js + Express)
|  |  ├─ controllers/     ← Lógica das rotas
|  |  ├─ models/          ← Modelos de dados (Mongoose)
|  |  ├─ routes/          ← Endpoints da API
|  |  └─ .env             ← Configurações de ambiente
|  ├─ web/                ← Frontend (WebApp)
|  |  └─ dist/            ← Build da aplicação
|  └─ docker-compose.yaml ← Orquestração do Banco de Dados
├─ doc/                   ← Documentação e imagens
├─ playwright-project/     ← desenvolvimento do código em playwright
|  ├─ e2e/                 ← onde se encontram os testes
|  ├─ node_modules/        ← Pasta que contem as dependencias (Pasta Local)
|  ├─ playwright-report/   ← 
|  ├─ test-results/        ← onde tras as informações dos resultados
|  ├─ gitignore            ← onde ficam as informações doq eu não irá subir para o repositorio
|  ├─ package-lock.json    ← onde ficam as informações do que será instalado no repositorio
|  ├─ package.json         ← onde se encontra as informações dos projeto
|  ├─ playwright.cofing.ts ← onde tras as informações dos resultados
|  └─ README.md           
└─ README.md
```

## Anatoção
### Como Executar

#### 1. Startando a API (Backend)
1. Acesse a pasta `linkai/apps/api`.
2. Execute: `npm run dev`.
![Informações do Banco Linkai](doc/InfBDLinkai.png)

#### 2. Startando a Web (Frontend)
1. Acesse a pasta `linkai/apps/web`.
2. Execute: `npm run dev`.
3. Acesse: `http://localhost:3000`.
![Aplicação web](doc/aplicacaoWeb.png)

#### 3. Executando os teste
1. Acesse a pasta `linkai/playwright-project`.
2. Execute: `npx playwright test`.

### Comandos Principais do Docker
* `npx playwright test`: Executa todos os testes sem abrir o navegador
* `npx playwright test --headed`: Executa todos os testes abrindo o navegador
* `npx playwright test --debug`: Executa os testes em modo debug

## Referências
* [Guia de Instalação do Docker (WSL2)](https://dev.to/papitofernando/instalando-o-docker-no-windows-10-home-ou-professional-com-wsl-2-26m3)
* [Site Oficial do Docker](https://www.docker.com/)
* [Documentação Node.js](https://nodejs.org/)
* [Site Oficial do Playwright](https://playwright.dev/)
