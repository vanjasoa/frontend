<template>
    <div class="flex flex-col w-full h-[200px] border-2 rounded-xl items-end mx-4">
        <svg class="mx-auto" viewBox="0 0 143 142" fill="none" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect x="0.333496" width="142" height="142" fill="url(#pattern0)" />
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_99_979" transform="scale(0.001)" />
                </pattern>
                
            </defs>
        </svg>

        <h1 class="font-extrabold text-xl items my-2 mx-auto">{{ props.name }}</h1>

    </div>
</template>

<script setup>

const props = defineProps(['name'])
</script>