<template>
    <div class="flex flex-col items-center font-poppins">
        <div class=" ">
            <slot name="retour" />
        </div>

        <div class="flex justify-around my-2 w-full">
            <slot name="category" />
        </div>
        <div class="flex justify-around my-2 w-full">
            <slot name="pub" />
        </div>
        <div class="flex flex-col w-full">
            <div class="grid grid-cols-2 gap-8 p-4">
                <slot name="productlist" />
            </div>
        </div>

    </div>
</template>