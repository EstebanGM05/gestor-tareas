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
  // 2.1
  const li1 = document.createElement("li");
  li1.textContent = "Estudiar PHP";
  li1.classList.add("demo");
  const li2 = document.createElement("li");
  li2.textContent = "Estudiar Fol";
  li2.classList.add("demo");
  const li3 = document.createElement("li");
  li3.textContent = "Estudiar Symphony";
  li3.classList.add("demo");
  lista.append(li1,li2,li3);
  // 2.2
  const lis = document.querySelectorAll(".demo");
  lis.forEach((li) => li.textContent = "- " + li.textContent);

// MINI RETOS 2B
// 2B.1 
const prueba = document.getElementById("lista")
console.log(prueba) /* Sin el # funciona, si añado el # da null */
// 2B.2
const prueba2 = document.getElementsByClassName("demo")
console.log(prueba2)
// 2B.3
// prueba2.forEach() dom.js:56 Uncaught TypeError: prueba2.forEach is not a function at render (dom.js:56:9) at main.js:4:1
// 2B.4 
Array.from(prueba2).forEach((li) => {
    li.textContent = li.textContent.replace("- ", "✓ ");
})
// Responde mediante comentarios en el propio código:
  // 1. ¿La HTMLCollection (de getElementsByClassName) es viva o estática?
  // Es VIVA. Esto significa que si añades o eliminas 
  // elementos del DOM que coincidan con la clase después de seleccionarlos, 
  // la colección se actualiza automáticamente para reflejar esos cambios.

  // 2. ¿Y la NodeList que devolvió querySelectorAll en el mini-reto 2?
  // Es ESTÁTICA. Funciona como una "fotografía" o 
  // instantánea tomada en el momento exacto en que ejecutaste querySelectorAll; 
  // si el DOM cambia después, la NodeList no se entera ni se actualiza sola.

}