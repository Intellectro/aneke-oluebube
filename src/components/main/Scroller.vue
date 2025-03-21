<script setup>
    import { onMounted, ref } from 'vue';

    const axis = ref({
        x: 0,
        y: 0
    });

    const blurBoxHandler = (e) => {
        const x = e.clientX;
        const y = e.clientY;

        Object.assign(axis.value, {x, y});
    }

    onMounted(() => {
        window.addEventListener("mousemove", blurBoxHandler);
    });
</script>


<template>
    <div class="w-full h-fit bg-primary-main relative z-1">
        <slot />
        <div class="pointer-events-none fixed lg:absolute inset-0 z-30 transition duration-300" :style="{background: `radial-gradient(600px at ${axis.x}px ${axis.y}px, rgba(28, 78, 216, 0.15), transparent 80%)`}"></div>
    </div>
</template>