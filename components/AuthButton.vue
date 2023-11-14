<template>
    <div class="flex flex-col items-center mx-8">
        <div class="w-full h-[70px] border-4 border-black rounded-lg flex justify-around">
            <button @click="emit('login')" class="font-extrabold active:bg-blue-600">CONNEXION</button>
            <button @click="emit('register')" class="font-extrabold active:bg-blue-600">INSCRIPTION</button>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['login','register'])
</script>