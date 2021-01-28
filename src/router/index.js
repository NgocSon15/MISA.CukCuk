import Vue from 'vue'
import VueRouter from 'vue-router'
import Employee from '../views/employee/EmployeeList.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/employee', component: Employee}
]

const router = new VueRouter({
    routes
})

export default router