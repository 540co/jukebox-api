# jukebox-api

This API is a proof-of-concept and living example of the [EADS's Handbook]().  This API focuses on the management of Songs, Albums, Artists, Playlists, and Users.

## Running Locally
Make sure you have [Node.js](https://nodejs.org) and [Docker](https://docs.docker.com) installed.

#### Cloning the repository and installing dependencies

Run the following commands in the location that you'd like to place the repository:

```
git clone git@github.com:540co/jukebox-api.git
cd jukebox-api
npm install
```

#### Configuring the application

Run the following commands from the root directory of the repository (update instructions as needed for Windows commands/utilities):

```
cp .env.example .env
vi .env
```

Update the PostgreSQL environment variables to correspond with the appropriate values based on your local environment settings.  If using the PostgreSQL running in the Docker container, update the values to the following settings:

```
POSTGRES_USER=postgres
POSTGRES_PASSWORD=
POSTGRES_DB=postgres
```

#### Running the application
Run the command below to 
```
docker-compose up
```

Your app should now be running on [localhost:3000](http://localhost:3000).

## Deploying to AWS
*Documentation Coming Soon*

## Documentation

For more information about configuring the application or contributing to this repsitory. see these links:
* [Environment Variables in Docker](https://docs.docker.com/compose/env-file/)
* [PostgreSQL Environment Variables in Docker](https://hub.docker.com/_/postgres/)


