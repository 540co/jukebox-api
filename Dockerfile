FROM node:4.6.0

# Set up working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package.json /usr/src/app/package.json
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
