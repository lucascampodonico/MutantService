# API REST para detectar mutantes

---

El proyecto se creo con el fin generar una API-REST que contenga dos servicios
    - 1° Te permite saber si una persona es humana o mutante basandose en su ADN representado por una matriz de NxN caracteres.
    - 2° Este servicio arroja estadísticas en función de los ADN estudiados. 

  ----
## Contenido

- [Tecnologías utilizadas](#install)
- [Instalación local](#instalacion)
- [Api en cloud](#api)
- [Ejemplos](#ejemplos)
- [Cobertura](#Cobertura)
- [Consideraciones](#consideraciones)
- [Mejoras](#mejoras)
- [License](#license)

----

# Tecnologías y herramientas

 * [Javascript] - Lenguaje de programación 
 * [Express] - Paquetización y dependencias
 * [Spring-core] - Framework de trabajo
 * [VSC] - Ide de desarrollo
 * [CloudC9] - Servidor en la nube
 * [MongoBD] - Base de datos
 * [GitHub] - Repositorio y manual de uso.
 * [Jest - Supertest] - Testing y cobertura de codigo.


-------

# Instalación

- Tegnología necesaria para correr el proyecto.

| Requiere |  |
| ------ | ------ |
| Node | < v16.18.0 |

Clonar el proyecto en el espacio de trabajo:
```sh
$ git clone https://github.com/steerven/mutantservice.git
```

Despues instalar dependencias.
```sh
$ npm install
```
Y por último ejecutar el proyecto.
```sh
$npm start
```


------

# API

- La aplicación está configurada por defecto en el puesto 8080, este se puede cambiar el el archivo de applicacion.properties por el puerto de su preferencia.
- Actualmente hay una instancia de la aplicación corriendo en un servidor de cloudC9.

| DESCRIPCION  | URL | PETICION  | HEADER  | RESPUESTA
| ------ | ------ | ------ | ------ | ------ |
| Servicio Mutant | https://nice-mechanism-233214.rj.r.appspot.com/mutation | POST | Content-Type: application/json | Devuelve 200 si es mutant o 403 si no lo es.
| Servicio Stats | https://nice-mechanism-233214.rj.r.appspot.com/stats | GET |   | JSON
| Documentacion Swagger | https://nice-mechanism-233214.rj.r.appspot.com/docs |  |   | 

------

# Ejemplos 


	1) SERVICIO: mutant 
  	   REQUEST: [TYPE POST; HEADER Content-Type: application/json]
    	{
    	"dna": ["ATGCGA",
    		"CAGTGG",
    		"TCCCCT",
    		"ATAGGG",
    		"CCTAAA",
    		"TCATTG"
    	]}
	   RESPONSE: 200 - OK
	
	2) SERVICIO: stats
	   RESPONSE: 200 - OK 
	{ "count_mutant_dna": 1, "count_human_dna": 2, "ratio": 0.5}	

------

# Cobertura de codigo

 - Se realizaron los test con Jest y Supertest para verificar que sea mayor al 80%.

------

# Consideraciones
- Se validaron las diferentes secuencias de una matriz de DNA.
- Se validó la estructura respetara la uniformidad NxN
- Se colocó como condición mínima para que el DNA sea de mutante que se obtuvieron al menos 2 secuencias de 4 caracteres seguidos en la matriz de DNA
- La secuencia de DNA es estudiada primero en forma vertical de izquierda a derecha, luego horizontal de arriba a abajo,
luego inclinada de izquierda a derecha de abajo para arriba y de arriba para abajo.
- Hay dos servicios expuestos para poder ver listado de ADN estudiados y para poder limpiar la Base de Datos, si bien esto no es una buena práctica, permitirá al evaluador probar mas fácil, comparar y limpiar la BD rápidamente (Para verlos hay que entrar en la app :P).
- En cuanto a el punto "Tener en cuenta que la API puede recibir fluctuaciones agresivas de tráfico 
 (Entre 100 y 1 millón de peticiones por segundo)"; Hay varias consideraciones a tener en cuenta, 
  no se puede tener una respuesta concreta con tan poca información:
  Asumiendo que POST /mutant es el endpoint que mas llamadas recibe entonces hay que considerar varios 
  factores. Si bien es cierto que el performance del código juega un papel importante, la capacidad de 
  procesar 1 millón de transacciones por segundo va mas allá del código, probablemente se necesiten 
  múltiples hosts que sean capaces de manejar esa capacidad de transacciones, también debe revisarse 
  la arquitectura y hacerse preguntas como:

  ¿La respuesta de mutant debe ser real time o puede encolarse?
  ¿Recibo request duplicados en los cuales una cache podría ser útil?
  ¿Quienes son mis usuarios, Donde están?
  ¿Es posible añadir un rate limit por usuario el cual simplemente aplique throttling a clientes que 
  excedan un limite establecido de llamadas?

  Entender la naturaleza de las llamadas juega un papel importante en las estrategias a aplicarse, por ejemplo: si no es necesario que sea real time entonces puede colocarse una cola que vaya guardando las operaciones pendientes mientras los servidores están ocupados e ir procesando en ese orden y notificar cuando la respuesta este lista. Si las operaciones deben ser rápidas y no se pueden hacer de manera asíncrona entonces hay que desplegar una capacidad capaz de soportar esta cantidad de transacciones (load balancers, múltiples hosts, database clusters, cache proxies, etc). También hay que entender el significado de 'agresivas', 
  ¿es posible predecir un pico en las llamadas de alguna manera? ¿se puede aprovisionar 
  hardware de antemano o hay que monitorear de manera activa? No solo es desplegar una capacidad 
  capaz de procesar ese volumen de operaciones, también es importante entender en términos 
  de costo que tan rápido se puede aumentar o reducir esa capacidad cuando sea necesario.

----
# Mejoras
- Dependiendo del estudio profundo del tema de las fluctuaciones agresivas, quedaria pendiente 
  definir la estragia a seguir.

----

# Licencia


**Software libre**
