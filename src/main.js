import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'


import App from './App.vue'
import TeamList from "@/components/teams/TeamList";
import UserList from "@/components/users/UserList";
import TeamMembers from "@/components/teams/TeamMembers";
import NotFound from "@/components/nav/NotFound";
import TeamsFooter from "@/components/teams/TeamsFooter";
import UserFooter from "@/components/users/UserFooter";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', redirect:'/teams'},
        { name: 'teams', path: '/teams', components: {default: TeamList, footer: TeamsFooter} , children: [
        { name: 'team-members', path: ':teamId', component: TeamMembers, props: true },
            ] },
        { path: '/users', components: {default: UserList, footer: UserFooter},
        beforeEnter(to, from, next) {
            console.log('users beforeEnter')
            console.log(to, from)
            next()
        }},

        {path: '/:notFound(.*)', component: NotFound}
    ],
    scrollBehavior(to, from,savedPosition) {
        console.log(to, from, savedPosition)
        if (savedPosition) {
            return  savedPosition;
        }
        return {left: 0, top:0}
    }
})


router.beforeEach(function(to,from, next) {
    console.log('Global BeforeEach')
    console.log(to, from)
    next()
    // if (to.name === 'team-members')
    // {
    //     next()
    // } else {
    //     next({name: 'team-members', params: {teamId: 't2'}})
    // }
})

router.afterEach(function(to, from) {
    console.log('Global AfterEach')
    console.log(to, from)
})

const app = createApp(App)
app.use(router),
app.mount('#app');
