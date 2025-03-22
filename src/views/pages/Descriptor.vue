<script setup>
    import { ref } from "vue";
    import {SideScreen, PageScroller, Bio, Experience, Project} from "../../components";

</script>

<template>
    <SideScreen class="flex-1 md:flex-[0.65] py-10 md:py-20">
        <PageScroller>
            <Bio />
            <Experience />
            <Project />
        </PageScroller>
    </SideScreen>
</template>