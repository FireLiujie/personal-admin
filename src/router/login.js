const login = () => import('@/views/Login')

export default [
   {
        path: '/',
        name: 'login',
        component: login,
        meta: {
            title: '登录'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
            title: '登录'
        }
    }
]