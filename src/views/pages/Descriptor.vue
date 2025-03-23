<script setup>
    import { onMounted, useTemplateRef } from "vue";
    import {SideScreen, PageScroller, Bio, Experience, Project} from "../../components";
    import { useStore } from "vuex";

    const bioRef = useTemplateRef("bio");
    const expRef = useTemplateRef("exp");
    const proRef = useTemplateRef("pro");

    const store = useStore();

    onMounted(() => {
        const handleOffsets = () => {
            if (bioRef.value && expRef.value && proRef.value) {
                const bioOffestTop = bioRef.value._control.offsetTop;
                const expOffsetTop = expRef.value._control.offsetTop;
                const proOffsetTop = proRef.value._control.offsetTop;
    
                const newArr = [
                    {
                        _name: "bio",
                        _currentTop: bioOffestTop 
                    },
                    {
                        _name: "exp",
                        _currentTop: expOffsetTop
                    },
                    {
                        _name: "pro",
                        _currentTop: proOffsetTop
                    }
                ];
    
                store.dispatch("handleSectionsOffset", newArr);
            }
        }
        handleOffsets();
        window.addEventListener("resize", handleOffsets);
    });

</script>

<template>
    <SideScreen class="flex-1 md:flex-[0.65] py-10 md:py-20">
        <PageScroller>
            <Bio ref="bio" />
            <Experience ref="exp" />
            <Project ref="pro" />
        </PageScroller>
    </SideScreen>
</template>