<script setup>
import { useRouter} from 'vue-router'

const router = useRouter();
function home (){
    router.push('/')
}
</script>
<template>
  <div class="bg-white h-lvh w-1vw flex flex-col justify-start gap-20">
  <div class="bg-[#9395d3] h-20 w-lvw flex items-center justify-start">
    
    <img @click="home" class="w-10 h-10 ml-2 mr-5" src="\src\resource\arrow-pointing-to-left.png" >
    <h1 class="font-serif text-white text-[25px] ml-2">Edit Task</h1>
  </div>
  
  
  
  </div>
  </template>