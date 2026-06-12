# 🎭 Linkaí - Automação de Testes com Playwright

Este repositório contém a suíte de testes de ponta a ponta (E2E) para o projeto **Linkaí**, um gerenciador de links pessoais que integra uma API REST (Node.js), banco de dados NoSQL (MongoDB) e um Frontend Web (React/Vite).<br>

O objetivo deste módulo é validar os fluxos críticos da aplicação utilizando as melhores práticas de automação com **Playwright** e **TypeScript**. <br>

Também foi utilizado o fakerjs no import para gerar as informações de massa de dados para o cadastro com sucesso.

---

## 🎯 Objetivos de Aprendizagem

Durante esta jornada estou praticando e consolidando conhecimentos em:

- Automação E2E com Playwright
- TypeScript aplicado à automação de testes
- Estruturação de projetos de testes
- Page Object Model (POM)
- Componentização de elementos
- Gerenciamento de massa de testes
- Geração dinâmica de dados com Faker.js
- Boas práticas de automação

---

## 🛠️ Tecnologias e Ferramentas

- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Framework de Testes:** [Playwright](https://playwright.dev/)
- **Runtime:** [Node.js](https://nodejs.org/)
- **Infraestrutura:** [Docker](https://www.docker.com/) (para o Banco de Dados)
- **CI/CD:** GitHub Actions
- **Faker.js:** [Fakerjs](https://fakerjs.dev/) (Gere grandes quantidades de dados falsos (mas realistas) para testes)

---

## Progresso da Jornada

### ✅ Iniciando com Playwright

- [x] Primeiros passos com Playwright
- [x] Estrutura inicial do projeto
- [x] Testes Sincronizados com o código
- [x] Test Generator
- [x] Cobertura de Testes

### ✅ Estrutura, Reuso e Massa de Testes

- [x] Page Objects
- [x] Components
- [x] Interfaces
- [x] Externalização da Massa de Teste
- [x] Deu ruim na massa de Testes
- [x] Faker.js

### ✅ Boas Práticas e Integrações

- [x] Melhorando a legibilidade
- [x] Como Validar os Atributos dos Elementos?
- [x] Massa de Testes com Novas Propriedades
- [x] Boas Práticas na Separação de Interfaces
- [x] O que nuca fazer com Page Objects
- [x] Conectando Testes ao Banco de Dados
- [x] Testes Independentes
- [ ] Boas práticas & Custom Actions

---

## 📁 Estrutura do Projeto

```text
playwright-project/
├── e2e/                    ← Scripts de testes automatizados (.spec.ts)
│   ├── home.spec.ts        
│   ├── login.spec.ts
│   └── signup.spec.ts        
├── playwright-report/      ← Relatórios HTML gerados após a execução
├── support/   
│   ├── fixtures/           ← onde se encontra as informações das massas de teste
│   │   └── Users.ts        ← massas de teste de Login
│   ├── pages/              ← onde se encontra as informações dos elementos
│   │   ├── components      ← onde se encontra as informações dos elementos que são gerais para o portal
│   │   |   ├── Toast.ts
│   │   ├── DashPage.ts
│   │   ├── LoginPage.ts
│   │   └── SignupPage.ts    
│   └── database.ts/        ← onde se encontra as informações do banco de dados para remover o usuário de teste
├── test-results/           ← Artefatos de falhas (screenshots, vídeos, traces)
├── playwright.config.ts    ← Configurações globais do Playwright
├── package.json            ←# Gerenciamento de dependências e scripts
└── README.md               
```

---

## 🚀 Pré-requisitos para Execução

Antes de iniciar os testes, é necessário que o ambiente completo do **Linkaí** esteja rodando localmente.

### 1. Banco de Dados (Docker)
Na raiz da pasta `linkai/apps`, inicie os serviços de banco de dados:
```bash
docker-compose up -d
```

### 2. API (Backend)
Em um novo terminal, acesse `linkai/apps/api`:
```bash
npm install   # Caso seja a primeira execução
npm run dev
```

### 3. Web App (Frontend)
Em outro terminal, acesse `linkai/apps/web`:
```bash
npm install   # Caso seja a primeira execução
npm run dev
```
> A aplicação deverá estar disponível em: `http://localhost:3000`

---

## 🧪 Executando os Testes

Com a aplicação rodando, acesse a pasta `linkai/playwright-project` e utilize os comandos abaixo:

### Instalação de dependências do Playwright
```bash
npm install
npx playwright install --with-deps
```

### Comandos Principais
| Comando | Descrição |
| :--- | :--- |
| `npx playwright test` | Executa todos os testes em modo headless (sem interface) |
| `npx playwright test --headed` | Executa os testes exibindo o navegador |
| `npx playwright test --ui` | Abre a interface interativa do Playwright (recomendado) |
| `npx playwright test --debug` | Abre o Inspetor do Playwright para depuração passo a passo |
| `npx playwright show-report` | Abre o último relatório de testes gerado |
| `npx playwright codegen http://localhost:3000/login` | abre o navegador e o generator para gerar o teste |

---

## 📚 Material de Apoio

As anotações, resumos e conteúdos teóricos desta jornada estão centralizados no repositório:

👉 [jornada_TechQa](https://github.com/CassiaCaris/jornada_TechQa)

Este repositório contém apenas a implementação prática dos conceitos estudados durante a jornada.

---

## 📈 Evolução do Projeto

Este projeto está sendo construído gradativamente durante a Jornada TechQA e será utilizado como laboratório para aplicação prática dos conceitos aprendidos.

A cada módulo concluído, novas funcionalidades, padrões e melhorias serão incorporadas ao framework.

---

## 📚 Referências Úteis

- [Documentação Oficial Playwright](https://playwright.dev/docs/intro)
- [Melhores Práticas em Seletores](https://playwright.dev/docs/locators)
- [Guia de Instalação Docker (WSL2)](https://dev.to/papitofernando/instalando-o-docker-no-windows-10-home-ou-professional-com-wsl-2-26m3)
- [Documentação Oficial do Fakerjs](https://fakerjs.dev/)
- [Documentação Oficial do Node para MongoDB](https://www.npmjs.com/package/mongodb)
- [Documentação MongoDB](www.mongodb.com)