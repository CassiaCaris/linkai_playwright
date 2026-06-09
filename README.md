# 🎭 Linkaí - Automação de Testes com Playwright

Este repositório contém a suíte de testes de ponta a ponta (E2E) para o projeto **Linkaí**, um gerenciador de links pessoais que integra uma API REST (Node.js), banco de dados NoSQL (MongoDB) e um Frontend Web (React/Vite).<br>

O objetivo deste módulo é validar os fluxos críticos da aplicação utilizando as melhores práticas de automação com **Playwright** e **TypeScript**.

---

## 🛠️ Tecnologias e Ferramentas

- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Framework de Testes:** [Playwright](https://playwright.dev/)
- **Runtime:** [Node.js](https://nodejs.org/)
- **Infraestrutura:** [Docker](https://www.docker.com/) (para o Banco de Dados)
- **CI/CD:** GitHub Actions

---

## 📁 Estrutura do Projeto

```text
playwright-project/
├── e2e/                    # Scripts de testes automatizados (.spec.ts)
│   ├── home.spec.ts        # Testes da página inicial
│   └── login.spec.ts       # Testes do fluxo de autenticação
├── playwright-report/      # Relatórios HTML gerados após a execução
├── test-results/           # Artefatos de falhas (screenshots, vídeos, traces)
├── playwright.config.ts    # Configurações globais do Playwright
├── package.json            # Gerenciamento de dependências e scripts
└── README.md               # Documentação do projeto
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

---

## 📚 Referências Úteis

- [Documentação Oficial Playwright](https://playwright.dev/docs/intro)
- [Melhores Práticas em Seletores](https://playwright.dev/docs/locators)
- [Guia de Instalação Docker (WSL2)](https://dev.to/papitofernando/instalando-o-docker-no-windows-10-home-ou-professional-com-wsl-2-26m3)
