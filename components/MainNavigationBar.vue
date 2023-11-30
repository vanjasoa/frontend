<template>
    <img src="../assets/images/header.png" alt="">
    <div class="flex items-center justify-center">
        <div  class="w-40 h-16 -mt-60 object-cover">
            <slot name="logo" />
        </div>

        <div class="flex justify-end items-center  -mt-52">
            <slot name="profil" />
        </div>
    </div>
    
</template>