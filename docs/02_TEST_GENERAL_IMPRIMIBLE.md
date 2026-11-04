# 02 · Test general

Marca una única opción por pregunta.

## Pregunta 1
Una regla de negocio se utiliza desde varios componentes. ¿Dónde debería residir normalmente?

- [ ] **A)** En el template del componente que se renderiza primero.
- [ ] **B)** En un pipe impuro para que se ejecute en cada comprobación.
- [ ] **C)** En un servicio o fachada inyectable con una responsabilidad clara.
- [ ] **D)** Duplicada en cada componente para evitar dependencias.

---

## Pregunta 2
¿Qué implica normalmente declarar un servicio con providedIn: 'root'?

- [ ] **A)** Queda disponible en el inyector raíz y puede eliminarse del bundle si no se usa.
- [ ] **B)** Se crea una instancia nueva por cada componente.
- [ ] **C)** Solo puede inyectarse desde el componente raíz.
- [ ] **D)** Se instancia obligatoriamente durante el arranque.

---

## Pregunta 3
¿Cuál es la forma habitual de comunicación entre un componente padre y uno hijo?

- [ ] **A)** El hijo accede directamente a las propiedades privadas del padre.
- [ ] **B)** Ambos modifican directamente el mismo elemento del DOM.
- [ ] **C)** Solo puede hacerse mediante el Router.
- [ ] **D)** El padre pasa datos mediante inputs y el hijo comunica eventos mediante outputs.

---

## Pregunta 4
¿Qué caracteriza a un componente standalone?

- [ ] **A)** No puede convivir con código basado en NgModules.
- [ ] **B)** Declara sus dependencias en imports y no necesita estar declarado en un NgModule.
- [ ] **C)** Siempre se carga de forma lazy.
- [ ] **D)** Se registra automáticamente como elemento web.

---

## Pregunta 5
¿Cuál es la diferencia más relevante entre el constructor y ngOnInit?

- [ ] **A)** El constructor se ejecuta al crear la instancia y permite recibir dependencias; ngOnInit se ejecuta después de inicializar los inputs.
- [ ] **B)** No existe diferencia práctica.
- [ ] **C)** ngOnInit se ejecuta antes que el constructor.
- [ ] **D)** El constructor solo se permite en servicios.

---

## Pregunta 6
¿Cuándo suelen ser una buena elección los Reactive Forms?

- [ ] **A)** Solo cuando no existe ninguna validación.
- [ ] **B)** Únicamente para formularios generados por el backend.
- [ ] **C)** Nunca en componentes standalone.
- [ ] **D)** Cuando se necesita un formulario complejo, tipado, validable y fácil de probar.

---

## Pregunta 7
¿Qué devuelve normalmente HttpClient.get<T>()?

- [ ] **A)** Un T disponible de forma síncrona.
- [ ] **B)** Una Promise que no puede cancelarse.
- [ ] **C)** Un Observable<T>; la petición se ejecuta al suscribirse.
- [ ] **D)** Una Signal<T> obligatoriamente.

---

## Pregunta 8
¿Para qué encaja especialmente un interceptor HTTP?

- [ ] **A)** Para dibujar componentes dinámicamente.
- [ ] **B)** Para aplicar preocupaciones transversales como autenticación, logging o tratamiento común de errores.
- [ ] **C)** Para sustituir el Router.
- [ ] **D)** Para validar formularios sin controles.

---

## Pregunta 9
¿Qué opción permite cargar una pantalla solo cuando se navega a su ruta?

- [ ] **A)** Importar el componente arriba del archivo y usar component.
- [ ] **B)** Añadir el componente a styles.scss.
- [ ] **C)** Crear el componente dentro de un interceptor.
- [ ] **D)** Usar loadComponent o loadChildren con un import dinámico.

---

## Pregunta 10
¿Qué hace AsyncPipe al usar observable$ | async?

- [ ] **A)** Convierte el Observable en una petición HTTP.
- [ ] **B)** Bloquea el hilo hasta recibir un valor.
- [ ] **C)** Se suscribe, expone el último valor, actualiza la vista y libera la suscripción al destruirse.
- [ ] **D)** Convierte permanentemente el Observable en Signal.

---

## Pregunta 11
¿Para qué debería usarse principalmente computed()?

- [ ] **A)** Para derivar un valor de solo lectura a partir de otras signals.
- [ ] **B)** Para modificar varias signals como efecto secundario.
- [ ] **C)** Para reemplazar todos los servicios.
- [ ] **D)** Para crear listeners del DOM manualmente.

---

## Pregunta 12
¿Cuál es la comparación más precisa entre Signal y Observable?

- [ ] **A)** Son exactamente lo mismo y siempre se intercambian sin coste.
- [ ] **B)** Signal representa bien estado reactivo actual; Observable modela secuencias asíncronas con operadores y cancelación.
- [ ] **C)** Observable solo sirve para eventos del DOM.
- [ ] **D)** Signal solo puede contener números.

---

## Pregunta 13
¿Cuál es el propósito de track en un bloque @for?

- [ ] **A)** Ordenar automáticamente la colección.
- [ ] **B)** Convertir el bucle en lazy loading.
- [ ] **C)** Indicar la identidad de cada elemento para reutilizar correctamente nodos y estado del DOM.
- [ ] **D)** Ejecutar change detection profundo sobre cada objeto.

---

## Pregunta 14
En un componente OnPush, ¿qué situación provoca normalmente que Angular revise su vista?

- [ ] **A)** Solo recargar completamente el navegador.
- [ ] **B)** Cualquier mutación profunda aunque se conserve la misma referencia.
- [ ] **C)** Únicamente llamar a detectChanges desde cada método.
- [ ] **D)** Un nuevo input, un evento en su subárbol, una signal leída que cambia o una marca explícita.

---

## Pregunta 15
¿Qué problema resuelve takeUntilDestroyed()?

- [ ] **A)** Convierte cualquier Observable en una Promise.
- [ ] **B)** Completa una suscripción vinculándola al ciclo de vida de destrucción del contexto Angular.
- [ ] **C)** Evita que HttpClient envíe cabeceras.
- [ ] **D)** Fuerza la ejecución síncrona de RxJS.

---

## Pregunta 16
Al probar un servicio que depende de otro servicio HTTP, ¿qué enfoque es más adecuado en una prueba unitaria?

- [ ] **A)** Sustituir la dependencia por un stub/mock controlado y verificar comportamiento e interacciones.
- [ ] **B)** Llamar siempre al backend real.
- [ ] **C)** Desactivar TypeScript para que el test pase.
- [ ] **D)** Probar solo que el archivo existe.

---

## Pregunta 17
¿Qué aporta principalmente un bloque @defer?

- [ ] **A)** Ejecutar todas las peticiones HTTP en paralelo.
- [ ] **B)** Sustituir la navegación del Router.
- [ ] **C)** Desactivar la validación de templates.
- [ ] **D)** Cargar dependencias del bloque en un chunk separado cuando se cumpla el trigger.

---

## Pregunta 18
¿Cuál es una afirmación correcta sobre Signal Forms en Angular 22?

- [ ] **A)** Es la única API de formularios permitida y Reactive Forms ha sido eliminado.
- [ ] **B)** Es una API estable basada en signals; Reactive Forms sigue siendo una opción sólida, especialmente en código existente.
- [ ] **C)** Solo funciona con NgModules.
- [ ] **D)** No permite validación ni tipado.

---

## Pregunta 19
¿Para qué sirve resource() dentro del modelo reactivo de Angular?

- [ ] **A)** Para representar operaciones asíncronas con valor, estado de carga, error y cancelación reactiva.
- [ ] **B)** Para registrar rutas estáticas.
- [ ] **C)** Para evitar por completo el uso de HTTP.
- [ ] **D)** Para crear estilos globales.

---

## Pregunta 20
Recibes HTML introducido por un usuario. ¿Cuál es la práctica más segura?

- [ ] **A)** Aplicar bypassSecurityTrustHtml siempre para que Angular no lo modifique.
- [ ] **B)** Concatenarlo en el template mediante eval.
- [ ] **C)** Evitar renderizar HTML no confiable; sanearlo con una política fiable y no eludir la seguridad sin garantías.
- [ ] **D)** Guardarlo en una Signal elimina el riesgo.

---
