# Patrón módulo: gestor de tareas

### 🎯 Objetivo

Usar el patrón módulo para encapsular datos y exponer solo lo necesario mediante métodos públicos.

---

Crearemos un **módulo `TaskManager`** que permita:

1. Agregar tareas.
2. Listar todas las tareas.
3. Marcar una tarea como completada.
4. Eliminar una tarea.

Pero, **los datos (array de tareas) deben ser privados** y accesibles únicamente a través de los métodos del módulo.
