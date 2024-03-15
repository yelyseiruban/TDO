#!/bin/bash

SERVER_URL="http://localhost:8080"

RESPONSE=$(curl -s $SERVER_URL)

if echo "$RESPONSE" | grep -q "Hello World!"; then
  echo "Test passed: Server responded with Hello World!"
else
  echo "Test failed: Server response was not as expected"
fi