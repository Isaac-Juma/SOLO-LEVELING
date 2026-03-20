
import { createWebHistory, createRouter } from 'vue-router';
import dashBoard from '../views/dashBoard.vue';



const routes = [
    { path:'/dashBoard', name: 'dashBoard', Component: dashBoard },


];

const router = createRouter( {
    history: createWebHistory(),
    routes,
});

export default router;