<template>
    <div class="flex flex-col items-center -mt-8 mx-16 ">
        <div class="w-full  bg-white h-[70px] border-4 border-black rounded-lg flex justify-around lg:w-64">
            <button @click="showLogin" :class="{ 'bg-black text-white p-2 m-2 transition-shadow delay-500 rounded-md': activeTab === 'login' }" class="font-extrabold " >CONNEXION</button>
            <button @click="showRegister" :class="{ 'bg-black text-white p-2 m-2 transition-shadow delay-500 rounded-md': activeTab === 'register' }" class="font-extrabold" >INSCRIPTION</button>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['login','register'])
const props = defineProps(['auth'])
const activeTab = ref('home');

const showLogin = () => {
  activeTab.value = 'login';
  emit('login')
};

const showRegister = () => {
  activeTab.value = 'register';
  emit('register')
};

const showHome = () => {
  activeTab.value = 'home';
};
</script>