import { validateTaskForm } from "./task1.js";
import { TaskManager } from "./task2.js";

const form = document.getElementById("submit");
const taskContainer = document.getElementById("taskContainer");
const taskManager = new TaskManager();

function createTaskCard(task) {
    const card = document.createElement("div");
    card.className = "card mb-3";
    card.style.maxWidth = "310px";

    const body = document.createElement("div");
    body.className = "card-body";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = task.nombre;

    const description = document.createElement("p");
    description.textContent = task.descripcion;

    const assignee = document.createElement("p");
    assignee.textContent = "Asignado a: " + task.asignadoA;

    const date = document.createElement("p");
    date.textContent = "Entrega: " + task.fechaDeEntrega;

    const status = document.createElement("p");
    status.textContent = "Estado: " + task.estado;

    const id = document.createElement("p");
    id.textContent = "ID: " + task.id;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "btn btn-danger";
    deleteButton.textContent = "Eliminar";

    deleteButton.addEventListener("click", function () {
        taskManager.deleteTask(task.id);
        card.remove();
    });

    body.append(id, title, description, assignee, date, status, deleteButton);
    card.append(body);
    return card;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validateTaskForm()) {
        return;
    }

    const task = {
        nombre: document.getElementById("fieldText").value.trim(),
        descripcion: document.getElementById("fieldTextarea").value.trim(),
        asignadoA: document.getElementById("fieldTextAsigned").value.trim(),
        fechaDeEntrega: document.getElementById("fieldTextFecha").value,
        estado: document.getElementById("fieldSelectEstado").value
    };

    taskManager.addTask(task);
    taskContainer.append(createTaskCard(task));
    form.reset();
});