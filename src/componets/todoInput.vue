<script setup>
import { defineEmits ,ref,computed} from 'vue';
import {useRouter} from 'vue-router';
import { useTodoStore } from '@/stores/todo';
const emit = defineEmits(['toDoAdd']);
const title = ref("");
const detail=ref("");
const router = useRouter();
const store = useTodoStore();
function add(){
    if (!title.value.trim() || !detail.value.trim()) {
    alert('Fill both fields');
    return;
  }
  const newTodo = {
    title: title.value,
    detail:detail.value,
    isCompleted:false,
    id:Date.now()
  };
  console.log('Store methods:', Object.keys(store));
  console.log('addTodo type:', typeof store.addTodo);
    store.todos.push(newTodo);
};
function route (){
    router.push('/');
}
</script>
<template>
  <div class="bg-white h-lvh w-1vw flex flex-col justify-start gap-20">
  <div class="bg-[#9395d3] h-20 w-lvw flex items-center justify-start">
    
    <img @click="route" class="w-10 h-10 ml-2 mr-5" src="\src\resource\arrow-pointing-to-left.png" >
    <h1 class="font-serif text-white text-[25px] ml-2">Add Task</h1>
  </div>
  <div class="flex flex-col items-center">
    <input v-model="title" class="h-12 w-3/4 border-b border-black focus:outline-none" type="text" placeholder="Title">
    <input v-model="detail" class="h-12 w-3/4 border-b border-black focus:outline-none" type="text" placeholder="Detail">
    <button class="h-14 w-3/4 text-white text-[20px] font-serif bg-[#9395d3] mt-[50px] rounded-[10px]" @click="add">ADD</button>
  </div>
    
  
  
  </div>
  </template>