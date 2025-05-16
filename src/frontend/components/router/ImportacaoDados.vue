<template>
  <!-- Cole seu template aqui, o que você enviou -->
  <div>
    <!-- Seu template completo -->
    <!-- Vou usar seu template direto dentro dessa div -->
    <!-- IMPORTANTE: ajuste as variáveis no script -->
    <div v-if="telaEtapas.includes(tela)" class="importacao-container">
      <!-- seu conteúdo copiado -->
      <!-- ... -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ControleImportacao',
  data() {
    return {
      tela: '', // atual tela da etapa
      telaEtapas: ['importarPeriodo', 'importarDisciplinas', 'importarTurmas', 'importarUsuarios', 'importarVinculos'],
      etapaAtual: 0,
      nomeEtapas: ['Período Letivo', 'Disciplinas', 'Turmas', 'Usuários', 'Vínculos'],
      arquivoSelecionado: null,
      processoVisualizando: false,
      anoLetivoInicio: null,
      anoLetivoTermino: null,
      periodoInicio: null,
      periodoTermino: null,
      listaDisciplinas: [],
      listaTurmas: [],
      listaUsuarios: [],
      listaVinculos: [],
      paginaAtual: 0,
      listaAtual: null,
    };
  },
  methods: {
    truncarNome(nome) {
      if (nome.length > 20) {
        return nome.substring(0, 17) + '...';
      }
      return nome;
    },
    uploadArquivo(event) {
      this.arquivoSelecionado = event.target.files[0];
    },
    proximaEtapa() {
      if (this.etapaAtual < this.telaEtapas.length - 1) {
        this.etapaAtual++;
        this.tela = this.telaEtapas[this.etapaAtual];
      }
    },
    mudarPagina(pagina) {
      this.paginaAtual = pagina;
    },
    limiteDePagina(lista) {
      const inicio = this.paginaAtual * 5;
      return lista.slice(inicio, inicio + 5);
    },
    formatarData(data) {
      if (!data) return '';
      const d = new Date(data);
      return d.toLocaleDateString();
    },
    finalizarProcesso() {
      alert('Processo finalizado!');
      this.mudarTela('controleDados');
    },
    mudarTela(nomeTela) {
      this.tela = nomeTela;
    }
  },
  created() {
    this.tela = this.telaEtapas[0];
    this.listaAtual = this.listaDisciplinas; // Exemplo inicial, ajuste conforme lógica
  },
  watch: {
    etapaAtual(novaEtapa) {
      switch (novaEtapa) {
        case 1:
          this.listaAtual = this.listaDisciplinas;
          break;
        case 2:
          this.listaAtual = this.listaTurmas;
          break;
        case 3:
          this.listaAtual = this.listaUsuarios;
          break;
        case 4:
          this.listaAtual = this.listaVinculos;
          break;
        default:
          this.listaAtual = null;
      }
      this.paginaAtual = 0;
    }
  }
};
</script>

<style scoped>
/* Adicione aqui seu CSS ou importe seus estilos */
</style>
