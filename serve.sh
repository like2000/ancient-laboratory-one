#!/bin/bash

flask run --host localhost --port 5000 &
#gunicorn wsgi:app -w 1 -b 127.0.0.1:5000 &

cd frontend1 || exit
ng serve
