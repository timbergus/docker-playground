FROM node

RUN npm install -g ts-node
RUN mkdir -p /home/app

COPY . /home/app

EXPOSE 3000

CMD ["ts-node", "/home/app/src/index.ts"]
