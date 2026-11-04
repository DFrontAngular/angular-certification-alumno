        import { AssessmentQuestion } from './assessment.model';

        export const GENERAL_QUESTIONS: readonly AssessmentQuestion[] = [
  {
    "id": "G01",
    "area": "Arquitectura",
    "difficulty": "Básico",
    "prompt": "Una regla de negocio se utiliza desde varios componentes. ¿Dónde debería residir normalmente?",
    "options": [
      {
        "id": "A",
        "text": "En el template del componente que se renderiza primero."
      },
      {
        "id": "B",
        "text": "En un pipe impuro para que se ejecute en cada comprobación."
      },
      {
        "id": "C",
        "text": "En un servicio o fachada inyectable con una responsabilidad clara."
      },
      {
        "id": "D",
        "text": "Duplicada en cada componente para evitar dependencias."
      }
    ]
  },
  {
    "id": "G02",
    "area": "Inyección de dependencias",
    "difficulty": "Básico",
    "prompt": "¿Qué implica normalmente declarar un servicio con providedIn: 'root'?",
    "options": [
      {
        "id": "A",
        "text": "Queda disponible en el inyector raíz y puede eliminarse del bundle si no se usa."
      },
      {
        "id": "B",
        "text": "Se crea una instancia nueva por cada componente."
      },
      {
        "id": "C",
        "text": "Solo puede inyectarse desde el componente raíz."
      },
      {
        "id": "D",
        "text": "Se instancia obligatoriamente durante el arranque."
      }
    ]
  },
  {
    "id": "G03",
    "area": "Componentes",
    "difficulty": "Básico",
    "prompt": "¿Cuál es la forma habitual de comunicación entre un componente padre y uno hijo?",
    "options": [
      {
        "id": "A",
        "text": "El hijo accede directamente a las propiedades privadas del padre."
      },
      {
        "id": "B",
        "text": "Ambos modifican directamente el mismo elemento del DOM."
      },
      {
        "id": "C",
        "text": "Solo puede hacerse mediante el Router."
      },
      {
        "id": "D",
        "text": "El padre pasa datos mediante inputs y el hijo comunica eventos mediante outputs."
      }
    ]
  },
  {
    "id": "G04",
    "area": "Componentes",
    "difficulty": "Básico",
    "prompt": "¿Qué caracteriza a un componente standalone?",
    "options": [
      {
        "id": "A",
        "text": "No puede convivir con código basado en NgModules."
      },
      {
        "id": "B",
        "text": "Declara sus dependencias en imports y no necesita estar declarado en un NgModule."
      },
      {
        "id": "C",
        "text": "Siempre se carga de forma lazy."
      },
      {
        "id": "D",
        "text": "Se registra automáticamente como elemento web."
      }
    ]
  },
  {
    "id": "G05",
    "area": "Ciclo de vida",
    "difficulty": "Básico",
    "prompt": "¿Cuál es la diferencia más relevante entre el constructor y ngOnInit?",
    "options": [
      {
        "id": "A",
        "text": "El constructor se ejecuta al crear la instancia y permite recibir dependencias; ngOnInit se ejecuta después de inicializar los inputs."
      },
      {
        "id": "B",
        "text": "No existe diferencia práctica."
      },
      {
        "id": "C",
        "text": "ngOnInit se ejecuta antes que el constructor."
      },
      {
        "id": "D",
        "text": "El constructor solo se permite en servicios."
      }
    ]
  },
  {
    "id": "G06",
    "area": "Formularios",
    "difficulty": "Básico",
    "prompt": "¿Cuándo suelen ser una buena elección los Reactive Forms?",
    "options": [
      {
        "id": "A",
        "text": "Solo cuando no existe ninguna validación."
      },
      {
        "id": "B",
        "text": "Únicamente para formularios generados por el backend."
      },
      {
        "id": "C",
        "text": "Nunca en componentes standalone."
      },
      {
        "id": "D",
        "text": "Cuando se necesita un formulario complejo, tipado, validable y fácil de probar."
      }
    ]
  },
  {
    "id": "G07",
    "area": "HTTP y RxJS",
    "difficulty": "Básico",
    "prompt": "¿Qué devuelve normalmente HttpClient.get<T>()?",
    "options": [
      {
        "id": "A",
        "text": "Un T disponible de forma síncrona."
      },
      {
        "id": "B",
        "text": "Una Promise que no puede cancelarse."
      },
      {
        "id": "C",
        "text": "Un Observable<T>; la petición se ejecuta al suscribirse."
      },
      {
        "id": "D",
        "text": "Una Signal<T> obligatoriamente."
      }
    ]
  },
  {
    "id": "G08",
    "area": "HTTP",
    "difficulty": "Básico",
    "prompt": "¿Para qué encaja especialmente un interceptor HTTP?",
    "options": [
      {
        "id": "A",
        "text": "Para dibujar componentes dinámicamente."
      },
      {
        "id": "B",
        "text": "Para aplicar preocupaciones transversales como autenticación, logging o tratamiento común de errores."
      },
      {
        "id": "C",
        "text": "Para sustituir el Router."
      },
      {
        "id": "D",
        "text": "Para validar formularios sin controles."
      }
    ]
  },
  {
    "id": "G09",
    "area": "Routing",
    "difficulty": "Básico",
    "prompt": "¿Qué opción permite cargar una pantalla solo cuando se navega a su ruta?",
    "options": [
      {
        "id": "A",
        "text": "Importar el componente arriba del archivo y usar component."
      },
      {
        "id": "B",
        "text": "Añadir el componente a styles.scss."
      },
      {
        "id": "C",
        "text": "Crear el componente dentro de un interceptor."
      },
      {
        "id": "D",
        "text": "Usar loadComponent o loadChildren con un import dinámico."
      }
    ]
  },
  {
    "id": "G10",
    "area": "Templates y RxJS",
    "difficulty": "Básico",
    "prompt": "¿Qué hace AsyncPipe al usar observable$ | async?",
    "options": [
      {
        "id": "A",
        "text": "Convierte el Observable en una petición HTTP."
      },
      {
        "id": "B",
        "text": "Bloquea el hilo hasta recibir un valor."
      },
      {
        "id": "C",
        "text": "Se suscribe, expone el último valor, actualiza la vista y libera la suscripción al destruirse."
      },
      {
        "id": "D",
        "text": "Convierte permanentemente el Observable en Signal."
      }
    ]
  },
  {
    "id": "G11",
    "area": "Signals",
    "difficulty": "Medio",
    "prompt": "¿Para qué debería usarse principalmente computed()?",
    "options": [
      {
        "id": "A",
        "text": "Para derivar un valor de solo lectura a partir de otras signals."
      },
      {
        "id": "B",
        "text": "Para modificar varias signals como efecto secundario."
      },
      {
        "id": "C",
        "text": "Para reemplazar todos los servicios."
      },
      {
        "id": "D",
        "text": "Para crear listeners del DOM manualmente."
      }
    ]
  },
  {
    "id": "G12",
    "area": "Signals y RxJS",
    "difficulty": "Medio",
    "prompt": "¿Cuál es la comparación más precisa entre Signal y Observable?",
    "options": [
      {
        "id": "A",
        "text": "Son exactamente lo mismo y siempre se intercambian sin coste."
      },
      {
        "id": "B",
        "text": "Signal representa bien estado reactivo actual; Observable modela secuencias asíncronas con operadores y cancelación."
      },
      {
        "id": "C",
        "text": "Observable solo sirve para eventos del DOM."
      },
      {
        "id": "D",
        "text": "Signal solo puede contener números."
      }
    ]
  },
  {
    "id": "G13",
    "area": "Templates",
    "difficulty": "Medio",
    "prompt": "¿Cuál es el propósito de track en un bloque @for?",
    "options": [
      {
        "id": "A",
        "text": "Ordenar automáticamente la colección."
      },
      {
        "id": "B",
        "text": "Convertir el bucle en lazy loading."
      },
      {
        "id": "C",
        "text": "Indicar la identidad de cada elemento para reutilizar correctamente nodos y estado del DOM."
      },
      {
        "id": "D",
        "text": "Ejecutar change detection profundo sobre cada objeto."
      }
    ]
  },
  {
    "id": "G14",
    "area": "Change detection",
    "difficulty": "Medio",
    "prompt": "En un componente OnPush, ¿qué situación provoca normalmente que Angular revise su vista?",
    "options": [
      {
        "id": "A",
        "text": "Solo recargar completamente el navegador."
      },
      {
        "id": "B",
        "text": "Cualquier mutación profunda aunque se conserve la misma referencia."
      },
      {
        "id": "C",
        "text": "Únicamente llamar a detectChanges desde cada método."
      },
      {
        "id": "D",
        "text": "Un nuevo input, un evento en su subárbol, una signal leída que cambia o una marca explícita."
      }
    ]
  },
  {
    "id": "G15",
    "area": "RxJS y ciclo de vida",
    "difficulty": "Medio",
    "prompt": "¿Qué problema resuelve takeUntilDestroyed()?",
    "options": [
      {
        "id": "A",
        "text": "Convierte cualquier Observable en una Promise."
      },
      {
        "id": "B",
        "text": "Completa una suscripción vinculándola al ciclo de vida de destrucción del contexto Angular."
      },
      {
        "id": "C",
        "text": "Evita que HttpClient envíe cabeceras."
      },
      {
        "id": "D",
        "text": "Fuerza la ejecución síncrona de RxJS."
      }
    ]
  },
  {
    "id": "G16",
    "area": "Testing",
    "difficulty": "Medio",
    "prompt": "Al probar un servicio que depende de otro servicio HTTP, ¿qué enfoque es más adecuado en una prueba unitaria?",
    "options": [
      {
        "id": "A",
        "text": "Sustituir la dependencia por un stub/mock controlado y verificar comportamiento e interacciones."
      },
      {
        "id": "B",
        "text": "Llamar siempre al backend real."
      },
      {
        "id": "C",
        "text": "Desactivar TypeScript para que el test pase."
      },
      {
        "id": "D",
        "text": "Probar solo que el archivo existe."
      }
    ]
  },
  {
    "id": "G17",
    "area": "Rendimiento",
    "difficulty": "Medio",
    "prompt": "¿Qué aporta principalmente un bloque @defer?",
    "options": [
      {
        "id": "A",
        "text": "Ejecutar todas las peticiones HTTP en paralelo."
      },
      {
        "id": "B",
        "text": "Sustituir la navegación del Router."
      },
      {
        "id": "C",
        "text": "Desactivar la validación de templates."
      },
      {
        "id": "D",
        "text": "Cargar dependencias del bloque en un chunk separado cuando se cumpla el trigger."
      }
    ]
  },
  {
    "id": "G18",
    "area": "Angular moderno",
    "difficulty": "Alto",
    "prompt": "¿Cuál es una afirmación correcta sobre Signal Forms en Angular 22?",
    "options": [
      {
        "id": "A",
        "text": "Es la única API de formularios permitida y Reactive Forms ha sido eliminado."
      },
      {
        "id": "B",
        "text": "Es una API estable basada en signals; Reactive Forms sigue siendo una opción sólida, especialmente en código existente."
      },
      {
        "id": "C",
        "text": "Solo funciona con NgModules."
      },
      {
        "id": "D",
        "text": "No permite validación ni tipado."
      }
    ]
  },
  {
    "id": "G19",
    "area": "Angular moderno",
    "difficulty": "Alto",
    "prompt": "¿Para qué sirve resource() dentro del modelo reactivo de Angular?",
    "options": [
      {
        "id": "A",
        "text": "Para representar operaciones asíncronas con valor, estado de carga, error y cancelación reactiva."
      },
      {
        "id": "B",
        "text": "Para registrar rutas estáticas."
      },
      {
        "id": "C",
        "text": "Para evitar por completo el uso de HTTP."
      },
      {
        "id": "D",
        "text": "Para crear estilos globales."
      }
    ]
  },
  {
    "id": "G20",
    "area": "Seguridad",
    "difficulty": "Medio",
    "prompt": "Recibes HTML introducido por un usuario. ¿Cuál es la práctica más segura?",
    "options": [
      {
        "id": "A",
        "text": "Aplicar bypassSecurityTrustHtml siempre para que Angular no lo modifique."
      },
      {
        "id": "B",
        "text": "Concatenarlo en el template mediante eval."
      },
      {
        "id": "C",
        "text": "Evitar renderizar HTML no confiable; sanearlo con una política fiable y no eludir la seguridad sin garantías."
      },
      {
        "id": "D",
        "text": "Guardarlo en una Signal elimina el riesgo."
      }
    ]
  }
];
