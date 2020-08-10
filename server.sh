#!/bin/bash

flask run --port=5005 &

cd frontend1
ng serve &
