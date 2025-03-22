<script setup>
    import { computed, onMounted, useTemplateRef } from 'vue';
    import { ProjectCard } from '..';
    import { useStore } from 'vuex';

    const store = useStore();

    const projects_data = computed(() => store.getters.projectsHandler);
    const top = useTemplateRef("topr");
    
    onMounted(() => {
        console.log(top.value.offsetTop);
    });
</script>

<template>
    <div ref="topr" class="flex flex-col gap-y-2 mt-10 md:mt-20 lg:mt-26">
        <ProjectCard v-for="(projects, index) in projects_data" :key="index" v-bind="projects" />
    </div>
</template>