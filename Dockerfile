# Usa a imagem oficial como base
FROM node:lts

# Cria o diretório de trabalho
WORKDIR /usr/src/app

# Copia todos os arquivos do diretório atual para o diretório de trabalho
COPY . .

# Instala as dependências
RUN npm install

# Expõe a porta 3000
EXPOSE 3000

# Executa os comandos para iniciar a aplicação  
CMD [ "npm", "start" ]