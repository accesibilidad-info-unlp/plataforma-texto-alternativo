FROM node:24-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

CMD ["npx", "eleventy", "--serve", "--port=8080", "--host=0.0.0.0"]