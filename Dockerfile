FROM repo.indonesian-aerospace.com/node:18-alpine

RUN mkdir /app

COPY . /app

WORKDIR /app

EXPOSE 3030

CMD ["npm","start"]
