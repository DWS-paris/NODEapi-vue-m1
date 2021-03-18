/* 
Imports and config
*/
    // Vue
    import Vue from 'vue';
    import VueRouter from 'vue-router';
    Vue.use(VueRouter)

    // Inner
    import store from '../store'
//


/* 
Router definitions
*/
    // Routes collection
    const routes = [
        {
            path: '/',
            name: 'HomePage',
            component: () => import('../views/HomePage.vue')
        },
        {
            path: '/user',
            name: 'UserPage',
            component: () => import('../views/UserPage.vue')
        },
        {
            path: '/add/post',
            name: 'AddPostPage',
            component: () => import('../views/AddPostPage.vue'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/post/:id',
            name: 'PostPage',
            component: () => import('../views/PostPage.vue')
        }
    ]

    // Create router
    const router = new VueRouter({
        mode: 'history',
        routes
    })
//

/* 
Set up router Auth Guard
*/
    router.beforeEach((to, from, next) => {
        console.log('isAuthenticated',store.getters.isAuthenticated)
        if (to.matched.some((record) => record.meta.requiresAuth)) {
            if (store.getters.isAuthenticated) {
                next();
                return;
            }

            next("/");
        } 
        else {
            next();
        }
    })
//

/* 
Export Router
*/
    export default router
//