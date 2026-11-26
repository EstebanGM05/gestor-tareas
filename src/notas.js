export const alumnos = [
  { nombre: "Ana", nota: 7.5 },
  { nombre: "Luis", nota: 4.2 },
  { nombre: "Marta", nota: 9 },
  { nombre: "Pablo", nota: 5 },
  { nombre: "Sara", nota: 3.8 },
];

export function calcularMedia(alumnos) {
    let media = 0;
    alumnos.forEach(alumno => {
        media += alumno.nota;
    });
    return media / alumnos.length;
};

export function contarAprobados(alumnos) {
    let aprobados = 0;
    alumnos.forEach(alumno => {
        if (alumno.nota >= 5) {
            aprobados++;
        }
    });
    return aprobados;
}