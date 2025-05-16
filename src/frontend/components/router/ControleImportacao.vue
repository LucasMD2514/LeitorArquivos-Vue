<!-- src/components/ControleDados.vue ou src/views/ControleDados.vue -->
<template>
  <div v-if="tela == 'controleDados'" style="display: flex; justify-content: center; align-items: center;">
    <table class="tabelaDados">
      <thead>
        <tr>
          <th>ID do Processo</th>
          <th>Período Letivo</th>
          <th>Data de Início</th>
          <th>Data de Término</th>
          <th>Status do Envio</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(processo, id) in processos" :key="id">
          <td v-html="processo._id"></td>
          <td v-html="processo.periodoInicio + ' - ' + processo.periodoTermino"></td>
          <td v-html="formatarDataHora(processo.inicio)"></td>
          <td v-html="processo.termino > processo.inicio ? formatarDataHora(processo.termino) : '-'"></td>
          <td style="padding: 0;" v-if="processo.status">
            <p v-html="processo.status"
               class="processoStatus"
               :class="{
                 statusAndamento: processo.status.toLowerCase() == 'em andamento',
                 statusConcluido: processo.status.toLowerCase() == 'concluído'
               }">
            </p>
          </td>
          <td>
            <!-- Coloque botões de ações aqui -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ControleDados",
  data() {
    return {
      tela: "controleDados",
      processos: [] // Substitua com seus dados reais
    };
  },
  methods: {
    formatarDataHora(data) {
      const d = new Date(data);
      return d.toLocaleString("pt-BR"); // ou seu formato preferido
    }
  }
};
</script>

<style scoped>
.tabelaDados {
  border-collapse: collapse;
  width: 100%;
}
.tabelaDados th,
.tabelaDados td {
  border: 1px solid #ddd;
  padding: 8px;
}
.statusAndamento {
  color: orange;
}
.statusConcluido {
  color: green;
}
</style>
