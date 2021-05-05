#!/bin/bash
docker build -t drifterz13/vultr-nodejs . &&
docker tag drifterz13/vultr-nodejs drifterz13/vultr-nodejs:latest &&
docker push drifterz13/vultr-nodejs:latest
