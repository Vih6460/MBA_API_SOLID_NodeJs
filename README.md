# 🚀 API SOLID with Node.js

A RESTful API built with **Node.js**, following **SOLID principles**, **Design Patterns**, and **RBAC (Role-Based Access Control)**. Developed with **Fastify**, **TypeScript**, and **Zod**, this project serves as a hands-on backend learning experience with modern, scalable architecture and automated testing.

---

## 📦 Technologies Used

- **Node.js**
- **Fastify** – High-performance web framework
- **TypeScript** – Strongly typed JavaScript
- **Zod** – Schema-based validation
- **Prisma** – Type-safe ORM
- **JWT** – Authentication and Authorization
- **Day.js** – Date manipulation
- **Docker** – Containerized PostgreSQL
- **Vitest** – Unit and e2e testing
- **ESLint** – Code style and linting
- **Supertest** – API testing
- **bcryptjs** – Password hashing

---

## 🚧 Project Setup

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Docker](https://docs.docker.com/get-started/get-docker/)

### 🔄 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Vih6460/MBA_API_SOLID_NodeJs.git
   ```

2. Navigate into the project folder:
   ```sh
   cd MBA_API_SOLID_NodeJs
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

---

## ▶️ Running the Project

### 🧪 Development Server

Start the development server:
```sh
npm run start:dev
```

> The API will be available at `http://localhost:3333`

To stop the server, press `CTRL + C`.

---

### 🐘 PostgreSQL via Docker

Run a PostgreSQL container:
```sh
docker run --name api-solid-pg \
  -e POSTGRESQL_USERNAME=docker \
  -e POSTGRESQL_PASSWORD=docker \
  -e POSTGRESQL_DATABASE=apisolid \
  -p 5432:5432 \
  bitnami/postgresql:latest
```

---

## 🛠️ Prisma ORM

1. Initialize Prisma:
   ```sh
   npx prisma init
   ```

2. Create/Edit database models in `prisma/schema.prisma`, then run:
   ```sh
   npx prisma migrate dev
   npx prisma generate
   ```

3. Optional – Open Prisma Studio:
   ```sh
   npx prisma studio
   ```

---

## ✅ Running Tests

- Unit Tests:
  ```sh
  npm run test
  ```

- End-to-End Tests:
  ```sh
  npm run test:e2e
  ```

- Coverage Report:
  ```sh
  npm run test:coverage
  ```

- Vitest UI:
  ```sh
  npm run test:ui
  ```

---

## 🧹 Linting & Formatting

Automatically fix code style issues:
```sh
npm run lint
```

VSCode recommended setup:
- Install ESLint extension: `dbaeumer.vscode-eslint`
- Add to your `settings.json`:
  ```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
  ```

---

## 🧱 Build

Compile the project into JavaScript:
```sh
npm run build
```

Output will be in the `/build` directory.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

