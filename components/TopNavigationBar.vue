<template>
    <!-- <div class=" h-30 bg-[#E61B21] flex justify-around rounded-b-full items-center lg:justify-end lg:flex" style="width: 800px;">
        <div class="mx-auto lg:-mx-200">
            <slot name="logo" />
        </div>

        <div class="flex justify-end items-center m-4">
            <slot name="profil" />
        </div>v>-->
    <img class="w-full md:h-64" src="../assets/images/header.png" alt="">
    <div class="flex items-center font-poppins justify-center">
        <div class="w-48 h-16 -mt-64 object-cover">
            <slot name="logo" />
        </div>
            
    </div>
</template>