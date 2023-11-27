<template>
    <div class="w-full h-[481px] border-2 border-[#F5BF50] rounded-xl my-32 bg-white shadow-lg flex flex-col">
      <div class="flex justify-around">
        <div class="self-start mb-8 mt-[-100px] w-full h-[230px]">
          <slot name="image" />
        </div>
        <div class="flex self-end mb-4">
          <h1 class="font-extrabold text-[#F5BF50] text-6xl self-end mx-2">{{ props.level.pointsRequired }}</h1>
          <span class="text-[#F5BF50] font-extrabold text-2xl self-end mx-2">POINTS</span>
        </div>
      </div>
      <div class="w-full h-[62px] bg-[#F5BF50] flex items-center justify-center">
        <h2 class="text-4xl font-extrabold text-[#A8062B]">{{ props.level.name }}</h2>
      </div>
      
        <ul class="flex w-full p-4 justify-center" >
          <li class="m-1" v-for="category in props.categoryAvailable">
            <img class="rounded" :src="category+'.jpeg'" alt="">
          </li>
        </ul>
      
      <div class="mx-4">
          <button @click="showRewards = true" class="w-full p-2 bg-black text-white font-extrabold rounded-md flex-shrink-0 hover:bg-gray-800">
            Réclamer maintenant
          </button>
      </div>
    </div>
    <div class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-white" v-if="showRewards === true">
      <div class="flex p-4">
        <slot name="category" />
      </div>      
            <slot name="products" />
    </div>
  </template>
  
  <script setup>
  const props = defineProps(['level','categoryAvailable'])
  const showRewards = ref(false)
  </script>
  