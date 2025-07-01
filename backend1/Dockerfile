FROM node:18-alpine

WORKDIR /backend1

COPY package.json yarn.lock ./
RUN yarn install

COPY ./ ./

RUN chmod +x ./start.sh

EXPOSE 3000

CMD ["sh", "start.sh"]