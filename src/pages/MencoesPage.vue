<template>
  <q-page class="row">
    <q-table
      :grid="$q.screen.lt.md"
      :rows="rows"
      :columns="cols"
      row-key="name"
      @row-dblclick="AbrirDetalhes"
    >
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { IAtividades } from "src/interfaces/IAtividades";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MencoesPage",
  components: {},
  setup() {
    const rows = ref<any[]>([
      {
        Id: 1500,
        Tipo: "Task",
        Titulo: "Taraas as ",
        Mensagem: " HAGgahg ahsghagshagshjags igasgi agsiuagsiasg i uagsiuga siu",
      },
      {
        Id: 1502,
        Tipo: "User Story",
        Titulo: "Eventos AAV ",
        Mensagem: "Tags igasgi agsiuagsiasg i uagsiuga siu",
      },
    ]);

    const cols = ref<any[]>([
      {
        name: (row: any) => row.Id,
        required: true,
        label: "ID",
        align: "right",
        field: (row: any) => row.Id,
        format: (val: any) => `${val}`,
      },
      {
        name: (row: any) => row.Tipo,
        required: true,
        label: "Tipo",
        align: "right",
        field: (row: any) => row.Tipo,
        format: (val: any) => `${val}`,
      },
      {
        name: (row: any) => row.Titulo,
        required: true,
        label: "Titulo",
        align: "right",
        field: (row: any) => row.Titulo,
        format: (val: any) => `${val}`,
      },
      {
        name: (row: any) => row.Mensagem,
        required: true,
        label: "Mensagem",
        align: "right",
        field: (row: any) => row.Mensagem,
        format: (val: any) => `${val}`,
      },
    ]);
    return { rows, cols };
  },
  methods: {
    AbrirDetalhes(evt: any, row: any, index: any) {
      alert(row.Id);
    },
  },
});
</script>
