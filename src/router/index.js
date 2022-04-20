import { createRouter, createWebHashHistory } from '@ionic/vue-router';
//import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import TaskTab from '../views/TaskTab.vue'

const routes /*: Array<RouteRecordRaw> */ = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage, TaskTab,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/TaskTab.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/SearchTab.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/InformationTab.vue')
      },
      {
        path: 'assigned',
        component: () => import('@/views/TaskPages/AssignedReports.vue')
      },
      {
        path: 'assigned',
        component: () => import('@/views/TaskPages/FinishedReports.vue')
      },
      {
        path: 'assigned',
        component: () => import('@/views/TaskPages/KnowledgeBase.vue')
      },
      {
        path: 'assigned',
        component: () => import('@/views/TaskPages/SettingsPage.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
