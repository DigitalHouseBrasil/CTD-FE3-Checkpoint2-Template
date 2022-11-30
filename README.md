# ctd-fe3-final-solution
**IMPORTANTE:** Dentro del proyecto se encuentra un archivo de tests que deberia facilitar la correcion del proyecto.  Estos servirán como ayuda a la hora de corregir, pero no determinan la nota final de la evaluación.
Examen Final de Frontend III


## Indice
* [Requisitos](#requisitos)
  * [Condiciones mínimas de aprobación](#condiciones-mínimas-de-aprobación)
  * [Aspectos que modifican la valoración final de la nota](#aspectos-que-modifican-la-valoración-final-de-la-nota)
* [Funcionalidades](#funcionalidades)
* [Desarrollo](#desarrollo)
* [API](#api)
* [Entrega](#entrega)
  * [Fecha de Entrega](#fecha-de-entrega)
  * [Formato de Entrega](#formato-de-entrega)


## Requisitos

Es indispensable clonar este proyecto en un repositorio privado, para poder trabajar de forma *individual*. No se aceptarán proyectos que se hayan realizado sin partir de este template. Para eso deberás crear un repositorio con el nombre "ctd-esp-fe3-final" en tu cuenta de Github y luego seguir los siguientes pasos en tu terminal

```
# clona el repositorio del final en tu computadora
git clone https://github.com/DH-Esp-Frontend/ctd-esp-fe3-final 

# ingresa al directorio del final
cd ctd-esp-fe3-final

# elimina los links al repositorio de DH
git remove rm origin

# Agrega el link al repositorio de tu cuenta de github, reemplaza <tuusuario> por tu cuenta
git remote add origin https://github.com/<tuusuario>/ctd-esp-fe3-final

# Sube el template inicial a tu repositorio de github
git push -u origin main
```


### Condiciones mínimas de aprobación

Las siguientes condiciones son requisitos mínimos necesarios para la aprobación del final:

* **Cumplir con todas las funcionalidades obligatorias**
* Solo se podrán utilizar las librerías que se detallan en este README. Ver [Dependencias](docs/desarrollo.md#dependencias)
* No se considerará realizada cualquier funcionalidad que sea implementada utilizando una librería distinta a las permitidas.
* Deberá ser desarrollada utilizando Javascript con React.js como libreria.
* Deberá contar con al menos 5 tests unitarios escritos para la aplicacion. Para ello deberá emplearse Jest y React Testing Library. Se considerara la importancia y peso de dichos tests como en un proyecto real.
* Se espera que la página de Contacto, contenga los flujos de validación necesarios (minimo 2 validaciones), para un correcto submit del formulario.
* En los casos en que se requiera dar estilos a componentes, deberá realizarse teniendo en cuenta el theme del contexto global. 



### Aspectos que modifican la valoración final de la nota

Los siguientes aspectos son extras al requisito mínimo de aprobación que serán tenidos en cuenta para aumentar la nota final, siempre y cuando su implementación sea correcta:

**Validaciones**
* Se valorará el agregado de validaciones de flujos alternativos al normal (mas de dos validaciones) y el correcto manejo de errores en las distintas situaciones.

**Funcionalidad de destacados**
* Se valorará funcionalidades extra a esta feature, como lo pueden ser el eliminar de destacadados, manejo de errores al intentar agregar repetidos y reseteo total de los destacados. 

**Testing unitario**
* Se valorará el correcto uso del testing unitario y el incremento del numero de tests agregados (mas de 5 tests cases)

**Estilos**
* Se valorará el estilado de demas apartados de la App (por fuera del estilado obligatorio de las rutas en base al theme)

**Buenas Prácticas**
* Se prestará especial atención al uso de buenas prácticas, mejoras de performance (implementando useMemo) y la reutilizacion de codigo

## Funcionalidades

Ver [Funcionalidades](docs/funcionalidades.md).
    
## Desarrollo

Ver [Desarrollo](docs/desarrollo.md).

## API

La API a utilizar sera la siguiente:
```https://jsonplaceholder.typicode.com/users```

Y para cada dentista en especifico:
```https://jsonplaceholder.typicode.com/users/:id```

## Entrega

### Fecha de Entrega

Solo se admitirán entregas recibidas hasta el cierre de la clase 24, clase de Evaluación Final - Entrega. 

### Formato de Entrega

*No deberan cambiar los nombres ni ubicacion de las variables/componentes/context que vienen con el repo base

Se aceptará la entrega mediante la submisión de la URL de su repositorio clonado

El link al Google Form para la submisión será enviado por el profesor a cargo de la comisión.

Mucha suerte y éxitos! 

