FROM node:21


WORKDIR /telemedicine_frontend/


COPY package*.json ./

COPY . .


RUN npm install


CMD ["npm", "start"]