#!/bin/bash

# pull docker image from ecr
eval $(aws ecr get-login --region us-east-1)
docker pull DOCKER_TAG
