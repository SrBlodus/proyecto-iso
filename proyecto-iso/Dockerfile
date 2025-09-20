# Dockerfile para desarrollo
FROM node:20-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Instalar Angular CLI globalmente
RUN npm install -g @angular/cli

# Copiar todo el código fuente
COPY . .

# Exponer el puerto 5678
EXPOSE 5678

# Comando para ejecutar la aplicación
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "5678"]