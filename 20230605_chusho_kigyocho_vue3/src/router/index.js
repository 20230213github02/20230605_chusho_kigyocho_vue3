import {createRouter, createWebHistory} from 'vue-router'
import ichiran from '../components/0201_ichiran.vue'
// import HelloWorld from '../components/HelloWorld.vue'
const routes = [
    {
        path: '/',
        component: ichiran
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;