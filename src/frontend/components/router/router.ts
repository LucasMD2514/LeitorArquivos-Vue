import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: () => import('\\components/MainScript.vue') },
        {path: '/control-painel', component: () => import('./ControleImportacao.vue') },
        {path: '/importneitor/:id', component: () => import('./ImportacaoDados.vue'), name: 'process' },

    ]
})
export default router;