<template>
    <div>
        <q-form 
            @submit="addEntryFormSubmit" 
            class="row q-px-sm q-pb-sm q-col-gutter-sm bg-primary"
        >
            <div class="col">
                <q-input 
                    v-model="addEntryForm.name" 
                    ref="nameRef" 
                    placeholder="Name" 
                    bg-color="white" 
                    v-select-all        
                    outlined 
                    dense 
                />
            </div>
            <div class="col">
                <q-input 
                    v-model.number="addEntryForm.amount" 
                    type="number" 
                    step="0.01" 
                    placeholder="Amount"
                    input-class="text-right" 
                    bg-color="white" 
                    v-select-all
                    outlined 
                    dense />
            </div>
            <div class="col col-auto">
                <q-btn 
                    type="submit" 
                    color="primary" 
                    icon="add" 
                    round 
                />
            </div>
        </q-form>
    </div>
</template>
<script setup>

/*
  imports
*/

import { ref, reactive } from 'vue'
import { useStoreEntries } from 'src/stores/storeEntries'
import vSelectAll from 'src/directives/directiveSelectAll'

/* Store */
const storeEntries = useStoreEntries();

/*
  add entry
*/

const nameRef = ref(null)

const addEntryFormDefault = {
    name: '',
    amount: null
}

const addEntryForm = reactive({
    ...addEntryFormDefault
})

// Reset add entry form
const addEntryFormReset = () => {
    Object.assign(addEntryForm, addEntryFormDefault)
    nameRef.value.focus()
}
/* add Entry Form Submit*/
const addEntryFormSubmit = () => {
    storeEntries.addEntry(addEntryForm);
    addEntryFormReset()
}

</script>