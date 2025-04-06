# API SOLID with NodeJs

This project is designed to develop a REST API while applying fundamental software engineering principles such as SOLID, Design Patterns, and RBAC (Role-Based Access Control). The API is built using Fastify, Zod, and TypeScript, providing a hands-on approach to mastering backend development in Node.js.

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your system. You can download it from [Node.js official website](https://nodejs.org/).
Ensure you have Docker installed on your system. You can download it from [Docker docs website](https://docs.docker.com/get-started/get-docker/).

### Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/Vih6460/MBA_API_SOLID_NodeJs.git
   ```
2. Navigate to the project directory:
   ```sh
   cd MBA_API_REST_NodeJs/
   ```
2. Install the dependencies:
   ```sh
   npm i
   ```

### Usage

To start the server, run:
```sh
npm run start:dev
```
The server will be running on `http://localhost:3333`. You can change it on file 'src/server.js'

To stop the server, press `CTRL + C` in the terminal.


### Steps to create this project from 0

Create a project with Node.js
```sh
npm init -y
```

(Optional) Create the file `.npmrc` with this content
```.npmrc
save-exact=true
```

Install the typescript, tsx (convert `.ts` to `.js`), tsup (build the application)
```sh
npm i typescript @types/node tsx tsup -D
```

Create the file `tsconfig.json`
```sh
npx tsc --init
```

In file `tsconfig.json` update the target from 2016 to 2020
```json
"target": "es2020",   
```

Install fastify
```sh
npm i fastify 
```

Install the library dotenv for environments variables
```sh
npm i dotenv 
```

Install the library zod for validations
```sh
npm i zod 
```

Install the library dayjs to manipulate dates
```sh
npm i dayjs
```

Install the library bcryptjs for encrypt passwords
```sh
npm i bcryptjs
npm i -D @types/bcryptjs
```

Install the library vitest for make your automated tests
```sh
npm i vitest vite-tsconfig-paths -D
```
Install the UI of vitest (optional)
```sh
npm i -D @vitest/ui
```

Install the ESLint
```sh
npm i @rocketseat/eslint-config -D
```
Install in VsCode the extension for ESLint, id: `dbaeumer.vscode-eslint`
In VsCode `settings.json` put this code
```json
"editor.codeActionsOnSave": {
   "source.fixAll.eslint": true,
}
```

Install Prisma ORM 
```sh
npm i prisma -D
```
Create Prisma Schema
```sh
npx prisma init
```
Install in VsCode the extension for Prisma, id: `Prisma.prisma`
In VsCode `settings.json` put this code
```json
"[prisma]": {
   "editor.formatOnSave": true
}
```
Create a model(table) on `schema.prisma`
Run the code
```sh
npx prisma generate
```
Add the dependency to access the database
```sh
npm i @prisma/client
```


Add Bitnami package for PostgreSQL from [Docker hub website](https://hub.docker.com/).
```sh
docker run --name api-solid-pg -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=apisolid -p 5432:5432 bitnami/postgresql:latest
```

Make and exeute the first migration. Be sure you have changes on your file `schema.prisma`
```sh
npx prisma migrate dev
```

Open prisma studio (database interface)
```sh
npx prisma studio
```

Install the package of Fastify JWT for authentications
```sh
npm i @fastify/jwt
```

Install the package npm-run-all
```sh
npm i -D npm-run-all
```

Install the package for supertest
```sh
npm i supertest -D
npm i @types/supertest -D
```

Install the lib fastify cookie
```sh
npm i @fastify/cookie
```

## Contributing

Feel free to fork this repository and submit pull requests with improvements or additional features.

## License

This project is licensed under the MIT License.

---

Happy coding! 🚀