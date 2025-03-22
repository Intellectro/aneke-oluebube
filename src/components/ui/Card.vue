<script setup>
    import { BsArrowUpRight } from '@kalimahapps/vue-icons';
    import "./card.css";

    defineProps({
        id: {
            type: Number,
            default: 0
        },
        _year: {
            type: String,
            default: ""
        },
        _title: {
            type: String,
            default: ""
        },
        _content: {
            type: String,
            default: ""
        },
        _link: {
            type: String,
            default: ""
        },
        _stacks: {
            type: Object,
            default: []
        }
    });
</script>

<template>
    <a class="w-full py-3 hover:bg-slate-800/50 px-10 rounded-md hover:shadow-[0px_1px_0px_inset_rgba(148,163,184,0.1)] transition duration-500 ease-in-out _titleffect" :href="_link">
        <div class="flex flex-wrap flex-col lg:flex-row items-start gap-x-5 gap-y-4">
            <div class="flex-1 md:flex-[0.25] w-full text-left">
                <div class="text-[14px] font-[550] text-slate-400">{{_year}}</div>
            </div>
            <div class="flex-1 w-full flex flex-col gap-y-2">
                <div class="text-[14.5px] md:text-[16.5px] font-bold flex items-center gap-x-1 text-slate-200 _title_"><span>{{ _title }}</span> <BsArrowUpRight /></div>
                <div class="text-[13px] md:text-[15px] font-[500] text-slate-400">{{ _content }}</div>
                <div class="flex flex-wrap gap-1">
                    <div class="py-1 px-6 rounded-[1vmax] font-bold bg-chip-box text-chip-text text-[13px]" v-for="(lang, index) in _stacks" :key="index">{{ lang }}</div>
                </div>
            </div>
        </div>
    </a>
</template>