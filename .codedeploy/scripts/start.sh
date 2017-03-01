#!/bin/bash

# migrate the database
docker run --rm --env-file /home/ec2-user/.env.jukebox DOCKER_TAG rails db:migrate
docker run --rm --env-file /home/ec2-user/.env.jukebox DOCKER_TAG rails db:seed
sleep 5

# start the container
docker run -d --name jukebox-api --env-file /home/ec2-user/.env.jukebox -p 3000:3000 DOCKER_TAG bundle exec rails s -b 0.0.0.0
