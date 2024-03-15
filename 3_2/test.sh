#!/bin/bash

response=$(curl -s http://localhost:8080)

if [[ "$response" =~ "time" ]]; then
  echo "Test passed: Server returned JSON with current date and time"
else
  echo "Test failed: Server did not return JSON with current date and time"
fi