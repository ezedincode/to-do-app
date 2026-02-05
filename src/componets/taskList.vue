<script setup>
import { computed, onMounted } from 'vue';
import { useTodoStore } from '@/stores/todo';
import {useRouter} from 'vue-router';

const router = useRouter();
const stored = useTodoStore();
onMounted (() => {
    console.log(store);
})
const props = defineProps({
    listType :{type: String, default: 'all'}
})
const store = computed (() => {
    if(props.listType === 'completed'){
        return stored.completedTodos;
    }
    return stored.todos;
})
function completed(id){
  const completedTOdo = stored.todos.find(item => item.id === Number(id));
  if(!completedTOdo){
    alert('todo not found');
    return
  }
  const updateTodo = {
    ...completedTOdo,
    isCompleted: true
  };
  stored.updateTodo(updateTodo);
  console.log(updateTodo.isCompleted)
}
function deleteTodo (id){
  stored.todos = stored.todos.filter(t => t.id !== id);
}
function edit(id){
  router.push(`/edit/${id}`);
  console.log("pushed")
}
</script>

<template>
    <div :class="$attrs.class" > 
    <div v-for="(value,index) in store" :key="index" class="flex flex-col mt-5 items-center flex-1">
    <div class=" h-16 w-11/12 bg-white rounded-[10px] flex justify-between">
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
</template>