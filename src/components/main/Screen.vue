<script setup>
    import {onBeforeMount, onMounted, reactive, ref, useTemplateRef} from "vue";
    import { useStore } from "vuex";

    const customizeScrollbar = reactive({
        scrollbarWidth: "thin",
        scrollbarColor: "var(--color-primary-main) var(--color-primary-basic)"
    });

    const viewStatus = ref(window.matchMedia("(max-width: 768px)"));
    const store = useStore();

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
        console.log(_topvalue);
        store.dispatch("handleShowNav", false);

        if (_topvalue >= 445 && _topvalue < 1165) {
            store.dispatch("handleShowNav", true);
            store.dispatch("handleCurrentTag", "about");
        }

        if (_topvalue >= 1289 && _topvalue < 3060) {
            store.dispatch("handleShowNav", true);
            store.dispatch("handleCurrentTag", "experience");
        }

        if (_topvalue >= 3132) {
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