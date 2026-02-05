<script setup>
import { useRouter} from 'vue-router'
import TaskList from './TaskList.vue';
const router = useRouter();
const type = 'completed'
function home (){
    router.push('/')
}
</script>
<template>
  <div class="bg-[#d6d7ef] h-lvh w-1vw flex flex-col justify-start">
  <div class="bg-[#9395d3] h-20 w-lvw flex items-center justify-start">
    
    <img @click="home" class="w-10 h-10 ml-2 mr-5" src="\src\resource\arrow-pointing-to-left.png" >
    <h1 class="font-serif text-white text-[25px] ml-2">Completed Task</h1>
  </div>
  
  <TaskList class="h-4/5 mt-0 overflow-y-auto parent-class "
  :list-type="type"></TaskList>
  
  </div>
  </template>
  <style>
</style>