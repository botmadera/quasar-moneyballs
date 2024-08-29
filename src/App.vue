<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';
import { useStoreSettings } from 'src/stores/storeSettings';

const storeSettings = useStoreSettings();


onMounted(() => {
  storeSettings.loadSettings();
});

defineOptions({
  name: 'App'
});

window.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});
</script>
