#!/bin/bash

npm install -g @angular/cli@latest

ng new --help

ng new $1 --routing=true --style=scss
cd $1

ng add @angular/material --defaults

ng generate module core
ng generate component core/home
ng generate component core/album
