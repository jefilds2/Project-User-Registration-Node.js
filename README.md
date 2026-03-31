````markdown
# Cadastro de Usuários Full Stack

Aplicação full stack para **cadastro, listagem, edição e remoção de usuários**, com **frontend em React + Vite** e **backend em Node.js + Express + Prisma**.

## Sobre o projeto

Este projeto foi desenvolvido para praticar a integração entre **frontend** e **backend**, simulando um sistema real de gerenciamento de usuários.

A aplicação permite:

- cadastrar usuários
- listar usuários cadastrados
- editar informações de usuários
- remover usuários da base de dados

No frontend, a interface foi construída com **React** e **Vite**, com foco em organização de componentes, navegação e consumo de API.  
No backend, foi criada uma API com **Node.js**, **Express** e **Prisma**, responsável por processar as requisições e persistir os dados.

## Funcionalidades

- Cadastro de usuários
- Listagem de usuários
- Atualização de dados de usuários
- Exclusão de usuários
- Integração entre frontend e backend
- Estrutura separada entre aplicação cliente e servidor
- Organização por componentes, páginas e serviços

## Tecnologias utilizadas

### Frontend
- React
- Vite
- JavaScript
- Axios
- React Router DOM
- Styled Components
- ESLint

### Backend
- Node.js
- Express
- Prisma
- CORS
- MongoDB Driver
- dotenv

## Estrutura real do projeto

```bash
Project-User-Registration-Node.js/
├── backend-server-node/
│   ├── prisma/
│   ├── package.json
│   ├── package-lock.json
│   ├── prisma.config.ts
│   └── server.js
├── public/
├── src/
│   ├── components/
│   ├── img/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── main.jsx
│   └── routes.jsx
├── index.html
├── package.json
├── package-lock.json
├── yarn.lock
├── vite.config.js
├── eslint.config.js
└── README.md
````

## Como funciona

O projeto está dividido em duas partes:

### 1. Frontend

Responsável pela interface do usuário, envio dos dados para a API e exibição das informações cadastradas.

### 2. Backend

Responsável por receber as requisições HTTP, processar os dados e realizar operações de:

* **GET** para listar usuários
* **POST** para cadastrar usuários
* **PUT** para atualizar usuários
* **DELETE** para remover usuários

## Rotas da API

Base URL local:

```bash
http://localhost:3000
```

### Listar usuários

```http
GET /usuarios
```

### Criar usuário

```http
POST /usuarios
```

### Atualizar usuário

```http
PUT /usuarios/:id
```

### Deletar usuário

```http
DELETE /usuarios/:id
```

## Pré-requisitos

Antes de executar o projeto, você precisa ter instalado:

* [Node.js](https://nodejs.org/)
* npm
* banco/configuração usada pelo Prisma no backend

## Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/jefilds2/Project-User-Registration-Node.js.git
```

### 2. Acesse a pasta do projeto

```bash
cd Project-User-Registration-Node.js
```

## Executando o backend

### 1. Entre na pasta do servidor

```bash
cd backend-server-node
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` dentro da pasta `backend-server-node` e defina as variáveis necessárias para conexão com o banco de dados.

Exemplo:

```env
DATABASE_URL="sua_url_aqui"
```

> Ajuste conforme a configuração real do seu Prisma.

### 4. Execute o servidor

```bash
npm run dev
```

O backend será iniciado em:

```bash
http://localhost:3000
```

## Executando o frontend

Abra outro terminal na raiz do projeto:

```bash
cd Project-User-Registration-Node.js
```

### 1. Instale as dependências

```bash
npm install
```

### 2. Execute o frontend

```bash
npm run dev
```

O frontend será iniciado normalmente em:

```bash
http://localhost:5173
```

## Integração com a API

O frontend consome a API para realizar as operações de cadastro e gerenciamento de usuários.

Caso a URL do backend esteja configurada em um arquivo de serviço, ajuste para:

```js
http://localhost:3000
```

## Aprendizados com este projeto

Com este projeto, foi possível praticar:

* criação de interface com React
* organização de páginas e componentes
* consumo de API com Axios
* criação de rotas no backend com Express
* operações CRUD
* integração entre frontend e backend
* uso do Prisma para acesso aos dados
* separação de responsabilidades entre cliente e servidor

## Autor

Desenvolvido por **Jefferson Miranda**.

* GitHub: [jefilds2](https://github.com/jefilds2)
* LinkedIn: [Jefferson Miranda](https://www.linkedin.com/in/jefferson-miranda-dfs)

## Repositório

[Project-User-Registration-Node.js](https://github.com/jefilds2/Project-User-Registration-Node.js)



## Preview
![1770762147209](https://github.com/user-attachments/assets/2d825abf-3483-45df-afd0-65c2a34af420)
![1770762147036](https://github.com/user-attachments/assets/569e4cfd-fbfb-47e2-9666-3f1ed9bcceba)



