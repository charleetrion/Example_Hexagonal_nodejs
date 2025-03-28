// Este archivo define la entidad User con sus propiedades y validaciones

class User {
    constructor(id, name, lastname, email, createdAt) {
      this.id = id;
      this.name = name;
      this.lastname = lastname;
      this.email = email;
      this.createdAt = createdAt;
    }
  }
  
  module.exports = User;
  