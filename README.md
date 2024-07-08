# PeopleAdminBackend

PeopleAdminBackend is a backend application for managing person and task data. It provides CRUD (Create, Read, Update, Delete) operations for both entities.

## Folder Structure

```
PeopleAdminBackend/
│
├── routes/
│   ├── people.router.js
│   ├── tasks.router.js
│   └── index.js
│
├── schemas/
│   ├── person.schema.js
│   ├── task.schema.js
│   └── index.js
│
├── services/
│   ├── person.service.js
│   ├── tasks.service.js
│   └── index.js
│
├── middlewares/
│   ├── error.handler.js
│   └── validator.handler.js
│
├── db/
│   ├── models/
│   │   ├── person.model.js
│   │   ├── task.model.js
│   │   └── index.js
│   ├── migrations/
│   └── config.js
│
├── config/
│   └── config.js
│
├── libs/
│   └── sequelize.js
│
├── app.js
└── package.json

```

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

```
git clone https://github.com/Jamova01/PeopleAdminBackend.git
cd PeopleAdminBackend
```

2. **Install dependencies**

```
npm install
# o
yarn install
```

## Usage

To start the application in development mode, use the following command:


```
npm run dev
# o
yarn dev
```

This will start the application on port 3000 by default. Open your browser and go to http://localhost:3000/ to interact with the backend APIs.


## Technologies Used

This project uses the following technologies:

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **Sequelize**: ORM (Object-Relational Mapping) for PostgreSQL.
- **Joi**: Schema validation for JavaScript objects.
- **pg**: PostgreSQL client for Node.js.
- **pg-hstore**: Module for serializing and deserializing JSON data to hstore format.
- **dotenv**: Module to load environment variables from a .env file into process.env.
- **cors**: Middleware for enabling CORS (Cross-Origin Resource Sharing).
- **@hapi/boom**: HTTP-friendly error handling.
- **Docker**: Containerization platform for running applications and services.
- **pgAdmin**: PostgreSQL administration and development platform.
