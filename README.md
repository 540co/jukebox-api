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

#### Configuring the application

Run the following commands from the root directory of the repository (update instructions as needed for Windows commands/utilities):

```bash
cp .env.example .env
```

#### Building the application

Use `docker-compose` to build the application.  The following command should be executed any time the Gemfile is modified.

```bash
docker-compose build
```

#### Setting up the database

Use `docker-compose` to create the development database.

```bash
docker-compose up -d db
docker-compose run --rm app rails db:create
```

#### Migrating the database

```bash
docker-compose run --rm app rails db:migrate
```

#### Running the application

Run the following command to start the application.

```bash
docker-compose up -d
```

Your app should now be running on [localhost:9540](http://localhost:9540).

Use the following command to stop the application.

```bash
docker-compose stop
```

## Deploying to AWS
*Documentation Coming Soon*
