<template>
    <div class="w-full h-[481px] border-2 border-[#F5BF50] rounded-xl my-32">
        <div class="flex justify-around">
            <div class="self-start mb-8 mt-[-100px] w-full h-[230px]">
                <slot name="image" />
            </div>
            
            <div class="flex self-end mb-4">
                <h1 class="font-extrabold text-[#F5BF50] text-6xl self-end mx-2">{{ props.level.point }}</h1>
                <span class="text-[#F5BF50] font-extrabold text-2xl self-end">POINT</span>
            </div>
            
        </div>
        <div class="w-full h-[62px] bg-[#F5BF50] flex">
            <h2 class="text-4xl font-extrabold text-[#A8062B] m-auto">{{ props.level.name }}</h2>
        </div>
        <div>
            <p class="text-xl text-center">
                Il  faut débloquer un niveau supérieur pour réclamer des récompenses.
            </p>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['level'])
</script>