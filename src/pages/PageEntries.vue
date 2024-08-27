<template>
  <q-page>
    <div class="q-pa-md">

    <transition
      appear
      enter-active-class="animated jackInTheBox slower"
    >
      <NothingHere v-if="storeEntries.entries.length === 0" />
    </transition>

      <q-list v-if="storeEntries.entries.length" class="entries">
        <Sortable 
          @end="storeEntries.sortEnd"
          :list="storeEntries.entries" 
          :options="{ handle: '.handle' }"
          item-key="id" 
          tag="div"
        >
          <template #item="{ element, index }">
            <!-- Entry.vue -->
            <Entry 
              :key="element.id" 
              :entry="element" 
              :index="index"
            />
          </template>
        </Sortable>

      </q-list>
    </div>

    <q-footer class="bg-transparent">
      <transition
      appear
      enter-active-class="animated fadeInUp slower"
      leave-active-class="animated fadeOutDown slower"
    >
      <Balance v-if="storeEntries.entries.length" />
    </transition>
      <!-- addEntry goes here -->
      <AddEntry />
    </q-footer>
  </q-page>
</template>

<script setup>
import { useStoreEntries } from 'src/stores/storeEntries'
import Balance from 'src/components/Entries/Balance.vue'
import AddEntry from 'src/components/Entries/AddEntry.vue'
import Entry from 'src/components/Entries/Entry.vue'
import NothingHere from 'src/components/Entries/NothingHere.vue'
import { Sortable } from 'sortablejs-vue3'

const storeEntries = useStoreEntries()
</script>
