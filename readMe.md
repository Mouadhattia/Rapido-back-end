# Food Delivery App Backend

This is the backend for a food delivery app built using Node.js, Express.js, Prisma, MySQL, and Socket.IO.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

The backend provides the following functionality for the food delivery app:

- User authentication and authorization using JSON Web Tokens (JWT)
- CRUD (create, read, update, delete) operations for the following resources:
  - Promo
  - Service
  - Product
  - Menu
  - Restaurant
  - Category
  - Order
  - Notification
  - Comment
  - Favorite
  - Supplement
- Websockets using Socket.IO for real-time notifications

## Technologies

The following technologies were used in the development of this project:

- Node.js
- Express.js
- Prisma
- MySQL
- Socket.IO
- JSON Web Tokens (JWT)

## Getting Started

To get started with the backend, follow these steps:

1. Clone the repository
2. Install the dependencies using `npm install`
3. Set up a MySQL database and configure the connection in the `prisma/schema.prisma` file copy the .env.exmple
4. Run the database migrations using `npx prisma migrate dev --name init`
5. Seed the database with sample data using `npm run seed`
6. Start the server using `npm start`

## Installation

To install the dependencies for the project, run the following command

npm install

## Usage

To start the server, run the following command:

npm start

after runing your mysql database im using xampp for that

## Contributing

To contribute to the project, please follow these guidelines

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Create a pull request



