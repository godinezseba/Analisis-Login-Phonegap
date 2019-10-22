# Hola

## Requisitos:
Las consultas a la [API REST](https://github.com/godinezseba/Analisis-Ayudantia-SpringBoot) se hacen a chile-2.herokuapp.com, notar que no siempre estara disponible el server en Heroku.

## Comandos

### Plataforma
Antes de compilar nuestro proyecto para cualquier plataforma, es necesario declarar que usaremos dicha plataforma con el siguiente comando:

```phonegap platform add <plataforma>```

donde las disponibles son:
- browser
- android
- electron
- ios
- osx
- windows

### Compilar

```phonegap build <plataforma>```

#### Android
Notar que para el caso de Android es necesario tener instalado Android Studio. Para evitar tener que instalarlo se puede usar [Adobe Phonegap Build](https://build.phonegap.com/) (es necesario iniciar sesión).

### Ejecutar
Para ejecutar en el browser se utiliza el siguiente comando:

```phonegap serve --no-autoreload```