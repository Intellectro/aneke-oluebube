<script setup>
    import {computed, onBeforeMount, onMounted, reactive, ref, useTemplateRef} from "vue";
    import { useStore } from "vuex";

    const customizeScrollbar = reactive({
        scrollbarWidth: "thin",
        scrollbarColor: "var(--color-primary-main) var(--color-primary-basic)"
    });

    const viewStatus = ref(window.matchMedia("(max-width: 768px)"));
    const store = useStore();

    const sectionsTopUpdater = computed(() => store.getters.sectionoffsets);

    const viewStatusHandler = () => {
        if (viewStatus.value.matches) {
            store.dispatch("setPhoneView", viewStatus.value.matches);
            return;
        }
        store.dispatch("setPhoneView", viewStatus.value.matches);
    }

    const pageScroller = useTemplateRef("page-scroll-handler");

    const handlePageScroll = (e) => {
        const _topvalue = e.currentTarget.scrollTop;
        store.dispatch("handleShowNav", false);
        const _bioTopVal = sectionsTopUpdater.value[0]._currentTop;
        const _expTopVal = sectionsTopUpdater.value[1]._currentTop;
        const _proTopVal = sectionsTopUpdater.value[2]._currentTop;

        if (_topvalue >= _bioTopVal && _topvalue < _expTopVal) {
            store.dispatch("handleShowNav", true);
            store.dispatch("handleCurrentTag", "about");
        }

        if (_topvalue >= _expTopVal && _topvalue < _proTopVal) {
            store.dispatch("handleShowNav", true);
            store.dispatch("handleCurrentTag", "experience");
        }

        if (_topvalue >= _proTopVal) {
            store.dispatch("handleShowNav", true);
            store.dispatch("handleCurrentTag", "projects");
        }
    }

    onBeforeMount(() => {
        viewStatusHandler();
    });

    onMounted(() => {
        window.addEventListener("resize", viewStatusHandler);
        pageScroller.value.addEventListener("scroll", handlePageScroll);
    });

</script>

<template>
    <div ref="page-scroll-handler" class="w-screen h-screen overflow-auto" :style="customizeScrollbar">
        <slot />
    </div>
</template>