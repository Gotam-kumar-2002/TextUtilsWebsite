FROM node:20

WORKDIR /ReactLearn/my-app

copy . .

RUN npm install

EXPOSE 3000

CMD ["npm","start"]