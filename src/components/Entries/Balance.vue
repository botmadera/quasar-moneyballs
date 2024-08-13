<template>

    <div class="row q-mb-sm q-px-md q-py-sm shadow-up-3">
        <div class="col text-grey-7 text-h6">
            Balance:
        </div>
        <div :class="useAmountColorClass(storeEntries.balance)" class="col text-h6 text-right">
            {{ useCurrencify(storeEntries.balance) }}
        </div>
    </div>

</template>
<script setup>
import { useCurrencify } from 'src/use/useCurrencify'
import { useAmountColorClass } from 'src/use/useAmountColorClass'
import { useStoreEntries } from 'src/stores/storeEntries'

const storeEntries = useStoreEntries()
</script>