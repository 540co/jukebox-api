# jukebox-api

This API is a proof-of-concept and living example of the [EADS's Handbook]().  This API focuses on the management of Songs, Albums, Artists, Playlists, and Users.

## Running Locally
Make sure you have [Docker](https://docs.docker.com) installed.

#### Cloning the repository and installing dependencies

Run the following commands in the location that you'd like to place the repository:

```bash
git clone git@github.com:540co/jukebox-api.git
cd jukebox-api
```

#### Creating a DB for the application to connect to (optional)

This step is optional if you already have the database created.  This assumes that you've only installed `db-migrate` locally from the `npm install` above.  If you need further guidance on `db-migrate` [go here](https://db-migrate.readthedocs.io/en/latest/)

```
docker-compose run app ./node_modules/db-migrate/bin/db-migrate db:create mydb
```

This will create a database call `mydb`.

#### Configuring the application

Run the following commands from the root directory of the repository (update instructions as needed for Windows commands/utilities):

```bash
cp .env.example .env
vi .env
```

Update the PostgreSQL environment variables to correspond with the appropriate values based on your local environment settings.  If using the PostgreSQL running in the Docker container, update the values to the following settings:

```
POSTGRES_USER=postgres
POSTGRES_PASSWORD=
POSTGRES_DB=mydb
```

#### Building the application

Use `docker-compose` to build the application.  The following command should be executed any time package.json file is modified.

```bash
docker-compose build
```

#### Running the application

Run the following command to start the application.

```bash
docker-compose up
```

Your app should now be running on [localhost:3000](http://localhost:3000).  Use `Ctrl-C` to stop the application.

You may also supply the `-d` flag to run the application in the background.

```bash
docker-compose up -d
```

In this case, use the following command to stop the application.

```bash
docker-compose stop
```

## Deploying to AWS
*Documentation Coming Soon*

## Documentation

For more information about configuring the application or contributing to this repsitory. see these links:
* [Environment Variables in Docker](https://docs.docker.com/compose/env-file/)
* [PostgreSQL Environment Variables in Docker](https://hub.docker.com/_/postgres/)
