FROM node:6.7
# install nodemon for autorestart nodejs
RUN npm install nodemon -g

# make the src folder available in the docker image
RUN mkdir /src
WORKDIR /src
ADD app/package.json /src/package.json

# install the dependencies from the package.json file
RUN npm install

ADD app/nodemon.json /src/nodemon.json

EXPOSE 3000

CMD npm start
