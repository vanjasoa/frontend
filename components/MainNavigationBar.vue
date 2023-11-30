<template>
    <!-- <div class=" h-30 bg-[#E61B21] flex justify-around rounded-b-full items-center lg:justify-end lg:flex" style="width: 800px;">
        <div class="mx-auto lg:-mx-200">
            <slot name="logo" />
        </div>

        <div class="flex justify-end items-center m-4">
            <slot name="profil" />
        </div>
    </div>     -->
    <img src="../assets/images/header.png" alt="">
    <div class="flex items-center justify-center">
        <!-- <div class="w-40 h-18 -mt-48 object-cover">
            <slot name="logo" />
        </div>
             -->
         <div  class="w-40 h-16 -mt-60 object-cover">
            <slot name="logo" />
        </div>

        <div class="flex justify-end items-center  -mt-52">
            <slot name="profil" />
        </div>
    </div>
    
</template>