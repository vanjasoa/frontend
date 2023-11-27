<template>
    <div class="w-full h-32 bg-[#E61B21] flex justify-around items-center lg:justify-end lg:flex">
        <div class="mx-auto lg:-mx-200">
            <slot name="logo" />
        </div>

        <div class="flex justify-end items-center m-4">
            <slot name="profil" />
        </div>
    </div>
</template>