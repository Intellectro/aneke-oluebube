<script setup>
    import { onMounted, reactive, useTemplateRef } from 'vue';
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

    const handlePageScroll = (e) => {
        const _topvalue = e.currentTarget.scrollTop;
        if (_topvalue >= 0 && _topvalue < 617) {
            store.dispatch("handleCurrentTag", "about");
        }
        if (_topvalue >= 617 && _topvalue < 1900) {
            store.dispatch("handleCurrentTag", "experience");
        }

        if (_topvalue >= 1900) {
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