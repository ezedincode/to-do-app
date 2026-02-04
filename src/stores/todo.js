// stores/todo.js
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({ todos: [] }),
  actions: {
    addTodo(todo) {
      this.todos.push(todo)
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
    updateTodo(updatedTodo) {
      const index = this.todos.findIndex((t) => t.id === updatedTodo.id)
      if (index !== -1) {
        this.todos[index] = updatedTodo
      }
    },
    getTodoById(id) {
      return this.todos.find((todo) => todo.id === Number(id))
    },
  },
})
