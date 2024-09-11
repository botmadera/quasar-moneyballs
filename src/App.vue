<template>
  <router-view />
</template>

<script setup>
import { useQuasar } from 'quasar';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStoreSettings } from 'src/stores/storeSettings';
import { useStoreEntries } from 'src/stores/storeEntries';

const $q = useQuasar();
const storeSettings = useStoreSettings();
const storeEntries = useStoreEntries(); 
const router = useRouter();

onMounted(() => {
  storeSettings.loadSettings();
  storeEntries.loadEntries();

  if ($q.platform.is.electron) {
    ipcRenderer.on('show-settings', ()=> {
    router.push('/settings');
  })
  }
  
});

defineOptions({
  name: 'App'
});

window.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});
</script>
