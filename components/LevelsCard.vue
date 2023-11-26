<template>
    <div class="w-full h-[481px] border-2 border-[#F5BF50] rounded-xl my-32 bg-white shadow-lg">
      <div class="flex justify-around">
        <div class="self-start mb-8 mt-[-100px] w-full h-[230px]">
          <slot name="image" />
        </div>
        <div class="flex self-end mb-4">
          <h1 class="font-extrabold text-[#F5BF50] text-6xl self-end mx-2">{{ props.level.pointsRequired }}</h1>
          <span class="text-[#F5BF50] font-extrabold text-2xl self-end">POINTS</span>
        </div>
      </div>
      <div class="w-full h-[62px] bg-[#F5BF50] flex items-center justify-center">
        <h2 class="text-4xl font-extrabold text-[#A8062B]">{{ props.level.name }}</h2>
      </div>
      <div class="mt-4">
        <p class="text-xl text-center">
          <slot name="category" />
          <button class="w-full p-2 bg-black text-white font-extrabold rounded-md mx-4 flex-shrink-0 hover:bg-gray-800">
            Réclamer maintenant
          </button>
        </p>
        <p class="mt-2">
          <slot name="products" />
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps(['level'])
  </script>
  