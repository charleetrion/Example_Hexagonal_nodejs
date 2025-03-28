Hexagonal Architecture example in Node.js using Express

This is a simple example of Hexagonal Architecture in Node.js using Express. I made this example to show how to implement the Hexagonal Architecture in Node.js using Express with my underestanding of the concept.

What is Hexagonal Architecture?
Hexagonal Architecture is an architectural pattern that helps us to create applications that are more independent of the external world. It is also known as Ports and Adapters Architecture or Onion Architecture.

INFRASTRUCTURE/
├── node_modules/ # Dependencies (ignored)
├── src/
│ ├── application/ # Use cases
│ │ └── userService.js # Business logic
│ ├── domain/ # Entities
│ │ └── user.js # Domain model
│ └── infrastructure/
│ ├── controllers/ # HTTP handling
│ │ └── userController.js
│ ├── database/
│ │ └── mysqlConnection.js # Config DB
│ ├── middlewares/
│ │ └── validationMiddleware.js # validations
│ ├── repositories/ # Data access
│ │ └── userRepository.js
│ └── routes/
│ └── userRoutes.js # Endpoints
├── env/ # Environment variables
├── .gitignore # Ignored files
├── Docker-compose.yml # Orchestration
├── Dockerfile # Container
├── package.json # Dependencies
└── server.js # Entry point

