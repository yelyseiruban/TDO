#!/bin/bash

node_container="node_server"
mongo_container="mongo_db"

docker run -d --name $mongo_container mongo

sleep 1

docker run -d --name $node_container --link $mongo_container -p 8080:8080 node tail -f /dev/null

docker cp app.js $node_container:/home/app.js

docker exec $node_container sh -c 'cd home && npm install mongodb && npm install express && node /home/app.js' > /dev/null 2>&1

docker ps -f name=$node_container -f name=$mongo_container

./test.sh