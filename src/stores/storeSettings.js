import { defineStore } from "pinia";
import { ref, computed, reactive } from "vue";
import { uid, Notify, useQuasar, event } from "quasar";

export const useStoreSettings = defineStore("settings",()=> {

  /* state */
  const settings = reactive({
    promptToDelete: true,
    showRunningBalance: false,
    currencySymbol: "$",
    darkMode: false, // false | true | 'auto
  });

  /* getters */

  /* actions */

  /* returns */

  return {
    settings,
}
});
