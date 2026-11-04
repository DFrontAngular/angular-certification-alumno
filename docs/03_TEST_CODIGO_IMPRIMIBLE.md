# 03 · Test de código

Marca una única opción por pregunta.

## Pregunta 1
¿Qué problema principal tiene este método?

```ts
items = signal<Item[]>([]);

add(item: Item) {
  this.items().push(item);
}
```

- [ ] **A)** signal no admite arrays.
- [ ] **B)** push solo funciona con Observables.
- [ ] **C)** Falta inyectar ChangeDetectorRef en todos los casos.
- [ ] **D)** Se muta el array conservando la referencia y no se notifica mediante set/update.

**Justificación breve:**

>

---

## Pregunta 2
¿Qué está mal en el computed?

```ts
count = signal(2);

double = computed(() => this.count * 2);
```

- [ ] **A)** La Signal debe leerse llamándola: this.count().
- [ ] **B)** computed solo puede utilizarse en servicios.
- [ ] **C)** Debe usarse async pipe dentro de TypeScript.
- [ ] **D)** Una Signal no puede contener números.

**Justificación breve:**

>

---

## Pregunta 3
El hijo OnPush no refleja siempre el cambio de nombre. ¿Cuál es la causa más probable?

```ts
// padre.ts
user = { id: 1, name: 'Ana' };

rename() {
  this.user.name = 'María';
}

// padre.html
<app-user-card [user]="user" />
```

- [ ] **A)** Los inputs no admiten objetos.
- [ ] **B)** OnPush impide todos los eventos click.
- [ ] **C)** El padre conserva la misma referencia; debería crear un nuevo objeto.
- [ ] **D)** El nombre debe guardarse en localStorage.

**Justificación breve:**

>

---

## Pregunta 4
La lista puede reordenarse y cada fila contiene un input editable. ¿Qué mejorarías?

```ts
@for (item of sortedItems(); track $index) {
  <app-editable-row [item]="item" />
}
```

- [ ] **A)** Nada: $index representa siempre la identidad del elemento.
- [ ] **B)** Usar una identidad estable, por ejemplo track item.id.
- [ ] **C)** Eliminar @for y usar un setInterval.
- [ ] **D)** Convertir todos los items en strings.

**Justificación breve:**

>

---

## Pregunta 5
El formulario contiene name, email y role. ¿Qué ocurrirá al ejecutar este código?

```ts
form = this.fb.group({
  name: [''],
  email: [''],
  role: ['Viewer']
});

loadDraft() {
  this.form.setValue({ name: 'Ana' });
}
```

- [ ] **A)** Actualiza name y mantiene automáticamente el resto.
- [ ] **B)** setValue solo funciona con Template-driven Forms.
- [ ] **C)** El formulario se convierte en inválido de forma permanente.
- [ ] **D)** setValue exige todos los controles y lanzará un error; puede usarse patchValue o pasar el objeto completo.

**Justificación breve:**

>

---

## Pregunta 6
¿Qué problema de diseño puede aparecer al cambiar rápidamente de ruta?

```ts
this.route.paramMap.subscribe(params => {
  const id = params.get('id')!;
  this.api.getUser(id).subscribe(user => {
    this.user.set(user);
  });
});
```

- [ ] **A)** paramMap no es un Observable.
- [ ] **B)** Las suscripciones anidadas dificultan limpieza y permiten que una petición antigua sobrescriba una nueva.
- [ ] **C)** HttpClient no puede usarse dentro de componentes.
- [ ] **D)** Las Signals no pueden actualizarse desde RxJS.

**Justificación breve:**

>

---

## Pregunta 7
El componente se crea y destruye al cambiar de pestaña. ¿Qué falta?

```ts
ngOnInit() {
  interval(1000).subscribe(() => {
    this.ticks.update(value => value + 1);
  });
}
```

- [ ] **A)** Liberar la suscripción, por ejemplo con takeUntilDestroyed, AsyncPipe o unsubscribe en ngOnDestroy.
- [ ] **B)** Nada: interval se detiene al destruir el componente.
- [ ] **C)** Cambiar interval por JSON.parse.
- [ ] **D)** Añadir una segunda suscripción para compensar.

**Justificación breve:**

>

---

## Pregunta 8
users$ es Observable<User[]>. ¿Qué problema tiene el template?

```ts
@for (user of users$; track user.id) {
  <p>{{ user.name }}</p>
}
```

- [ ] **A)** @for no permite arrays.
- [ ] **B)** track solo admite $index.
- [ ] **C)** Debe resolver el Observable, por ejemplo con users$ | async o convirtiéndolo a Signal.
- [ ] **D)** Los nombres no pueden interpolarse.

**Justificación breve:**

>

---

## Pregunta 9
El requisito es que ReportsPage no entre en el bundle inicial. ¿Qué falla?

```ts
import { ReportsPage } from './reports/reports.page';

export const routes: Routes = [
  { path: 'reports', component: ReportsPage }
];
```

- [ ] **A)** La ruta no puede tener path.
- [ ] **B)** El import es estático; debería usarse loadComponent con import dinámico.
- [ ] **C)** Routes solo funciona dentro de NgModules.
- [ ] **D)** ReportsPage debe ser un pipe.

**Justificación breve:**

>

---

## Pregunta 10
content procede de un campo editable por usuarios. ¿Qué riesgo existe?

```ts
trustedHtml = computed(() =>
  this.sanitizer.bypassSecurityTrustHtml(this.content())
);

// template
<div [innerHTML]="trustedHtml()"></div>
```

- [ ] **A)** Se está marcando contenido no confiable como seguro y se eluden protecciones frente a XSS.
- [ ] **B)** Ninguno: bypassSecurityTrustHtml sanea el contenido.
- [ ] **C)** computed elimina todas las etiquetas HTML.
- [ ] **D)** innerHTML solo acepta Observables.

**Justificación breve:**

>

---
