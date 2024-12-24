import { createRouter, createWebHistory } from 'vue-router'

import DashboardView from '@/views/DashboardView.vue'
import UsersView from '@/views/UsersView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import SingleProjectView from '@/views/SingleProjectView.vue'
import ReportsView from '@/views/ReportsView.vue'
import UserReportsView from '@/views/UserReportsView.vue'
import CreateReportView from '@/views/CreateReportView.vue'
import LoginView from '@/views/LoginView.vue'
import LogsView from '@/views/LogsView.vue'

const routes = [
    { path: '/', name:'Dashboard', parent:'', component: DashboardView },
    { path: '/users', name:'Users', parent:'', component: UsersView },
    { path: '/projects', name:'Projects', parent:'', component: ProjectsView },
    { path: '/projects/:id', name:'SingleProject', parent:'', component: SingleProjectView },
    { path: '/reports', name:'Reports', parent:'', component: ReportsView },
    { path: '/reports/:id', name:'User Reports', parent:'Reports', component: UserReportsView },
    { path: '/reports/add', name:'Create Report', parent:'Reports', component: CreateReportView },
    { path: '/auth/login', name:'Login', parent:'', component: LoginView },
    { path: '/logs', name:'Logs', parent:'', component: LogsView },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;