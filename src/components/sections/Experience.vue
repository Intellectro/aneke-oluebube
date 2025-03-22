<script setup>
    import { computed, onMounted, useTemplateRef } from 'vue';
    import Card from '../ui/Card.vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const workflow_data = computed(() => store.getters.workflowHandler);
    const topr = useTemplateRef("top");

    onMounted(() => {
        console.log(topr.value.offsetTop);
    });
</script>

<template>
    <div ref="top" class="flex flex-col gap-y-2 mt-10 md:mt-20 lg:mt-26">
        <Card v-for="(workflow, index) in workflow_data" :key="index" v-bind="workflow" :data-id="index" />
    </div>
</template>