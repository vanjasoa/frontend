<template>

    <div class="flex flex-col items-center font-poppins">
        <div  class="fixed z-40 -mt-24  md:-mt-44 w-40 md:w-72">

            <slot name="retour" />
        </div>

        <div class="flex justify-around my-2 mt-20 w-full">
            <slot name="category" />
        </div>
        <div class="flex justify-around my-2 w-full">
            <slot name="pub" />
        </div>
        <div class="flex flex-col w-full">
            <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 p-4">
                <slot name="productlist" />
            </div>
        </div>

    </div>
</template>