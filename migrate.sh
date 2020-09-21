#!/bin/bash

python manage.py db init
python manage.py db migrate
python manage.py db upgrade

snap run heroku run python manage.py db upgrade --app ancient-laboratory
