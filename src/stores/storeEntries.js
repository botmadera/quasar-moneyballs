import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { uid, Notify, useQuasar } from "quasar";

export const useStoreEntries = defineStore("entries", () => {
  /* state */
  const entries = ref([
    {
      id: "id1",
      name: "Salary",
      amount: 13.00,
      paid: false
    },
    {
      id: "id2",
      name: "Rent",
      amount: 10.00,
      paid: false
    },
    {
      id: "id3",
      name: "Phone",
      amount: -20.00,
      paid: false
    },
    {
      id: "id4",
      name: "Unknown",
      amount: 0,
      paid: false
    },
  ]);

  /* getters */

  // Balance

  const balance = computed(() => {
    return entries.value.reduce((accumulator, { amount }) => {
      return accumulator + amount;
    }, 0);
  });

   // Balance Paid

   const balancePaid = computed(() => {
    return entries.value.reduce((accumulator, { amount, paid }) => {
      return paid? accumulator + amount: accumulator;
    }, 0);
  });

/* actions */

  // Add Entry
  const addEntry = (addEntryForm) => {
    const newEntry = Object.assign({}, addEntryForm, { id: uid(), paid: false });
    entries.value.push(newEntry)
    
  }

  // delete Entry
  const deleteEntry = (entryId) => {
    console.log('delete entry '+entryId)
    const index = getEntryIndexById(entryId);
    entries.value.splice(index, 1)
    Notify.create({
      color: 'negative',
      position: 'top',
      message: 'Entrada Eliminada',
    })
  
  }

  /* Update Entry */
  const updateEntry = (entryId, updates) => {
    const index = getEntryIndexById(entryId);
    Object.assign(entries.value[index], updates)
  }


  /* Helpers */
  const getEntryIndexById = (entryId) => {
    return entries.value.findIndex(entry => entry.id === entryId)
  }


  /*returns */
  return { entries, balance, balancePaid, addEntry, deleteEntry, updateEntry };
});
