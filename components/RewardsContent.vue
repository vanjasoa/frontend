<template>
    <div>
        <div class="flex flex-col justify-center items-center">
            <div class="mt-[-50px] flex flex-col items-center">
                <slot name="retour" />
                <h2 class="font-extrabold text-xl m-4">
                    Qu’est ce qui est <span class="text-red-600">mieux</span> qu'une pizza ?
                    Une pizza <span class="text-red-600">gratuite</span>.
                </h2>
                <p class="m-4 text-gray-400">
                    Plus vous collectez des points,
                    plus vos récompenses seront grandes.
                </p>
            </div>
            <div class="flex w-full flex-col p-4">
                <slot name="levels" />
            </div>
        </div>
    </div>
</template>