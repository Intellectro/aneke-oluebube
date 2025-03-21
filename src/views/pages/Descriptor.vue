<script setup>
    import { ref } from "vue";
    import {SideScreen, PageScroller, Bio} from "../../components";

    const utils = ref({
        flexValue: 0.55,
    });
</script>

<template>
    <SideScreen :flexValue="utils.flexValue" class="py-10 md:py-20">
        <PageScroller>
            <Bio />
        </PageScroller>
    </SideScreen>
</template>