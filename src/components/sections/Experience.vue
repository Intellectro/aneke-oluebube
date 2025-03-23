<script setup>
    import { computed, useTemplateRef } from 'vue';
    import Card from '../ui/Card.vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const workflow_data = computed(() => store.getters.workflowHandler);
    
    const _controller_ = useTemplateRef("exp-ref-control");

    defineExpose({
        _control: _controller_
    });
    
</script>

<template>
    <div ref="exp-ref-control" class="flex flex-col gap-y-5 mt-10 md:mt-20 lg:mt-26">
        <div class="block text-[14px] px-10 uppercase font-bold md:hidden text-slate-200">Experience</div>
        <div class="flex flex-col gap-y-2">
            <Card v-for="(workflow, index) in workflow_data" :key="index" v-bind="workflow" />
        </div>
    </div>
</template>