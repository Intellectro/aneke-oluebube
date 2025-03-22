<script setup>
    import { computed, ref } from "vue";
    import {SideScreen} from "../../components";
    import { useStore } from "vuex";
    import { AnFilledGithub } from '@kalimahapps/vue-icons';
    import { AkLinkedinV1Fill } from '@kalimahapps/vue-icons';
    import { AnFilledTikTok } from '@kalimahapps/vue-icons';
    import { BsWhatsapp } from '@kalimahapps/vue-icons';
    import { MdSharpMarkEmailRead } from '@kalimahapps/vue-icons';
    import { BsTelephoneOutboundFill } from '@kalimahapps/vue-icons';

    const utils = ref({
        devName: "Aneke Oluebube Samuel",
        devStack: "Full-Stack Developer",
        devShortNote: "I craft accessible, pixel-perfect digital experiences that blend performance, aesthetics, and usability. With a keen eye for detail and a commitment to clean, maintainable code, I build seamless web applications that prioritize both user experience and technical excellence."
    });

    const store = useStore();

    const routes_data = computed(() => store.getters.routesHandler);
    const currentRoute = computed(() => store.getters.showCurrentTag);

</script>

<template>
    <SideScreen class="flex-1 md:flex-[0.5] py-10 md:pt-20 md:pb-8">
        <div class="h-full flex flex-col gap-y-2 md:gap-y-10 px-10">
            <div class="flex flex-col gap-y-5">
                <div class="flex flex-col leading-tight gap-y-[13px] text-slate-200">
                    <div class="text-[35px] uppercase md:text-[45px] font-bold tracking-tighter leading-8 lg:leading-11" style="font-family: 'Poppins', sans-serif;">{{utils.devName}}</div>
                    <div class="text-[14.5px] md:text-[16.5px] uppercase font-semibold">{{utils.devStack}}</div>
                </div>
                <div class="text-[15px] md:text-base font-medium text-slate-400 text-pretty" v-html="utils.devShortNote" />
            </div>
            <div class="flex flex-col gap-y-8">
                <div class="flex flex-col gap-y-3">
                    <div class="hidden md:flex items-center gap-x-2" v-for="(_route, index) in routes_data" :key="index">
                        <div :class="['h-[1.5px] transition-all duration-700 ease-linear', _route._name == currentRoute ? 'w-[65px] bg-slate-200' : 'w-[25px] bg-slate-400']"></div>
                        <div :class="['text-[12px] transition duration-300 ease-linear font-[550] uppercase', _route._name == currentRoute ? 'text-slate-200' : 'text-slate-400']">{{_route._name}}</div>
                    </div>
                </div>
                <div class="flex flex-wrap gap-y-3 items-center gap-x-5">
                    <a target="_blank" href="https://github.com/intellectro">
                        <AnFilledGithub class="text-[25px] text-slate-200" />
                    </a>
                    <a target="_blank" href="https://linkedin/in/dev-ai">
                        <AkLinkedinV1Fill class="text-[25px] text-slate-200" />
                    </a>
                    <a target="_blank" href="https://www.tiktok.com/@dev.ai">
                        <AnFilledTikTok class="text-[25px] text-slate-200" />
                    </a>
                    <a target="_blank" href="https://api.whatsapp.com">
                        <BsWhatsapp class="text-[25px] text-slate-200" />
                    </a>
                    <a target="_blank" href="mailto:oluebubeaneke247@gmail.com?subject=">
                        <MdSharpMarkEmailRead class="text-[22px] text-slate-200" />
                    </a>
                    <a target="_blank" href="tel:+2347036616087">
                        <BsTelephoneOutboundFill class="text-[22px] text-slate-200" />
                    </a>
                </div>
            </div>
        </div>
    </SideScreen>
</template>