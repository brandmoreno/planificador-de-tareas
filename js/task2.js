export class TaskManager{
     constructor(){
        this.task = [];
        this.nextId = 1;
    }
     getAllTasks(){
        return this.task

    }

    addTask(task){
        task.id = this.nextId;
        this.task.push(task);
        this.nextId++;
        
    }

getTasksWithStatus(status) {
        return this.task.filter(task => task.estado === status);
    }

    deleteTask(taskId) {
        this.tasks = this.task.filter(task => task.id !== taskId);
    }

    updateTask(taskId, status) {
        const task = this.task.find(task => task.id === taskId);
        if (task) {
            task.estado = status;
        }
    }

    assignTask(taskId, assignee) {
        const task = this.task.find(task => task.id === taskId);
        if (task) {
            task.asignadoA = assignee;
        }
    }
}


