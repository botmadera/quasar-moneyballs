import { defineStore } from "pinia";
import { ref, computed, reactive, watch } from "vue";
import { uid, Notify, LocalStorage, event } from "quasar";

export const useStoreEntries = defineStore("entries", () => {
  /* state */
  const entries = ref([
/*     {
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
    }, */
  ]);

  // Entries Watcher
  watch(entries.value, ()=>{
    saveEntries();
  })

  const loadEntries = () => {
    const loadedEntries = LocalStorage.getItem("entries");
    if (loadedEntries) {
      Object.assign(entries.value, loadedEntries);
    }
  }

  const options = reactive({
    sort:true
  });
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

  // Running Balance
  const runningBalances = computed(() => {
    let runningBalances = [],
      currentRunningBalance = 0;

    if(entries.value.length) {
      entries.value.forEach(entry => {
        let entryAmount = entry.amount ? entry.amount : 0;
        currentRunningBalance += entryAmount;
        runningBalances.push(currentRunningBalance);
      })
    }
    return runningBalances;
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

  /* Sort End */
  const sortEnd = ({ oldIndex, newIndex}) => {
    const movedEntry = entries.value[oldIndex];
    entries.value.splice(oldIndex, 1);
    entries.value.splice(newIndex, 0, movedEntry)
  }

  /* Methods */
  const saveEntries = () => { LocalStorage.set('entries', entries.value)};

  /* Helpers */
  const getEntryIndexById = (entryId) => {
    return entries.value.findIndex(entry => entry.id === entryId)
  }


  /*returns */
  return { 

      //state
      entries, 
      options, 
    
      //getters
      balance, 
      balancePaid, 
      runningBalances,
    
      //actions
      addEntry, 
      deleteEntry, 
      updateEntry, 
      sortEnd,
      loadEntries
  };
});
