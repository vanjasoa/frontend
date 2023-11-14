<template>
    <div class="w-[217px] h-[283px] border-4 border-black rounded-lg">

        <div class="mt-[-50px]">
            <slot name="point" />
        </div>

        <div class="w-[117px] h-[117px] border-2 mx-auto">
            <svg viewBox="0 0 157 157" fill="none" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect width="157" height="157" fill="url(#pattern0)" />
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_756_1225" transform="scale(0.00155039)" />
                    </pattern>
                    
                </defs>
            </svg>
        </div>
        <div class="flex flex-col items-center">
            <h1 class="text-xl font-extrabold">{{ props.product.name }}</h1>
            <h2>{{ props.product.point }}</h2>

            <button class=" border-4 border-black rounded-xl w-[185px] h-[40px]">Ajouter au panier</button>
        </div>


        <slot name="image" />

    </div>
</template>

<script setup>

const props = defineProps(['product'])
</script>