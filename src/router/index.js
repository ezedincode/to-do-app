import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/componets/front.vue'
import AddTodo from '@/componets/todoInput.vue'
import edit from '@/componets/edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/', component:Home},
    {path:'/AddTodo',component:AddTodo},
    {path: '/edit/:id' ,component:edit}
  ],
})

export default router
