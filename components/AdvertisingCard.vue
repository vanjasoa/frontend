<template>
    <div class="border-2 w-full h-[140px] mx-2 rounded-md">
        <img :src="pub+'.jpeg'" alt="">
    </div>
</template>

<script setup>
const pub = ref('pub')
</script>