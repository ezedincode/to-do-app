<script setup>
import { defineEmits ,ref,computed,onMounted} from 'vue';
import {useRouter,useRoute} from 'vue-router';
import { useTodoStore } from '@/stores/todo';
const emit = defineEmits(['toDoAdd']);
const todo = ref(null);
const detail=ref("");
const router = useRouter();
const route = useRoute();
const store = useTodoStore();
 
onMounted(() => {
  const id = route.params.id;
  const found = store.getTodoById(id);

  if(!found){
    router.push('/');
    return;
  }
  todo.value = {...found};
});

function edit(){
const title = todo.value.title?.trim();
const detail = todo.value.detail?.trim();
if(!title || !detail){
  alert('Please fill in both Title and Detail.');
  return;
}

  store.updateTodo(todo.value);
  router.push('/');
};
function routeTOhome (){
    router.push('/');
}
const item = computed(() => 
  store.items.find(item => item.id === Number(route.params.id))
)

</script>
<template>
  <div class="bg-white h-lvh w-1vw flex flex-col justify-start gap-20">
  <div class="bg-[#9395d3] h-20 w-lvw flex items-center justify-start">
    
    <img @click="routeTOhome" class="w-10 h-10 ml-2 mr-5" src="\src\resource\arrow-pointing-to-left.png" >
    <h1 class="font-serif text-white text-[25px] ml-2">Edit Task</h1>
  </div>
  <div class="flex flex-col items-center" v-if ="todo">
    <input v-model="todo.title" class="h-12 w-3/4 border-b border-black focus:outline-none" type="text" placeholder="Title">
    <input v-model="todo.detail" class="h-12 w-3/4 border-b border-black focus:outline-none" type="text" placeholder="Detail">
    <button class="h-14 w-3/4 text-white text-[20px] font-serif bg-[#9395d3] mt-[50px] rounded-[10px]" @click="edit">ADD</button>
  </div>
    
  
  
  </div>
  </template>