import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'
import Login from './login'

Vue.use(Router)


const constantRouterMap = [...Login,...Home] 

let router = new Router({
    routes: constantRouterMap
})

export default router