<template>
  <q-layout view="hHh lpR lFf">
    <q-header 
      :elevated="useLightOrDark(true, false)"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <div class="absolute-center">
            <q-icon name="savings" /> 
            Moneyballs
          </div>
        </q-toolbar-title>
        <q-btn
          v-if="$route.path === '/'"
          @click="storeEntries.options.sort = !storeEntries.options.sort"
          :label="!storeEntries.options.sort? 'Sort':'Done'" 
          :color="!storeEntries.options.sort? 'purple':'green'"
          no-caps 
          dense 
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      class="bg-primary"
      :width="250"
      :breakpoint="767"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          class="text-white"
          header
        >
          Navigation
        </q-item-label>

        <NavLink
          v-for="link in navLinks"
          :key="link.title"
          v-bind="link"
        />
        <!-- QUIT BUTTON -->
        <q-item
          v-if="$q.platform.is.electron"
          @click="quitApp"
          clickable
          class="text-white absolute-bottom"
          tag="a"
        >
          <q-item-section avatar>
            <q-icon name="power_settings_new" />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              Quit
            </q-item-label>
          </q-item-section>
        </q-item>
        <!-- QUIT BUTTON -->

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { ref } from 'vue'
import { useStoreEntries } from 'src/stores/storeEntries';
import NavLink from 'components/Nav/NavLink.vue'
import { useLightOrDark } from 'src/use/useLightOrDark';

defineOptions({
  name: 'MainLayout'
})

const $q = useQuasar()
const storeEntries = useStoreEntries()

const navLinks = [
  {
    title: 'Entries',
    icon: 'savings',
    link: '/'
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/settings'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const quitApp = () => {
  $q.dialog({
    title: 'Confirmacion',
    message: 'Desea salir de la app?',
    cancel: true,
    persistent: true,
    html: true,
    ok: {
      label: 'Salir',
      color: 'negative',
      noCaps: true
    },
    cancel: {
      label: 'Cancelar',
      color: 'primary',
      noCaps: true
    }

  }).onOk(() => {
    if($q.platform.is.electron) {
      ipcRenderer.send('quit-app')
    }
  })
}
</script>
