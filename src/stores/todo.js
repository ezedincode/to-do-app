// stores/todo.js
import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({ todos: [] }),
  actions: {
    addTodo(todo) {
      this.todos.push(todo);
    },
     deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
  }
});