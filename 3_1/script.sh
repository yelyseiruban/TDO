#!/bin/bash

docker build -t nodejs-hello-world .

docker run -d -p 8080:8080 --name task3-01 nodejs-hello-world

echo "Server Node.js runs on 8080 port"

sleep 1

echo "Server is running"

./tests.sh