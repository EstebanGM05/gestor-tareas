import { alumnos, calcularMedia, contarAprobados } from "./notas.js";

export function renderNotas() {
  const contenedor = document.querySelector("#app");
  if (!contenedor) return;

  contenedor.replaceChildren();

  const alumnosOrdenados = alumnos.toSorted((a, b) => b.nota - a.nota);

  const tabla = document.createElement("table");
  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");

  const thAlumno = document.createElement("th");
  thAlumno.textContent = "Alumno";
  const thNota = document.createElement("th");
  thNota.textContent = "Nota";

  trHead.append(thAlumno, thNota);
  thead.append(trHead);
  tabla.append(thead);

  const tbody = document.createElement("tbody");
  alumnosOrdenados.forEach(alumno => {
    const tr = document.createElement("tr");

    const tdNombre = document.createElement("td");
    tdNombre.textContent = alumno.nombre;

    const tdNota = document.createElement("td");
    tdNota.textContent = alumno.nota;

    if (alumno.nota >= 5) {
      tr.classList.add("aprobado");
    } else {
      tr.classList.add("suspenso");
    }

    tr.append(tdNombre, tdNota);
    tbody.append(tr);
  });

  tabla.append(tbody);
  contenedor.append(tabla);
  const resumen = document.createElement("p");
  const media = calcularMedia(alumnos);
  const aprobados = contarAprobados(alumnos);
  resumen.textContent = `Aprobados: ${aprobados} / ${alumnos.length} | Nota media: ${media.toFixed(2)}`;
  contenedor.append(resumen);
}