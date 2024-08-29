import { defineStore } from "pinia";
import { ref, watch, reactive } from "vue";
import { Dark, LocalStorage } from "quasar";

export const useStoreSettings = defineStore("settings",()=> {

  /* state */
  const settings = reactive({
    promptToDelete: true,
    showRunningBalance: false,
    currencySymbol: "$",
    darkMode: false, // false | true | 'auto
  });
  /* watch dark mode */
  watch(
    () => settings.darkMode,
    (value) => {
      Dark.set(value);
    }
  );

  watch(settings, () => {
    saveSettings();
  }
  );

  /* getters */

  /* actions */
const saveSettings = () => {
  LocalStorage.setItem("settings", settings);
}

const loadSettings = () => {
  const loadedSettings = LocalStorage.getItem("settings");
  if (loadedSettings) {
    Object.assign(settings, loadedSettings);
  }
}

  /* returns */

  return {
    settings, loadSettings
}
});
