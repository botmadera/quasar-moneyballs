<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';
import { useStoreSettings } from 'src/stores/storeSettings';
import { useStoreEntries } from 'src/stores/storeEntries';

const storeSettings = useStoreSettings();
const storeEntries = useStoreEntries(); 

onMounted(() => {
  storeSettings.loadSettings();
  storeEntries.loadEntries();
});

defineOptions({
  name: 'App'
});

window.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});
</script>
