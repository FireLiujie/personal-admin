const home = () => import('@/views/Home')

export default [
    {
        path: '/home',
        name: 'home',
        component: home,
        meta: {
            title: '主页'
        }
    }
]