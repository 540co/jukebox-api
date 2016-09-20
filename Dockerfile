FROM node:6.6

# Set up working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
ADD package.json /usr/src/app/package.json
RUN npm install

EXPOSE 3000
