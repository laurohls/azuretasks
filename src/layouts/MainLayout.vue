<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Tarefas do Azure </q-toolbar-title>

        <div>PSG Tecnologia</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list bordered padding class="rounded-borders">
        <q-item-label header> Menu principal </q-item-label>

        <q-item to="/atividades" clickable v-ripple>
          <q-item-section> Atividades </q-item-section>
        </q-item>

        <q-item to="/mencoes" clickable v-ripple>
          <q-item-section> Menções Ativas </q-item-section>
        </q-item>

        <q-item to="/" clickable v-ripple>
          <q-item-section> Comentários Ativos </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
