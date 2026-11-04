        import { AssessmentQuestion } from './assessment.model';

        export const CODE_QUESTIONS: readonly AssessmentQuestion[] = [
  {
    "id": "C01",
    "area": "Signals",
    "difficulty": "Básico",
    "prompt": "¿Qué problema principal tiene este método?",
    "code": "items = signal<Item[]>([]);\n\nadd(item: Item) {\n  this.items().push(item);\n}",
    "options": [
      {
        "id": "A",
        "text": "signal no admite arrays."
      },
      {
        "id": "B",
        "text": "push solo funciona con Observables."
      },
      {
        "id": "C",
        "text": "Falta inyectar ChangeDetectorRef en todos los casos."
      },
      {
        "id": "D",
        "text": "Se muta el array conservando la referencia y no se notifica mediante set/update."
      }
    ]
  },
  {
    "id": "C02",
    "area": "Signals",
    "difficulty": "Básico",
    "prompt": "¿Qué está mal en el computed?",
    "code": "count = signal(2);\n\ndouble = computed(() => this.count * 2);",
    "options": [
      {
        "id": "A",
        "text": "La Signal debe leerse llamándola: this.count()."
      },
      {
        "id": "B",
        "text": "computed solo puede utilizarse en servicios."
      },
      {
        "id": "C",
        "text": "Debe usarse async pipe dentro de TypeScript."
      },
      {
        "id": "D",
        "text": "Una Signal no puede contener números."
      }
    ]
  },
  {
    "id": "C03",
    "area": "Change detection",
    "difficulty": "Medio",
    "prompt": "El hijo OnPush no refleja siempre el cambio de nombre. ¿Cuál es la causa más probable?",
    "code": "// padre.ts\nuser = { id: 1, name: 'Ana' };\n\nrename() {\n  this.user.name = 'María';\n}\n\n// padre.html\n<app-user-card [user]=\"user\" />",
    "options": [
      {
        "id": "A",
        "text": "Los inputs no admiten objetos."
      },
      {
        "id": "B",
        "text": "OnPush impide todos los eventos click."
      },
      {
        "id": "C",
        "text": "El padre conserva la misma referencia; debería crear un nuevo objeto."
      },
      {
        "id": "D",
        "text": "El nombre debe guardarse en localStorage."
      }
    ]
  },
  {
    "id": "C04",
    "area": "Templates",
    "difficulty": "Medio",
    "prompt": "La lista puede reordenarse y cada fila contiene un input editable. ¿Qué mejorarías?",
    "code": "@for (item of sortedItems(); track $index) {\n  <app-editable-row [item]=\"item\" />\n}",
    "options": [
      {
        "id": "A",
        "text": "Nada: $index representa siempre la identidad del elemento."
      },
      {
        "id": "B",
        "text": "Usar una identidad estable, por ejemplo track item.id."
      },
      {
        "id": "C",
        "text": "Eliminar @for y usar un setInterval."
      },
      {
        "id": "D",
        "text": "Convertir todos los items en strings."
      }
    ]
  },
  {
    "id": "C05",
    "area": "Formularios",
    "difficulty": "Medio",
    "prompt": "El formulario contiene name, email y role. ¿Qué ocurrirá al ejecutar este código?",
    "code": "form = this.fb.group({\n  name: [''],\n  email: [''],\n  role: ['Viewer']\n});\n\nloadDraft() {\n  this.form.setValue({ name: 'Ana' });\n}",
    "options": [
      {
        "id": "A",
        "text": "Actualiza name y mantiene automáticamente el resto."
      },
      {
        "id": "B",
        "text": "setValue solo funciona con Template-driven Forms."
      },
      {
        "id": "C",
        "text": "El formulario se convierte en inválido de forma permanente."
      },
      {
        "id": "D",
        "text": "setValue exige todos los controles y lanzará un error; puede usarse patchValue o pasar el objeto completo."
      }
    ]
  },
  {
    "id": "C06",
    "area": "RxJS",
    "difficulty": "Alto",
    "prompt": "¿Qué problema de diseño puede aparecer al cambiar rápidamente de ruta?",
    "code": "this.route.paramMap.subscribe(params => {\n  const id = params.get('id')!;\n  this.api.getUser(id).subscribe(user => {\n    this.user.set(user);\n  });\n});",
    "options": [
      {
        "id": "A",
        "text": "paramMap no es un Observable."
      },
      {
        "id": "B",
        "text": "Las suscripciones anidadas dificultan limpieza y permiten que una petición antigua sobrescriba una nueva."
      },
      {
        "id": "C",
        "text": "HttpClient no puede usarse dentro de componentes."
      },
      {
        "id": "D",
        "text": "Las Signals no pueden actualizarse desde RxJS."
      }
    ]
  },
  {
    "id": "C07",
    "area": "RxJS y ciclo de vida",
    "difficulty": "Medio",
    "prompt": "El componente se crea y destruye al cambiar de pestaña. ¿Qué falta?",
    "code": "ngOnInit() {\n  interval(1000).subscribe(() => {\n    this.ticks.update(value => value + 1);\n  });\n}",
    "options": [
      {
        "id": "A",
        "text": "Liberar la suscripción, por ejemplo con takeUntilDestroyed, AsyncPipe o unsubscribe en ngOnDestroy."
      },
      {
        "id": "B",
        "text": "Nada: interval se detiene al destruir el componente."
      },
      {
        "id": "C",
        "text": "Cambiar interval por JSON.parse."
      },
      {
        "id": "D",
        "text": "Añadir una segunda suscripción para compensar."
      }
    ]
  },
  {
    "id": "C08",
    "area": "Templates y RxJS",
    "difficulty": "Básico",
    "prompt": "users$ es Observable<User[]>. ¿Qué problema tiene el template?",
    "code": "@for (user of users$; track user.id) {\n  <p>{{ user.name }}</p>\n}",
    "options": [
      {
        "id": "A",
        "text": "@for no permite arrays."
      },
      {
        "id": "B",
        "text": "track solo admite $index."
      },
      {
        "id": "C",
        "text": "Debe resolver el Observable, por ejemplo con users$ | async o convirtiéndolo a Signal."
      },
      {
        "id": "D",
        "text": "Los nombres no pueden interpolarse."
      }
    ]
  },
  {
    "id": "C09",
    "area": "Routing",
    "difficulty": "Medio",
    "prompt": "El requisito es que ReportsPage no entre en el bundle inicial. ¿Qué falla?",
    "code": "import { ReportsPage } from './reports/reports.page';\n\nexport const routes: Routes = [\n  { path: 'reports', component: ReportsPage }\n];",
    "options": [
      {
        "id": "A",
        "text": "La ruta no puede tener path."
      },
      {
        "id": "B",
        "text": "El import es estático; debería usarse loadComponent con import dinámico."
      },
      {
        "id": "C",
        "text": "Routes solo funciona dentro de NgModules."
      },
      {
        "id": "D",
        "text": "ReportsPage debe ser un pipe."
      }
    ]
  },
  {
    "id": "C10",
    "area": "Seguridad",
    "difficulty": "Alto",
    "prompt": "content procede de un campo editable por usuarios. ¿Qué riesgo existe?",
    "code": "trustedHtml = computed(() =>\n  this.sanitizer.bypassSecurityTrustHtml(this.content())\n);\n\n// template\n<div [innerHTML]=\"trustedHtml()\"></div>",
    "options": [
      {
        "id": "A",
        "text": "Se está marcando contenido no confiable como seguro y se eluden protecciones frente a XSS."
      },
      {
        "id": "B",
        "text": "Ninguno: bypassSecurityTrustHtml sanea el contenido."
      },
      {
        "id": "C",
        "text": "computed elimina todas las etiquetas HTML."
      },
      {
        "id": "D",
        "text": "innerHTML solo acepta Observables."
      }
    ]
  }
];
