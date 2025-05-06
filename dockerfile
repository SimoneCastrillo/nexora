FROM node:lts-alpine

WORKDIR /app

# Copiar os arquivos necessários para instalar dependências
COPY ["package.json", "package-lock.json*", "./"]

# Instalar dependências
RUN npm install

# Copiar o restante do projeto
COPY . .

# Expor a porta 3000
EXPOSE 3000

# Iniciar o servidor de desenvolvimento
CMD ["npm", "start"]