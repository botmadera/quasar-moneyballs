<template>
    <q-slide-item  
        @left="onEntrySlideLeft"
        @right="onEntrySlideRight"
        left-color="positive"
        right-color="negative"
        :class="{'bg-grey-3': entry.paid}"
        >
        
        <template v-slot:left>
            <q-icon name="done" />
        </template>
        <template v-slot:right>
            <q-icon name="delete" />
        </template>
        <q-item>
            <q-item-section 
                class="text-weight-bold" 
                :class="[useAmountColorClass(entry.amount),
                {'text-strike': entry.paid}]"
            >
                {{ entry.name }}
                <q-popup-edit
                    @save="onNameUpdate"
                    :model-value = "entry.name"
                    v-slot="scope"
                    :cover="false"
                    :offset = "[16, 19]"
                    anchor = "top left"
                    auto-save
                    buttons
                    label-set="Guardar"
                >
                    <q-input
                        v-model="scope.value"
                        @keyup.enter="scope.set"
                        input-class = "text-weight-bold letter-spacing-none"
                        autofocus
                    />
                </q-popup-edit>
            </q-item-section>

            <q-item-section class="text-weight-bold" :class="[useAmountColorClass(entry.amount),
                {'text-strike': entry.paid}]" side>
                {{ useCurrencify(entry.amount) }}
                <q-popup-edit
                    @save="onAmountUpdate"
                    :model-value = "entry.amount"
                    v-slot="scope"
                    :cover="false"
                    :offset = "[16, 19]"
                    anchor = "top left"
                    auto-save
                    buttons
                    label-set="Guardar"
                >
                    <q-input
                        v-model.number="scope.value"
                        @keyup.enter="scope.set"
                        input-class = "text-weight-bold letter-spacing-none text-right"
                        type="number"
                        step="0.01"
                        autofocus
                    />
                </q-popup-edit>
            </q-item-section>
        </q-item>
    </q-slide-item>
</template>

<script setup>
/*
  imports
*/


import { useQuasar } from 'quasar'
import { useStoreEntries } from 'src/stores/storeEntries'
import { useCurrencify } from 'src/use/useCurrencify'
import { useAmountColorClass } from 'src/use/useAmountColorClass'

/* Quasar */
const $q = useQuasar();

/* Store */
const storeEntries  = useStoreEntries();

/*  Props */
const props = defineProps({
    entry:{
        type: Object,
        required: true
    }
})

/*
  Slides: delete entry
*/

const onEntrySlideLeft = ({reset}) => {
  storeEntries.updateEntry(props.entry.id, {paid: !props.entry.paid})
    reset()
}

const onEntrySlideRight = ({reset}) => {
  $q.dialog({
    title: 'Confirmacion',
    message: `
      Desea eliminar la entrada?
      <div class="q-mt-md text-weight-bold ${ useAmountColorClass(props.entry.amount)}">
        ${props.entry.name} : ${useCurrencify(props.entry.amount)}  
      </div>
    `,
    cancel: true,
    persistent: true,
    html: true,
    ok: {
      label: 'Eliminar',
      color: 'negative',
      noCaps: true
    },
    cancel: {
      label: 'Cancelar',
      color: 'primary',
      noCaps: true
    }
    
  }).onOk(() => {
    storeEntries.deleteEntry(props.entry.id)
  }).onCancel(() => {
    reset()
  })
}

/* name & amount update */
const onNameUpdate = (value) => {
  storeEntries.updateEntry(props.entry.id, {name: value})
}

const onAmountUpdate = (value) => {
  storeEntries.updateEntry(props.entry.id, {amount: value})
}
</script>