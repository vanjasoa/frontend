<template >
    <div class="z-40 font-poppins">
        <img  class="w-full md:h-64" src="../assets/images/header.png" alt="">
        <div class="flex   justify-between ">
            <div  class="w-48 h-12 -mt-36 sm:-mt-40 sm:mr-12 object-cover">
                <slot name="logo" />
            </div>

            <div class="flex items-center -mt-44" style="margin-right: 16px !important;">
                <slot name="profil" />
            </div>
        </div>
    </div>
    
</template>