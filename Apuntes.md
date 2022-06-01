# Continuous Integration (CI)

Son sistemas de integración continua.

## CI famosos

* Jenkins
* Travis
* **Github Actions** -> Es el que vamos a usar

## Formato de YML (Archivos de workflow)

````yml
name: Say hello

on:
  push:
    branches:
      - main

jobs:
  hello_world:
    runs-on: ubuntu-latest
    steps:
      - name: Echo the message
        run: |
          echo "Hola Mati!"
````

## Donde encontrar actions ya hechas

Github tiene un marketplace de actions donde podemos crear muchas ya hechas y/o oficiales de github

![Github MarketPlace](https://github.com/marketplace)

## Git checkout

Es una accion de github actions para clonar el repo en la maquina, de esta manera no tenemos que hacer un git clone como comando manualmente.

````yaml
- uses: actions/checkout@v3
  with:
    fetch-depth: 0
````
Para hacer un fetch de todos los tags y branches

## Setup node

````yaml
- uses: actions/setup-node@v3
  with:
    node-version: 14
- name: Install dependencies
  run: npm Install
````