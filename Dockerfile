FROM node:6.6

# Set up working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package.json /usr/src/app/package.json
RUN npm install

# Add app code
COPY . /usr/src/app

EXPOSE 3000

CMD [ "npm", "start" ]
