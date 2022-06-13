FROM node

WORKDIR /app/

COPY *.json ./
COPY index.js ./

RUN ["npm", "install"] 

CMD ["npm", "start"]

EXPOSE 3000
