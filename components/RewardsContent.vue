<template>
    <div class="flex flex-col justify-center items-center font-poppins">
        <div class=" w-40 md:w-72">
            <slot   name="retour" />
        </div>
        <div class=" flex flex-col items-center">
            
            <h2 class="font-bold mt-6">
                Qu’est ce qui est <span class="text-red-600">mieux</span> qu'une pizza ?
                Une pizza <span class="text-red-600">gratuite</span>.
            </h2>
            <p class=" mt-6 text-gray-400 text-sm">
                Plus vous collectez des points,
                plus vos récompenses seront grandes.
            </p>
        </div>
        <div class="flex w-full flex-col p-4">
            <slot name="levels" />
        </div>
    </div>
</template>