import { estado } from "./estado.js";
import { contarPendientes } from "./tareas.js";

export function render() {
  const lista = document.getElementById("lista");
  const resumen = document.querySelector("#resumen");
    lista.replaceChildren();

  for (const tarea of estado.tareas) {
    const li = document.createElement("li");
    li.textContent = tarea.texto;
    if (tarea.completada === true) {
      li.classList.add("completada");
    }
    lista.append(li);
  }

  resumen.textContent = `Tienes ${contarPendientes(estado.tareas)} tareas pendientes`;
}

/* 
1. Línea 5: getElementById no lleva '#' (devuelve null).
2. Línea 9: replaceChildren() está dentro del bucle y borra todo; ponlo fuera.
3. Línea 12: Usaste '=' (asignación) en vez de evaluar; usa 'if (tarea.completada)'.
4. Línea 18: Falta invocar la función pasando los datos: contarPendientes(estado.tareas).
*/