FROM node

EXPOSE 80

WORKDIR usr/src/app

COPY . .

RUN apt-get update
RUN npm i
CMD ["node","index.js"]
