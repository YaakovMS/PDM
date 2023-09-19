// main.js

// Importe as funções do módulo "task.js"
const taskModule = require('./task.js');

// Desestruture as funções que você deseja usar
const { getTasks, addTask, updateTask, removeTask } = taskModule;

// Obtém o array de tarefas
const tasks = getTasks();

// Exibe as informações de cada tarefa no console usando um loop ou forEach
console.log("Lista de Tarefas:");
tasks.forEach(({ id, name, completed }) => {
  console.log(`ID: ${id}, Nome: ${name}, Concluída: ${completed}`);
});

// Adicione uma nova tarefa
addTask("Nova Tarefa");

// Remova uma tarefa (substitua 1 pelo ID da tarefa que deseja remover)
removeTask(1);

// Atualize a propriedade completed de uma tarefa para true (substitua 2 pelo ID da tarefa que deseja atualizar)
updateTask(2, { completed: true });

// Obtenha a lista atualizada de tarefas
const updatedTasks = getTasks();

// Exibe as informações das tarefas atualizadas no console
console.log("Lista de Tarefas Atualizada:");
updatedTasks.forEach(({ id, name, completed }) => {
  console.log(`ID: ${id}, Nome: ${name}, Concluída: ${completed}`);
});
