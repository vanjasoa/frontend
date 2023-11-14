<template>
    <div>
        <div class="flex flex-col items-center">
            <div class="mt-[-100px]">
                <slot name="retour" />
            </div>
            
            <div class="flex justify-around my-2">
                <slot name="category" />
            </div>
            <div class="flex justify-around my-16">
                <div class="grid grid-cols-2 gap-16 place-content-evenly">
                    <slot name="productlist" />
                </div>
            </div>

        </div>
    </div>
</template>