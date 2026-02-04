<script setup>
import { useRouter } from 'vue-router';
import { ref,onMounted, watch, onBeforeMount} from 'vue';
import { useTodoStore } from '@/stores/todo';
const emit = defineEmits(['addTodo'])
const router = useRouter();
const store = useTodoStore();
function sendtodo (){
  router.push('/AddTodo');
}
function deleteTodo (id){
  store.todos = store.todos.filter(t => t.id !== id);
}
function edit(id){
  router.push(`/edit/${id}`);
  console.log("pushed")
}
 onMounted(() => {
  const stored = localStorage.getItem('todo');
  if(stored){
    store.addTodo = JSON.parse(stored);
  }
 }
)
onBeforeMount(() =>{
    localStorage.clear();
    localStorage.setItem('todo' ,JSON.stringify(store));
})
function completed(id){
  const completedTOdo = store.todos.find(item => item.id === Number(id));
  if(!completedTOdo){
    alert('todo not found');
    return
  }
  const updateTodo = {
    ...completedTOdo,
    isCompleted: true
  };
  store.updateTodo(updateTodo);
  console.log(updateTodo.isCompleted)
}

</script>
<template>
  <div class="bg-[#d6d7ef] relative  w-1vw flex flex-col h-screen">
  <div class="bg-[#9395d3] h-20 w-lvw flex items-center justify-between">
    <h1 class="font-serif text-white text-[25px] ml-2">TODO APP</h1>
    <img class="w-10 h-10  mr-2" src="/src/resource/calendar.png" >
  </div>
<div class="h-4/5 flex-1 overflow-y-auto">
  
  <div v-for="(value,index) in store.todos" :key="index" class="flex flex-col mt-5 items-center flex-1">
    
    <div class="h-16 w-11/12 bg-white rounded-[10px] flex justify-between">
            <div class="flex flex-col">
                <h3 class="ml-4 mt-1 text-[#9395d3]">{{ value.title}}</h3>
                <p class="ml-4">{{ value.detail }}</p>
            </div>
            <div class="flex gap-6 items-center ">
                <img @click="edit(value.id)" class="w-5 h-5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABs0lEQVR4nO2ZsUoDQRBAnyAIElsj2BhrG7/ARkurWApqYkg0jaXp7GzsTSeW2mlrESG99oYgaOEHKCJqcrIwB+MSDQqB2WQfLCR7ezDvZnaLWYhE/ssEMEnArAI3wAfQAa6BRQJiFtgDukACvImM+/0CLBAAO/L1ExHZB8aBDHAm85cEINGVYN1oiUBKVuafCUCiA9SAewm6qWRmrIukEm6UZG7Ok5kCTuX/BcbLqew90zJPlje7vycOe6zRMm6sYHhP1NXx2kumJs8+gWkMURIBJ1KRuTzwLgEfqbVFtbaK0UwUvGdrXmbK6hBw75nOhE9eZSaxnglXLr9RVxLBZSJly+qe0BL9vm4hSgyQKGGFKGFRYrfP2igxSEZOohglBkiUsEIpShihNGwS1T5rt6PEABkKifU/tGHMtmzGgLZ0MR6klR+chGNJ9ZT0cB1xTcWyhONEAj8Gbj2ZYCQyconiAsyp+VQkG4KEY1MCbvCdNDOPIUgg17+JCKXkpMx0L9a0xLy6dGmKTMO7iGnL0Wyagx9Oq1fgHFiWo9k8La98XJlteNfDQXAF3ElmXJlFIqPOF+i4E2KuRqzFAAAAAElFTkSuQmCC" alt="pencil--v1">
                <img class="w-5 h-5" src="https://img.icons8.com/?size=100&id=102315&format=png&color=000000" @click="deleteTodo(value.id)" alt="">
                <img  @click="completed(value.id)" class="w-5 h-5" src="\src\resource\check-mark.png" alt="">
                <div v-if="value.isCompleted" class="w-2 bg-green-600 h-full rounded-r-[20px]"></div>
                <div v-else="value.isCompleted" class="w-2 bg-red-600 h-full rounded-r-[20px]"></div>
            </div>
            
        </div>
  </div>
  </div>
    <button class="absolute opacity-50 rounded-full w-20 h-20 bg-[#9395d3] left-3/4 top-3/4"
    @click=" sendtodo">
</button>
  
  <footer class="h-[50px] w-1vw bg-white ">
    <div class="flex  items-end justify-around mr-3">
      <div class="">
        <img class="w-5 h-5" src="\src\resource\menu.png" alt="">
        <p  class="text-[15px] text-[#8f8b8b]">All</p>
      </div>
    <div class="flex flex-col items-end">
      <img class="w-5 h-5 mr-5 mt-1" src="\src\resource\check-mark.png" alt="">
      <p class="text-[15px] text-[#8f8b8b]">complete</p>
    </div>
    </div>
  </footer>
  </div>
</template>