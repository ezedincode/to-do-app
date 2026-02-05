<script setup>
import { onMounted } from 'vue';
import router from './router';
import { useTodoStore } from '@/stores/todo';

const store = useTodoStore();

store.$subscribe(
  (mutation, state) => {
    console.log('WATCH FIRED:', state.todos);
    localStorage.setItem('todos', JSON.stringify(state.todos));
  },
  { detached: true }
);

 onMounted(() => {
  const stored = localStorage.getItem('todos');
  console.log(stored + 'as');
   if (stored) {
    store.$patch({
      todos: JSON.parse(stored)
    });
  }
 }
)
</script>

<template>
<router-view></router-view>
</template>

<style scoped></style>
