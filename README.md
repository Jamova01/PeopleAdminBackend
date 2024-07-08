# PeopleAdminBackend

PeopleAdminBackend is a backend application for managing person and task data. It provides CRUD (Create, Read, Update, Delete) operations for both entities.

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

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file. Make sure to replace `your_value` with your actual credentials.

- `PORT`: Specifies the port on which the server will run. Default is `3000`.
- `DB_USER`: Database username. Example: `admin`.
- `DB_PASSWORD`: Database password. Example: `admin123`.
- `DB_HOST`: Database host. Example: `localhost`.
- `DB_NAME`: Database name. Example: `PersonalManagerDB`.
- `DB_PORT`: Database port. Example: `5432`.

**Note:** These variables are shared here for educational purposes. In a real-world project, sensitive information such as database credentials should never be hardcoded or shared publicly.

## Using Docker
To run the database using Docker and pgAdmin, make sure you have Docker installed on your machine. Then, execute the following commands:

```
sudo docker compose up -d
```
This will start the Docker containers in the background. Once the containers are running, the database will be available and you can connect to it using pgAdmin or any other database management tool.
