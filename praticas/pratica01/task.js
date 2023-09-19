// tasks.js

// Exemplo de array de tarefas
let tasks = [
    {
      id: 1,
      name: "Fazer compras",
      completed: false
    },
    {
      id: 2,
      name: "Estudar JavaScript",
      completed: true
    },
    {
      id: 3,
      name: "Limpar o quarto",
      completed: false
    }
  ];
  
  // Função para obter as tarefas
  function getTasks() {
    return tasks;
  }
  
  // Função para adicionar uma nova tarefa
  function addTask(taskName) {
    // Encontre o maior ID existente
    const maxId = tasks.reduce((max, task) => (task.id > max ? task.id : max), 0);
  
    // Crie um novo objeto de tarefa com um ID único, nome e completed
    const newTask = {
      id: maxId + 1,
      name: taskName,
      completed: false
    };
  
    // Crie uma cópia do array "tasks" e adicione o novo objeto no final
    const updatedTasks = [...tasks, newTask];
  
    // Atualize o array "tasks" com a cópia atualizada
    tasks = updatedTasks;
  }
  
  // Função para remover uma tarefa com base no ID
  function removeTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
  }
  
  // Função para atualizar uma tarefa com base no ID e no objeto de atualização
  function updateTask(taskId, updatedProperties) {
    const taskToUpdate = tasks.find(task => task.id === taskId);
    if (taskToUpdate) {
      Object.assign(taskToUpdate, updatedProperties);
    }
  }
  
  // Exporte o array de tarefas e as funções para que eles possam ser usados em outros arquivos, se necessário.
  module.exports = {
    getTasks,
    addTask,
    removeTask,
    updateTask
  };
  