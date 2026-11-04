# 05 · Ejercicio de casa: gestión de usuarios

## Momento de realización

El ejercicio se entrega al finalizar el **Día 1** y se realiza entre ambas jornadas.

Puntuación máxima: **30 puntos**.

Debes entregarlo antes o al comienzo del Día 2.

## Objetivo

Completar una funcionalidad pequeña de gestión de usuarios en Angular. Los datos se mantienen en memoria y no se necesita backend.

## Requisitos funcionales

La vista debe permitir:

- Mostrar un listado de usuarios.
- Añadir un usuario.
- Editar un usuario existente.
- Eliminar un usuario mediante una interacción comprensible.
- Reiniciar o actualizar correctamente el formulario después de guardar/cancelar.

Cada usuario contiene:

- `id`
- `name`
- `email`
- `role`: `Admin`, `Editor` o `Viewer`

## Validación mínima

- Nombre obligatorio y con al menos 3 caracteres.
- Correo obligatorio y con formato válido.
- Rol obligatorio.
- Los errores deben mostrarse de forma comprensible cuando corresponda.

## Testing

Añade al menos una prueba unitaria que compruebe comportamiento relevante. Se valora más una prueba de alta/edición/eliminación o del formulario que un test que solo compruebe que el componente se crea.

## Libertad técnica

Puedes modificar el starter y crear los componentes o servicios que necesites. Se admiten, entre otras:

- Signals o RxJS.
- Reactive Forms, Signal Forms o una solución razonable con template-driven forms.
- Inputs/outputs basados en signals o decoradores clásicos.
- Uno o varios componentes.
- Standalone o una estructura con NgModules.

No se exige NgRx, backend, librería visual, persistencia, autenticación ni una arquitectura empresarial completa.
