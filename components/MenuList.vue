<template>
     <h1 class="font-bold text-xl w-full  mt-4 mb-24">Que voulez-vous faire ?</h1>
    <div class="flex flex-col items-center  text-center  lg:flex-row lg:justify-center font-poppins">
       
        <hr>
        <slot name="menulist" />
    </div>
    <slot name="avantages" />
</template>