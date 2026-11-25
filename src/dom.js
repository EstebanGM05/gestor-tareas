import { estado } from "./estado.js";
import { contarCompletadas, contarPendientes } from "./tareas.js";
// 3.1
export function render() {
  const lista = document.querySelector("#lista");
  const resumen = document.querySelector("#resumen");
  
  // Limpiamos la lista antes de volver a renderizar
  // 3.2
  lista.replaceChildren();

  // Seleccionamos el h1, actualizamos su texto y añadimos la clase
  const titulo = document.querySelector("h1");
  titulo.textContent = "Gestor de tareas";
  titulo.classList.add("titulo");

  // Iteramos sobre los datos y generamos los nodos correspondientes
  for (const tarea of estado.tareas) {
    const li = document.createElement("li");
    li.textContent = tarea.texto;

    if (tarea.completada) {
      li.classList.add("completada");
    }

    lista.append(li);
  }

  // 1.4
  const pendientes = contarPendientes(estado.tareas);
  const completadas = contarCompletadas(estado.tareas);
  resumen.textContent = `Tareas pendientes: ${pendientes} | Tareas completadas: ${completadas}`;
  // 3.4
  //     { id: 5, texto: "Aprender GIT", completada: false},

}