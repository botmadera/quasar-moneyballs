<template>
  <q-page>

    <div class="q-pa-md">
      <q-list bordered padding>

        <q-item-label header>WooBims</q-item-label>

        <q-item tag="label" v-ripple>
          <q-item-section>
            <q-input v-model="sku" label="SKU" v-select-all outlined />
            <q-btn 
              @click="check"
              color="primary" 
              text-color="white" 
              label="CHECK" 
              class="q-mt-md"
            />
          </q-item-section>
        </q-item>
      </q-list>
      <dir>
      <pre>
        {{ res }}
      </pre>
      </dir>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from 'vue'
import { api } from 'boot/axios'

const sku = ref('');
const res = ref('');

const check =  () => {
  console.log('check', sku.value);
  try {
    const response = api.get('/?wc-api=getbysku&sku=21079103')
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

</script>