<template>
    <div class="flex w-full border-2 rounded-xl items-end mx-2">
        <img class="rounded-md" :src="props.name+'.jpeg'" alt="">
    </div>
</template>

<script setup>

const props = defineProps(['name'])
</script>