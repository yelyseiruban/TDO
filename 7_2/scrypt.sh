#!/bin/bash

echo "Test connection frontend to backend:"
docker-compose exec frontend curl -s backend:3000 || echo "Connection front to back is not set correctly"

echo "Test connection backend to database:"
docker-compose exec backend curl -s database:5432 || echo "connection back to db is not set correctly"

echo "Test connection z frontend to database:"
docker-compose exec frontend curl -s database:5432 && echo "Connection is not correct thus front should not have connection to db" || echo "Connection is blocked as expected"