#!/bin/bash

# Stop the running container
docker stop jukebox-api
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)
