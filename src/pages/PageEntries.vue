<template>
  <q-page>
    <div class="q-pa-md">
    <NothingHere
      v-if="storeEntries.entries.length === 0"
     /> 
      <q-list
        v-else 
        bordered 
        separator
      >
        <!-- Entry.vue -->
        <Entry 
          v-for="entry in storeEntries.entries" 
          :key="entry.id"
          :entry="entry"
        />
      </q-list>
    </div>

    <q-footer class="bg-transparent">
      <Balance />
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

  const storeEntries = useStoreEntries()
</script>
