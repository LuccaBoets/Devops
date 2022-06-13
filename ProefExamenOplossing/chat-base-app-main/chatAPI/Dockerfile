FROM node

WORKDIR /app/

COPY *.json ./
COPY *.js ./

RUN ["npm", "install"]

CMD ["npm", "start"]

EXPOSE 3000
