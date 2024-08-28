import { defineStore } from "pinia";
import { ref, watch, reactive } from "vue";
import { Dark, useQuasar } from "quasar";

export const useStoreSettings = defineStore("settings",()=> {

  /* state */
  const settings = reactive({
    promptToDelete: true,
    showRunningBalance: false,
    currencySymbol: "$",
    darkMode: false, // false | true | 'auto
  });
  /* watch */
  watch(
    () => settings.darkMode,
    (value) => {
      Dark.set(value);
    }
  );
  /* getters */

  /* actions */

  /* returns */

  return {
    settings,
}
});
