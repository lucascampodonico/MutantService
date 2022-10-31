# API REST para detectar mutantes #

---

El proyecto se creo con el fin generar una API-REST que contenga dos servicios.

    * 1° Te permite saber si una persona es humana o mutante basandose en su ADN representado por una matriz de NxN caracteres.
    * 2° Este servicio arroja estadísticas en función de los ADN estudiados. 
    

1° Debe recibir como parámetro un array de Strings que representan cada fila de una tabla

de (NxN) con la secuencia del ADN. Las letras de los Strings solo pueden ser: (A,T,C,G), las

cuales representa cada base nitrogenada del ADN. Debes validar que sólo puedas recibir bases nitrogenadas válidas.

 

Sin mutación:

 

      A T G C G A

      C A G T G C

      T T A T T T

      A G A C G G

      G C G T C A

      T C A C T G

 

Con mutación:

 

      A T G C G A

      C A G T G C

      T T A T G T

      A G A A G G

      C C C C T A

      T C A C T G

 

Sabrás si existe una mutación si se encuentra más de una secuencia de cuatro letras

iguales, de forma oblicua (diagonal), horizontal o vertical.

Ejemplo (Caso mutación):

      {
        "dna" = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
      }

 

En este caso el llamado a la función hasMutation(dna) devuelve “true”.

2° Estadisticas de mutaciones

        En este servicio vemos cuantas verificaciones de ADN se llevo a cabo.

----

💻 Tecnologías y herramientas

 * [Javascript] - Lenguaje de programación .
 * [Express] - Infraestructura de aplicaciones web NodeJS.
 * [Google App Engine] - Servidor en la nube.
 * [VSC] - Ide de desarrollo.
 * [MongoBD] - Base de datos en Atlas.
 * [GitHub] - Repositorio y manual de uso.
 * [Swagger-UI] - Interfaz de interaccion con la API.
 * [Jest - Supertest] - Testing y cobertura de codigo.

-------

💻 Instalación

- Tegnología necesaria para correr el proyecto.

| Requiere |  |
| ------ | ------ |
| Node | < v16.18.0 |

Clonar el proyecto en el espacio de trabajo:
```bash
git clone https://github.com/steerven/mutantservice.git
```

Despues instalar dependencias.
```bash
npm install
```
Y por último ejecutar el proyecto.
```bash
npm start
```


------

💻 API

- Actualmente se esta corriendo la aplicacion en Google App Engine.

| DESCRIPCION  | URL | PETICION  | HEADER  | RESPUESTA
| ------ | ------ | ------ | ------ | ------ |
| Servicio Mutant | https://nice-mechanism-233214.rj.r.appspot.com/mutation | POST | Content-Type: application/json | Devuelve 200 si es mutant o 403 si no lo es.
| Servicio Stats | https://nice-mechanism-233214.rj.r.appspot.com/stats | GET |   | JSON
| Documentacion Swagger | https://nice-mechanism-233214.rj.r.appspot.com/docs |  |   | 

------

💻 Ejemplos 

Puede ver y probar los ejemplos en la doc https://nice-mechanism-233214.rj.r.appspot.com/docs

------

💻 Cobertura de codigo

 - Se realizaron los test con Jest y Supertest para verificar que la cobertura sea mayor al 80%.

------

💻 Nota importante.

- "Tener en cuenta que la API puede recibir fluctuaciones agresivas de tráfico 
 (Entre 100 y 1 millón de peticiones por segundo)"
    En este punto es necesario recalcar que no depende totalmente del codigo la capacidad de soportar tal cantidad de peticiones.
    Hay muchas variantes para procesar el trafico de las peticiones.
    Se puede poner un Rate Limit si es que aplica, "en este caso para el ejemplo de este proyecto, se utilizo rate limit en 100 por IP", si no aplica, ya entra en juego el hardware necsario para tal nivel de transacciones.
    (Proxy-caché, Balanceo de Carga, Data Clusters, etc)
    

----
