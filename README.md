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
