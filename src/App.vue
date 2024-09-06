<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';
import { userRouter } from 'vue-router';
import { useStoreSettings } from 'src/stores/storeSettings';
import { useStoreEntries } from 'src/stores/storeEntries';

const storeSettings = useStoreSettings();
const storeEntries = useStoreEntries(); 
const router = useRouter();

onMounted(() => {
  storeSettings.loadSettings();
  storeEntries.loadEntries();

  ipcRenderer.on('show-settings', ()=> {
    router.push('/settings');
  })
});

defineOptions({
  name: 'App'
});

window.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});
</script>
