# Usar Node.js oficial
FROM node:18

# Definir directorio de trabajo 
WORKDIR /app

# Copiar archivos necesarios
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto
EXPOSE 4000

# Comando para correr la app
CMD ["node", "./src/infrastructure/server.js"]
