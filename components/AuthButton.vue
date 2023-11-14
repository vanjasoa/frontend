<template>
    <div class="flex flex-col items-center mx-16">
        <div class="w-full h-[70px] border-4 border-black rounded-lg flex justify-around lg:w-64">
            <button @click="emit('login')" class="font-extrabold active:bg-black " >CONNEXION</button>
            <button @click="emit('register')" class="font-extrabold active:bg-black" >INSCRIPTION</button>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['login','register'])
//const active = ref('bg-black text-white w-48 h-12 my-2 rounded-md')
</script>