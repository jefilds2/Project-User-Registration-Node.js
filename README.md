<div align="center">

# Cadastro de Usuários (Full Stack) | User Registration (Full Stack)

Aplicação para **cadastrar e listar usuários** com **Front-end em React + Vite** e **Servidor/API separado**.

> **Gerenciadores de pacotes usados neste projeto:**  
> - **Servidor/API:** `npm`  
> - **Front-end:** `yarn`

</div>

---

## 📌 Sumário | Table of Contents
- [🇧🇷 Português](#-português)
  - [Sobre](#sobre)
  - [Tecnologias](#tecnologias)
  - [Estrutura de pastas](#estrutura-de-pastas)
  - [Pré-requisitos (instalar)](#pré-requisitos-instalar)
  - [Como rodar (passo a passo)](#como-rodar-passo-a-passo)
    - [1) Servidor/API (npm)](#1-servidorapi-npm)
    - [2) Front-end (yarn)](#2-front-end-yarn)
  - [Como usar](#como-usar)
  - [Configurar URL da API no Front-end](#configurar-url-da-api-no-front-end)
  - [Scripts úteis](#scripts-úteis)
  - [Build (produção)](#build-produção)
- [🇺🇸 English](#-english)
  - [About](#about)
  - [Tech stack](#tech-stack)
  - [Folder structure](#folder-structure)
  - [Prerequisites (install)](#prerequisites-install)
  - [How to run (step-by-step)](#how-to-run-step-by-step)
    - [1) Server/API (npm)](#1-serverapi-npm)
    - [2) Front-end (yarn)](#2-front-end-yarn)
  - [How to use](#how-to-use)
  - [Configure API URL in the Front-end](#configure-api-url-in-the-front-end)
  - [Useful scripts](#useful-scripts)
  - [Build (production)](#build-production)

---

## 🇧🇷 Português

## Sobre
Este repositório contém um projeto de **Cadastro de Usuários**, composto por:

- **Servidor/API**: responsável por receber as requisições do front-end e gerenciar os dados dos usuários.
- **Front-end (React + Vite)**: interface para cadastrar usuários (ex.: **nome**, **idade**, **e-mail**) e visualizar/listar os cadastrados.

✅ **Ponto importante:** este projeto usa **npm no servidor** e **yarn no front-end** (por decisão de setup).

---

## Tecnologias
### Front-end
- React
- Vite
- JavaScript
- ESLint
- Yarn

### Servidor/API
- Node.js
- npm

---

## Estrutura de pastas
> Ajuste os nomes se no seu repositório for diferente.

```txt
/
├─ server/   → Servidor/API (npm)
└─ web/      → Front-end React + Vite (yarn)
