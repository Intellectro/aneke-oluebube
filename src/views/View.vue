<script setup>
    import { Divisor } from '../components';
    import { Creds, Descriptor } from '.';
</script>

<template>
    <Divisor>
        <template #leftSide>
            <Creds />
        </template>
        <template #rightSide>
            <Descriptor />
        </template>
    </Divisor>
</template>