<script setup>
import { useRouter } from 'vue-router';
import { ref,onMounted, watch, onBeforeMount, onBeforeUnmount} from 'vue';
import { useTodoStore } from '@/stores/todo';
import TaskList from './TaskList.vue';
const emit = defineEmits(['addTodo'])
const router = useRouter();
const store = useTodoStore();
const type = 'all';
function sendtodo (){
  router.push('/AddTodo');
}
 onMounted(() => {
  const stored = localStorage.getItem('todo');
  console.log(stored + 'as');
  if(stored){
    store.todos = JSON.parse(stored);
  }
 }
)
watch(
  () => store.todos,
  (todos) => {
    console.log('WATCH FIRED:', todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  },
  { deep: true }
);
function complete () {
  router.push('/complete')
}
</script>
<template>
  <div class="bg-[#d6d7ef] relative  w-1vw flex flex-col h-screen">
  <div class="bg-[#9395d3] h-20 w-lvw flex items-center justify-between">
    <h1 class="font-serif text-white text-[25px] ml-2">TODO APP</h1>
    <img class="w-10 h-10  mr-2" src="/src/resource/calendar.png" >
  </div>
  <TaskList class="h-4/5 flex-1 overflow-y-auto"
  :list-type="type"
  ></TaskList>
    <button class="absolute  opacity-50 flex items-center justify-center rounded-full w-20 h-20 bg-[#9395d3] left-3/4 top-3/4"
    @click=" sendtodo"> <img src="\src\resource\icons8-plus-24.png" alt="">
</button>
  <footer class="h-[50px] w-1vw bg-white ">
    <div class="flex  items-end justify-around mr-3">
      <div class="">
        <img class="w-5 h-5" src="\src\resource\menu.png" alt="">
        <p  class="text-[15px] text-[#8f8b8b]">All</p>
      </div>
    <div class="flex flex-col items-end">
      <img @click="complete" class="w-5 h-5 mr-5 mt-1" src="\src\resource\check-mark.png" alt="">
      <p class="text-[15px] text-[#8f8b8b]">complete</p>
    </div>
    </div>
  </footer>
  </div>
</template>