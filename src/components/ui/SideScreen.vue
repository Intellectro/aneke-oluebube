<script setup>
    import { computed, onMounted, reactive, useTemplateRef, watch } from 'vue';
    import { useStore } from 'vuex';

    defineOptions({
        inheritAttrs: false
    });

    const store = useStore();

    const customizeScrollbar = reactive({
        scrollbarWidth: "thin",
        scrollbarColor: "var(--color-primary-main) var(--color-primary-basic)"
    });

    const pageScroller = useTemplateRef("page-scroll-handler");

    const sectionsTopUpdater = computed(() => store.getters.sectionoffsets);

    const handlePageScroll = (e) => {
        const _topvalue = e.currentTarget.scrollTop;
        const _bioTopVal = sectionsTopUpdater.value[0]._currentTop;
        const _expTopVal = sectionsTopUpdater.value[1]._currentTop;
        const _proTopVal = sectionsTopUpdater.value[2]._currentTop;

        if (_topvalue >= 0 && _topvalue < _expTopVal - 3) {
            store.dispatch("handleCurrentTag", "about");
        }
        if (_topvalue >= _expTopVal && _topvalue < _proTopVal - 5) {
            store.dispatch("handleCurrentTag", "experience");
        }

        if (_topvalue >= _proTopVal) {
            store.dispatch("handleCurrentTag", "projects");
        }

    }

    onMounted(() => {
        pageScroller.value.addEventListener("scroll", handlePageScroll);
    });
</script>

<template>
    <div ref="page-scroll-handler" :class="['w-full h-screen overflow-auto', $attrs.class]" :style="customizeScrollbar">
        <slot />
    </div>
</template>