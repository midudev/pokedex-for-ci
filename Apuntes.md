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