<template>
    <div v-if="loading" class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <span class="text-white">Chargement en cours...</span>
    </div>
  </template>
  
  <script setup>
  const loading = ref(false);
  const props =  defineProps(['showAuth'])
  
  onMounted(() => {
    watchEffect(() => {
      loading.value = props.showAuth.value !== null;
    });
  });
  </script>
  
  <style scoped>
  /* Styles spécifiques si nécessaire */
  </style>
  