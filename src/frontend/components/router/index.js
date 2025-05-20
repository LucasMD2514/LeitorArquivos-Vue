import { createRouter, createWebHistory } from 'vue-router';
import ControleDados from '@/components/router/ControleImportacao.vue';


const routes = [
  {
    path: '/controle-dados',     // URL da rota
    name: 'ControleDados',       // Nome da rota
    component: ControleDados,    // Componente que será renderizado
  },
  // você pode adicionar outras rotas aqui
];

const router = createRouter({
  history: createWebHistory(),  // modo de histórico sem # na URL
  routes,
});

export default router;

