<template>
  <q-page >
  
  <div class="q-pa-md">
    <q-list bordered padding>
      
      <q-item-label header>Entries</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Prompt to Delete</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle
            v-model = "storeSettings.settings.promptToDelete"
           />
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show Running Balance</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle
            v-model = "storeSettings.settings.showRunningBalance"
           />
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-input
            v-model="storeSettings.settings.currencySymbol"
            label="Currency"
            v-select-all
            outlined
            />
        </q-item-section>
      </q-item>
      <q-separator spaced/>
      <q-item-label header>Appearance</q-item-label>


      
    </q-list>
  </div>
</q-page>
</template>
<script setup>
import { ref } from 'vue'
import { useStoreSettings} from 'src/stores/storeSettings'
import vSelectAll from 'src/directives/directiveSelectAll'

const storeSettings = useStoreSettings()

</script>