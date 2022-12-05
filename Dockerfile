FROM node:14.16.1 as build-stage
WORKDIR /webapp
COPY package.json .
RUN npm i
COPY . /webapp

#ENV REACT_APP_API_URL=$REACT_APP_API_URL

CMD npm start
