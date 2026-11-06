# RÚBRICA DE CERTIFICACIÓN ANGULAR

## Resumen de puntuación

| Bloque | Puntos máximos | Corrección |
|---|---:|---|
| Test general | 20 | 20 preguntas × 1 punto |
| Análisis de código | 20 | 10 preguntas × 2 puntos |
| Live coding · 3 bugs | 30 | 10 puntos por bug |
| Ejercicio de casa | 30 | Valoración global del ejercicio |
| **TOTAL** | **100** | |

---

# Escala común de valoración

Esta escala se utiliza en los criterios prácticos de la certificación.

| Valor | Nivel | Descripción general |
|---:|---|---|
| **0** | No cumple | No identifica el problema, no completa el criterio o la solución es incorrecta. |
| **1** | Básico | Resuelve parcialmente el criterio o necesita bastante ayuda para avanzar. |
| **2** | Aceptable | Resuelve lo esencial, aunque con alguna limitación técnica o de explicación. |
| **3** | Bueno | Resuelve de forma autónoma, correcta y razonada. |
| **4** | Alto | Resuelve con autonomía, entiende la causa, justifica decisiones y conoce alternativas razonables sin sobrecomplicar. |

> Un nivel alto no exige utilizar siempre la API más nueva de Angular. Se valora principalmente que la solución sea correcta, adecuada, mantenible y esté bien razonada.

---

# A. TEST GENERAL — 20 puntos

## Qué se evalúa

Conocimientos generales de Angular y comprensión de conceptos fundamentales y actuales del framework.

Entre otros:

- Componentes y templates.
- Servicios e inyección de dependencias.
- Comunicación entre componentes.
- Routing.
- Formularios.
- RxJS.
- HTTP.
- Lifecycle.
- Change detection.
- Signals y APIs modernas cuando corresponda.

## Puntuación

- **20 preguntas**.
- **1 punto por respuesta correcta**.
- Respuesta incorrecta o en blanco: **0 puntos**.
- Los fallos no restan puntos.

**Puntuación máxima: 20 puntos.**

---

# B. ANÁLISIS DE CÓDIGO — 20 puntos

## Qué se evalúa

Capacidad para leer código Angular, identificar problemas y comprender el motivo técnico.

Cada pregunta vale **2 puntos**:

| Puntuación | Criterio |
|---:|---|
| **0** | No identifica el problema o la respuesta es incorrecta. |
| **1** | Identifica correctamente el problema o la opción adecuada, pero el razonamiento es incompleto. |
| **2** | Identifica correctamente el problema y comprende qué ocurre y por qué. |

- **10 preguntas × 2 puntos = 20 puntos**.

**Puntuación máxima: 20 puntos.**

---

# C. LIVE CODING — 3 BUGS — 30 puntos

Cada bug tiene un máximo de **10 puntos**.

## Qué se evalúa

| Criterio | Descripción |
|---|---|
| **Comprensión** | Entender qué comportamiento es incorrecto y delimitar dónde se encuentra el problema. |
| **Diagnóstico** | Llegar a la causa del problema y no limitarse únicamente a corregir el síntoma. |
| **Solución** | Aplicar una corrección funcional y técnicamente válida. |
| **Calidad del fix** | Mantener una solución clara, razonable y mantenible, evitando parches innecesarios. |
| **Verificación y autonomía** | Comprobar el resultado y desenvolverse con autonomía durante la resolución. |

Se aceptan distintas soluciones siempre que sean correctas y adecuadas para el problema.

No se exige utilizar una API concreta únicamente por ser más moderna. Una solución con RxJS, lifecycle clásico, `@Input`/`@Output`, Reactive Forms, Signals u otras APIs de Angular puede ser válida dependiendo del caso.

**Puntuación máxima: 30 puntos.**

---

# D. EJERCICIO DE CASA — 30 puntos

## Qué se evalúa

| Criterio | Descripción |
|---|---|
| **Listado de usuarios** | Renderizado correcto del listado y gestión adecuada de los elementos. |
| **Alta de usuario** | Creación de usuarios y actualización correcta del estado y de la interfaz. |
| **Formulario y validaciones** | Gestión de campos, reglas de validación, estados y feedback al usuario. |
| **Edición** | Modificación correcta de usuarios existentes manteniendo la consistencia de los datos. |
| **Eliminación y consistencia** | Eliminación correcta sin dejar estados incoherentes ni romper el flujo de la aplicación. |
| **Estado y flujo de datos** | Organización razonable del estado y comunicación clara entre componentes. |
| **Organización y calidad Angular** | Tipado, responsabilidades, naming y uso adecuado de las herramientas del framework. |
| **Testing** | Al menos una prueba útil y relacionada con un comportamiento relevante de la aplicación. |

Se valorará especialmente que la solución sea sencilla, clara y adecuada al alcance solicitado. No se premia añadir complejidad innecesaria.

**Puntuación máxima: 30 puntos.**

---

# E. SISTEMA DE NIVELES

| Puntuación total | Nivel | Interpretación |
|---:|---|---|
| **0–49** | **Bajo** | Existen carencias relevantes en fundamentos o en la resolución práctica de problemas Angular. |
| **50–74** | **Medio** | Base funcional y capacidad para trabajar con Angular con una autonomía razonable. |
| **75–100** | **Alto** | Buen dominio general de Angular y capacidad para resolver problemas y tomar decisiones técnicas razonables. |

## Mínimos prácticos

Para evitar que un resultado teórico alto compense completamente una parte práctica débil, se aplican los siguientes mínimos:

### Para obtener nivel Medio

- Live coding: **mínimo 10/30**.
- Ejercicio de casa: **mínimo 12/30**.

### Para obtener nivel Alto

- Live coding: **mínimo 20/30**.
- Ejercicio de casa: **mínimo 20/30**.
- Parte teórica total: **mínimo 20/40**.

Si la puntuación global alcanza un nivel pero no se cumplen sus mínimos, se asignará el nivel inmediatamente inferior.

---

# F. RESUMEN DE RESULTADOS

| Bloque | Puntuación |
|---|---:|
| Test general | ____ / 20 |
| Análisis de código | ____ / 20 |
| Live coding | ____ / 30 |
| Ejercicio de casa | ____ / 30 |
| **TOTAL** | **____ / 100** |

**Nivel obtenido:** ☐ Bajo &nbsp;&nbsp; ☐ Medio &nbsp;&nbsp; ☐ Alto
