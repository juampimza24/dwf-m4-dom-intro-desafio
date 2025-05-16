document.addEventListener("DOMContentLoaded", () => {
  const lista = document.querySelector("ul.lista");

  // Paso 1: Eliminar elementos existentes
  lista.innerHTML = "";

  // Paso 2: Datos dinámicos
  const cosasQueAprendimos = [
    { tema: "terminal", class: "" },
    { tema: "node", class: "" },
    { tema: "oop", class: "" },
    { tema: "typescript", class: "" },
    { tema: "css", class: "" },
    { tema: "dom", class: "special" },
  ];

  // Paso 3: Crear elementos nuevos
  cosasQueAprendimos.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.tema;

    if (item.class.trim()) {
      // Filtra clases vacías
      li.className = item.class; // Asignación directa
    }

    lista.appendChild(li);
  });
});
