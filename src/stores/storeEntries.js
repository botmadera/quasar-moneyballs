import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { uid, Notify, useQuasar } from "quasar";

export const useStoreEntries = defineStore("entries", () => {
  /* state */
  const entries = ref([
    {
      id: "id1",
      name: "Salary",
      amount: 10.00,
    },
    {
      id: "id2",
      name: "Rent",
      amount: 10.00,
    },
    {
      id: "id3",
      name: "Phone",
      amount: -20.00,
    },
    {
      id: "id4",
      name: "Unknown",
      amount: 0,
    },
  ]);

  /* getters */

  // Balance

  const balance = computed(() => {
    return entries.value.reduce((accumulator, { amount }) => {
      return accumulator + amount;
    }, 0);
  });

/* actions */

  // Add Entry
  const addEntry = (addEntryForm) => {
    const newEntry = Object.assign({}, addEntryForm, { id: uid() })
    entries.value.push(newEntry)
    
  }

  // delete Entry
  const deleteEntry = (entryId) => {
    console.log('delete entry '+entryId)
    const index = entries.value.findIndex(entry => entry.id === entryId)
    entries.value.splice(index, 1)
    Notify.create({
      color: 'negative',
      position: 'top',
      message: 'Entrada Eliminada',
    })
  
  }
  /*returns */
  return { entries, balance, addEntry, deleteEntry };
});
