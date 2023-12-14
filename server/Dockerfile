FROM node:16
WORKDIR /server/
COPY package*.json /server/
RUN npm install --global nodemon
COPY . .
EXPOSE 4000
CMD [ "npm", "run", "start" ] 