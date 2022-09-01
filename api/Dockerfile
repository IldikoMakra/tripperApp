FROM node:18-alpine

WORKDIR /api

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .



EXPOSE 5000
CMD [ "npm", "start"  ]