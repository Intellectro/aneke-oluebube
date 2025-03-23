<script setup>
    import { computed } from 'vue';
    import { ProjectCard } from '..';
    import { useStore } from 'vuex';

    const store = useStore();

    const projects_data = computed(() => store.getters.projectsHandler);

</script>

<template>
    <div class="flex flex-col gap-y-6 mt-10 md:mt-20 lg:mt-26">
        <div class="block text-[14px] px-10 uppercase font-bold md:hidden text-slate-200">Projects</div>
        <div class="flex flex-col gap-y-2">
            <ProjectCard v-for="(projects, index) in projects_data" :key="index" v-bind="projects" />
        </div>
    </div>
</template>