<template>
    <div class="border-2 w-full  mx-2 rounded-md font-poppins">
        <img class="object-cover rounded-md" :src="pub+'.jpeg'" alt="">
    </div>
</template>

<script setup>
const pub = ref('pub')
</script>