#!/bin/bash

EXPECTED_RESPONSE='[{"_id":"65f0aa636b4da60ad5c27d8f","name":"Example Item","__v":0}]'
RESPONSE=$(curl -s http://localhost:8080)
if [ "$RESPONSE" == "$EXPECTED_RESPONSE" ]; then
  echo "Test passed: Successful response from the server."
  echo "Item: '$RESPONSE'"
else
  echo "Test failed: Unexpected response from the server."
  echo "Expected: '$EXPECTED_RESPONSE'"
  echo "Got: '$RESPONSE'"
fi
