<template>
    <div class="text-h6 text-center q-pa-md">
        <q-icon 
            name="savings" 
            size="100px" 
            :color="useLightOrDark('grey-4', 'grey-7')"
        />
        <div 
            class="q-mt-md"
            :class="useLightOrDark('text-grey-5', 'text-grey-6')"
        >No entries yet</div>
    </div>
</template>
<script setup>
import { useLightOrDark } from 'src/use/useLightOrDark'
</script>