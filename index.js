const cosasQueAprendimos = [
  { tema: "terminal", class: "" },
  { tema: "node", class: "" },
  { tema: "oop", class: "" },
  { tema: "typescript", class: "" },
  { tema: "css", class: "" },
  { tema: "dom", class: "special" },
];

function main() {
  const lista = document.querySelector("ul.lista");

  // Eliminar todos los <li> existentes
  lista.innerHTML = "";

  // Crear nuevos <li> basados en el array
  cosasQueAprendimos.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.tema;

    if (item.class.trim()) {
      li.classList.add(item.class);
    }

    lista.appendChild(li);
  });
}

// Ejecutar main cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", main);
