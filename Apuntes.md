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

## Diferencias Cypress y Jest

Cypress es utilizado para realizar tests E2E(End to End) los cuales sirven para testear desde la experiencia del usuario simulando un escenario real.
Por otro lado Jest en este caso es utilizado para realizar pruebas unitarias.
La importancia de utilizar varios test es que normalmente los test E2E suelen tardar mucho mas para ejecutarse y por lo tanto no debemos abusar de ellos, sin embargo el test unitario es mucho mas rapido comparado con el E2E.

## Evitariar varias acciones

Es importante en CI evitar que un workflow tenga muchas acciones corriendo en paralelo ya que esto puede generar problemas.

## Secrets

Son variables de entorno para Github actions.