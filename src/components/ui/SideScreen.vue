<script setup>
    import { reactive } from 'vue';

    defineProps({
        flexValue: Number
    });

    defineOptions({
        inheritAttrs: false
    })

    const customizeScrollbar = reactive({
        scrollbarWidth: "thin",
        scrollbarColor: "var(--color-primary-main) var(--color-primary-basic)"
    });

</script>

<template>
    <div :class="['w-full h-screen overflow-auto', flexValue, $attrs.class]" :style="customizeScrollbar">
        <slot />
    </div>
</template>