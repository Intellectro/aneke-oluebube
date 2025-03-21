<script setup>
    import {reactive} from "vue";

    const customizeScrollbar = reactive({
        scrollbarWidth: "thin",
        scrollbarColor: "var(--color-primary-main) var(--color-primary-basic)"
    });
</script>

<template>
    <div class="w-screen h-screen overflow-auto" :style="customizeScrollbar">
        <slot />
    </div>
</template>