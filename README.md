# API REST para detectar mutantes #

---

El proyecto se creo con el fin generar una API-REST que contenga dos servicios.
    * 1° Te permite saber si una persona es humana o mutante basandose en su ADN representado por una matriz de NxN caracteres.
    * 2° Este servicio arroja estadísticas en función de los ADN estudiados. 
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
 (Entre 100 y 1 millón de peticiones por segundo)";
    En este punto es necesario recalcar que no depende totalmente del codigo la capacidad de soportar tal cantidad de peticiones.
    Hay muchas variantes para procesar el trafico de las peticiones.
    Se puede poner un Rate Limit si es que aplica, "en este caso para el ejemplo de este proyecto, se utilizo rate limit en 100 por IP", si no aplica, ya entra en juego el hardware necsario para tal nivel de transacciones.
    (Proxy-caché, Balanceo de Carga, Data Clusters, etc)
    

----
