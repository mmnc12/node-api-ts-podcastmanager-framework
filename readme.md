# 🎙️ Podcast Manager

Um aplicativo inspirado na experiência de plataformas como Netflix, criado para centralizar episódios de podcasts em vídeo e organizá-los por categorias.

## 📖 Descrição

O Podcast Manager permite listar e filtrar episódios de podcasts em vídeo, separados por categorias como:

* Saúde
* Bodybuilder
* Mentalidade
* Humor
* Esporte
* Corrida

A API foi desenvolvida utilizando **Node.js**, **TypeScript** e **Express**, seguindo uma arquitetura em camadas (**Controller → Service → Repository**) para facilitar manutenção e escalabilidade.

---

## ✨ Features

* Listar todos os episódios de podcasts.
* Filtrar episódios por nome do podcast.
* Organização dos dados por categorias.
* Estrutura modular utilizando Express Router.
* API REST desenvolvida com TypeScript.

---

## 🛠️ Tecnologias Utilizadas

* **Node.js** → Ambiente de execução JavaScript no servidor.
* **TypeScript** → Superset de JavaScript com tipagem estática.
* **Express** → Framework para criação de APIs REST de forma simples e organizada.
* **TSX** → Execução de arquivos TypeScript em ambiente de desenvolvimento.
* **Tsup** → Bundler para geração da versão de produção.
* **File System (fs/promises)** → Leitura dos dados armazenados em arquivo JSON.
* **NPM Scripts** → Automatização de tarefas de build e execução.

---

## 📂 Arquitetura do Projeto

```text
src/
├── controllers/
├── services/
├── repositories/
├── routes/
├── models/
├── data/
└── app.ts
```

---

## 🚀 Como executar o projeto

### Instalar dependências

```bash
npm install
```

### Executar em modo desenvolvimento

```bash
npm run start:dev
```

ou

```bash
npm run start:watch
```

### Gerar build de produção

```bash
npm run dist
```

### Executar versão compilada

```bash
npm start
```

---

## 📡 API Endpoints

### Listar todos os episódios

```http
GET /api/episodes
```

#### Response

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Fluxo nº 319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  }
]
```

---

### Filtrar podcasts por nome

```http
GET /api/episode?p=flow
```

#### Parâmetros

| Parâmetro | Tipo   | Descrição       |
| --------- | ------ | --------------- |
| p         | string | Nome do podcast |

#### Exemplo

```http
GET /api/episode?p=flow
```

#### Response

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Fluxo nº 319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  }
]
```


