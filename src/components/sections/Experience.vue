<script setup>
    import { computed } from 'vue';
    import Card from '../ui/Card.vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const workflow_data = computed(() => store.getters.workflowHandler);
</script>

<template>
    <div class="flex flex-col gap-y-2 mt-10 md:mt-20 lg:mt-26">
        <Card v-for="(workflow, index) in workflow_data" :key="index" v-bind="workflow" :data-id="index" />
    </div>
</template>