# 01 · Instrucciones para el alumno

## Objetivo

La prueba mide si puedes trabajar con Angular en situaciones habituales. No está diseñada para perfiles expertos ni para preguntas de implementación interna del framework.

## Calendario

| Momento | Bloque | Puntos |
|---|---|---:|
| Día 1 | Test general | 20 |
| Día 1 | Análisis de código | 20 |
| Entre jornadas | Ejercicio de casa | 30 |
| Día 2 | Live coding: 3 bugs | 30 |
| Día 2 | Revisión del ejercicio | incluida en los 30 del ejercicio |
|  | **Total** | **100** |

## Día 1

1. Completa el test general.
2. Completa el análisis de código y sus justificaciones.
3. Exporta las respuestas y añádelas a `ENTREGA_ALUMNO.md`.
4. Al terminar comienza el ejercicio de casa.

## Entre jornadas

Implementa el ejercicio en `src/app/take-home/users/`.

Antes de entregar:

```bash
npm run build
npm test
```

Entrega el proyecto sin `node_modules`, `dist` ni `coverage`.

## Día 2

1. Entrega o confirma tu ejercicio de casa.
2. El evaluador te facilitará el material de live coding en ese momento.
3. Resolverás los tres bugs compartiendo pantalla y explicando lo que haces.
4. Después se revisará tu ejercicio de casa.

Los bugs no están incluidos en el proyecto inicial para que el ejercicio en vivo sea realmente en vivo.

## Criterios generales

- Se aceptan APIs modernas y clásicas de Angular si el resultado es correcto.
- No se exige utilizar Signal Forms, resource, NgRx ni una arquitectura concreta.
- No ocultes errores eliminando la funcionalidad que los reproduce.
