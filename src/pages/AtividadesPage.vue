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
  name: "AtividadesPage",
  components: {},
  setup() {
    const rows = ref<IAtividades[]>([
      {
        ActivatedDate: new Date(),
        AreaPath: "",
        ClosedDate: new Date(),
        Completed: 0,
        CreatedDate: new Date(),
        DataInicio: new Date(),
        Id: 1520,
        IterationPath: "",
        OriginalEstimate: 2,
        Remaining: 0,
        ResolvedDate: new Date(),
        State: "Active",
        Title: "Tarefa",
        WorkItemType: "Task",
        TempoAtivado: 1200,
      },
      {
        ActivatedDate: new Date(),
        AreaPath: "",
        ClosedDate: new Date(),
        Completed: 0,
        CreatedDate: new Date(),
        DataInicio: new Date(),
        Id: 1520,
        IterationPath: "",
        OriginalEstimate: 2,
        Remaining: 0,
        ResolvedDate: new Date(),
        State: "Active",
        Title: "Tarefa",
        WorkItemType: "Task",
        TempoAtivado: 1200,
      },
    ]);

    const cols = ref<any[]>([
      {
        name: (row: any) => row.TempoAtivado,
        required: true,
        label: "Utilizado",
        align: "right",
        field: (row: any) => row.TempoAtivado,
        format: (val: any) => `${val}`,
      },
      {
        name: (row: any) => row.Id,
        required: true,
        label: "ID",
        align: "right",
        field: (row: any) => row.Id,
        format: (val: any) => `${val}`,
      },
      {
        name: (row: any) => row.WorkItemType,
        required: true,
        label: "Tipo",
        align: "left",
        field: (row: any) => row.WorkItemType,
        format: (val: any) => `${val}`,
      },
      {
        name: (row: any) => row.Title,
        required: true,
        label: "Titulo",
        align: "left",
        field: (row: any) => row.Title,
        format: (val: any) => `${val}`,
      },
      {
        name: (row: any) => row.AreaPath,
        required: true,
        label: "Area",
        align: "left",
        field: (row: any) => row.AreaPath,
        format: (val: any) => `${val}`,
      },
      {
        name: (row: any) => row.IterationPath,
        required: true,
        label: "Iteração",
        align: "left",
        field: (row: any) => row.IterationPath,
        format: (val: any) => `${val}`,
      },
      {
        name: (row: any) => row.CreatedDate,
        required: true,
        label: "Criado em",
        align: "left",
        field: (row: any) => row.CreatedDate,
        format: (val: any) => `${val.toLocaleString("pt-BR")}`,
      },
      {
        name: (row: any) => row.OriginalEstimate,
        required: true,
        label: "Estimativa",
        align: "left",
        field: (row: any) => row.OriginalEstimate,
        format: (val: any) => `${val}`,
      },
      {
        name: (row: any) => row.ActivatedDate,
        required: true,
        label: "Ativo em",
        align: "left",
        field: (row: any) => row.ActivatedDate,
        format: (val: any) => `${val.toLocaleString("pt-BR")}`,
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
