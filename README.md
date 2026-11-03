# Certificación Angular · versión alumno

Proyecto de evaluación sobre **Angular 22** con cuatro bloques y una puntuación total de 100 puntos:

1. Test general: 20 puntos.
2. Análisis de código: 20 puntos.
3. Live coding con tres bugs: 30 puntos.
4. Ejercicio de casa: 30 puntos.

La evaluación combina fundamentos de Angular con APIs modernas. No exige un perfil experto ni memorizar detalles internos del framework.

## Requisitos

- Node.js `^22.22.3`, `^24.15.0` o `^26.0.0`.
- npm 10 o superior.

Se incluye `.nvmrc` con Node 24.15.0. Si utilizas nvm, ejecuta `nvm use` desde la raíz.

## Puesta en marcha

```bash
npm install
npm start
```

La aplicación se abre normalmente en `http://localhost:4200`.

Comandos útiles:

```bash
npm run build
npm test
npm run test:watch
```

El ZIP no incluye `node_modules`. Después de `npm install`, npm generará el `package-lock.json` correspondiente al entorno de instalación.

## Antes de empezar

Lee `docs/01_INSTRUCCIONES_ALUMNO.md` y la política de herramientas indicada por la persona evaluadora.

- Los test pueden completarse desde la aplicación o usando las versiones imprimibles de `docs/`.
- Las selecciones realizadas en la aplicación se guardan en `localStorage` y pueden exportarse como texto.
- Los bugs están en `src/app/live-coding/`.
- El ejercicio de casa está en `src/app/take-home/users/`.
- Centraliza la entrega en `ENTREGA_ALUMNO.md` y adjunta el proyecto modificado.

## Importante

Este proyecto **no contiene respuestas correctas, puntuaciones ocultas ni la solución del profesor**. No modifiques el funcionamiento de los test para intentar obtener una nota automática: la corrección se realiza con una rúbrica independiente.
# angular-certification-alumno
