<template>
    <div class="flex w-full border-2 rounded-xl items-end mx-2">

        <h1 class="font-extrabold text-xl items my-2 mx-auto">{{ props.name }}</h1>

    </div>
</template>

<script setup>

const props = defineProps(['name'])
</script>