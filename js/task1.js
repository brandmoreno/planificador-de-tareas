export function validateTaskForm() {
    const nombre = document.getElementById("fieldText").value.trim();
    const description = document.getElementById("fieldTextarea").value.trim();
    const asignado = document.getElementById("fieldTextAsigned").value.trim();
    const fecha = document.getElementById("fieldTextFecha").value.trim();
    const estado = document.getElementById("fieldSelectEstado").value;

    if (nombre.length <= 8) {
        alert("El nombre debe tener más de 8 caracteres");
        return false;
    }

    if (description.length <= 15) {
        alert("La descripción debe tener más de 15 caracteres");
        return false;
    }

    if (asignado.length <= 8) {
        alert("El nombre de la persona asignada debe tener más de 8 caracteres");
        return false;
    }

    if (fecha.length === 0) {
        alert("La fecha no puede estar vacía");
        return false;
    }
      if (estado === "") {
        alert("Debes seleccionar un estado");
        return false;
    }
    return true;
}

const form = document.getElementById("submit");

form.addEventListener("submit", function(event){
    event.preventDefault();
    if (!validateTaskForm()){
        return 
    }
    console.log("Formulario válido");
});






