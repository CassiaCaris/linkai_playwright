# 🎭 Linkaí - Automação de Testes com Playwright

Este repositório contém a suíte de testes de ponta a ponta (E2E) para o projeto **Linkaí**, um gerenciador de links pessoais que integra uma API REST (Node.js), banco de dados NoSQL (MongoDB) e um Frontend Web (React/Vite).<br>

O objetivo deste módulo é validar os fluxos críticos da aplicação utilizando as melhores práticas de automação com **Playwright** e **TypeScript**. <br>

Foram utilizadas as bibliotecas **Faker.js** para geração dinâmica de dados de teste e **bcryptjs** para criptografia de senhas persistidas no banco de dados. <br>

Manipulação de massa de dados diretamente no **MongoDB** através de operações de inserção e remoção de registros.<br>

A estrutura do **Page Objects** foi evoluída de um modelo tradicional baseado em *páginas* para uma abordagem orientada a *funcionalidades (Feature-Based Actions)*, promovendo maior reutilização e manutenção do código.

---

## 🎯 Objetivos de Aprendizagem

Durante esta jornada estou praticando e consolidando conhecimentos em:

- Automação E2E com Playwright
- TypeScript aplicado à automação de testes
- Estruturação de projetos de testes
- Page Object por funcionalidade
- Componentização de elementos
- Gerenciamento de massa de testes
- Geração dinâmica de dados com **Faker.js**
- Delete e Insert de massas direto no Banco de Dados usando o **MongoDB**
- Boas práticas de automação
- utilização do **bcrypt.js**

---

## 📐  Arquitetura e Padrões Aplicados

O projeto utiliza uma abordagem híbrida baseada em:

- Feature-Based Actions
- Componentização de elementos reutilizáveis
- Externalização de massa de testes
- Data Driven Testing
- Tipagem forte com TypeScript
- Integração com MongoDB para preparação de cenários
- Geração dinâmica de dados com Faker.js

Essa estrutura reduz o acoplamento dos testes à interface e melhora a manutenção da suíte de automação.

---

## 🛠️ Tecnologias e Ferramentas

- [TypeScript](https://www.typescriptlang.org/)
- [Playwright](https://playwright.dev/)
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) (para o Banco de Dados)
- **CI/CD:** GitHub Actions
- [Fakerjs](https://fakerjs.dev/) (Gere grandes quantidades de dados falsos (mas realistas) para testes)
- [MongoDB](https://www.mongodb.com) (delete e insert de massa de dados) 
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)

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
- [x] O que nunca fazer com Page Objects
- [x] Conectando Testes ao Banco de Dados
- [x] Testes Independentes
- [x] Boas práticas & Custom Actions

### ✅ Testes finais, recursos extras, configurações e encerramento

- [x] Cadastros com Arrays e Loops
- [ ] Testando o Cadastro de Redes Sociais
- [ ] Consumindo a API
- [ ] Construindo a Camada de Serviços
- [ ] Nova Versão, Nova Regressão
- [ ] Cada Escolha é uma Renúncia
- [ ] Configurando URL Base
- [ ] Regressão pela CLI e Screenshots
- [ ] Evidencias em Video
- [ ] Encerramento

---

## 📁 Estrutura do Projeto

```text
playwright-project/
├── e2e/                    ← Scripts de testes automatizados (.spec.ts)
│   ├── home.spec.ts       
│   ├── link.spec.ts 
│   ├── login.spec.ts
│   └── signup.spec.ts        
├── playwright-report/      ← Relatórios HTML gerados após a execução
├── support/   
│   ├── actions/            ← onde se encontra as informações das funcionalidades
│   │   ├── components      ← onde se encontra as informações dos elementos que são gerais para o portal
│   │   |   └── Toast.ts
│   │   ├── auth.ts
│   │   └── link.ts
│   ├── fixtures/           ← onde se encontra as informações das massas de teste
│   │   └── User.ts         ← massas de teste de Login  
│   └── database.ts/        ← onde se encontra as informações do banco de dados para remover o usuário de teste
├── test-results/           ← Artefatos de falhas (screenshots, vídeos, traces)
├── package-lock.json       ← Gerenciamento de dependências e scripts
├── package.json            ← Gerenciamento de dependências e scripts
├── playwright.config.ts    ← Configurações globais do Playwright
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
- [Documentação Oficial do Node para o bcryptjs](https://www.npmjs.com/package/bcryptjs)