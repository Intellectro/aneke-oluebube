<script setup>
    import { ref } from "vue";
    import {SideScreen, PageScroller, Bio, Experience} from "../../components";

</script>

<template>
    <SideScreen class="flex-1 md:flex-[0.65] py-10 md:py-20">
        <PageScroller>
            <Bio />
            <Experience />
        </PageScroller>
    </SideScreen>
</template>