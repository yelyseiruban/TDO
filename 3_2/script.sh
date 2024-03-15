#!/bin/bash

echo "Building Docker image..."
docker build -t express-app .

echo "Running Docker container..."
docker run -d -p 8080:8080 --name task3-02 express-app

echo "Express.js server running on port 8080"

sleep 1

echo "Initiating server test..."

./test.sh