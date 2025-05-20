import { createRouter, createWebHistory } from 'vue-router';
import ControleImportacao from '@/components/router/ImportacaoDados.vue';


const routes = [
  {
    path: '/importacao-container',     // URL da rota
    name: 'ControleImportacao',       // Nome da rota
    component: ControleImportacao,    // Componente que será renderizado
  },
  // você pode adicionar outras rotas aqui
];

const router = createRouter({
  history: createWebHistory(),  // modo de histórico sem # na URL
  routes,
});

export default router;