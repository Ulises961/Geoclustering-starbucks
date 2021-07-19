
FROM node

ENV PATH /front-end/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . /

RUN npm install && run npm build

CMD ["npm", "run", "start"]
