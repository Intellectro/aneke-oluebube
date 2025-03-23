<script setup>
    import { computed } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const isNavbar = computed(() => store.getters.navCurrentStatus);
    const navName = computed(() => store.getters.showCurrentTag);

</script>


<template>
    <div :class="`fixed lg:hidden left-0 top-0 transition duration-50 ease-in-out ${isNavbar ? 'translate-y-0' : '-translate-y-40'} py-4 px-10 backdrop-blur-[20px] w-full font-bold text-slate-200 text-[14px] uppercase`">{{navName}}</div>
</template>