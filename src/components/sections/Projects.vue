<script setup>
    import { computed } from 'vue';
    import { ProjectCard } from '..';
    import { useStore } from 'vuex';

    const store = useStore();

    const projects_data = computed(() => store.getters.projectsHandler);
</script>

<template>
    <div class="flex flex-col gap-y-2 mt-10 md:mt-20 lg:mt-26">
        <ProjectCard v-for="(projects, index) in projects_data" :key="index" v-bind="projects" />
    </div>
</template>