import {createRouter,createWebHistory} from 'vue-router'
const routes=[{
  path:'/',
  component:() =>import('@/views/sports.vue')
},
{
  path:'/sports',
  component:()=>import('@/views/sports.vue')
},
{
  path:'/login',
  component:()=>import('@/views/login.vue')
},
{
  path:'/register',
  component:()=>import('@/views/register.vue')
},
{
  path:'/userlist',
  component:()=>import('@/views/userlist.vue')
},
{
  path:'/running',
  component:()=>import('@/views/running.vue')
},
{
  path:'/fitness',
  component:()=>import('@/views/fitness.vue')
},
{
  path:'/tabletennis',
  component:()=>import('@/views/tabletennis.vue')
},
{
  path:'/badminton',
  component:()=>import('@/views/badminton.vue')
},
{
  path:'/food',
  component:()=>import('@/views/food.vue')
},
{
  path:'/setting',
  component:()=>import('@/views/setting.vue')
}

]
const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router