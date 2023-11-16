<template>
    <div>
        <div class="flex flex-col justify-center items-center">
            <div class="mt-[-50px]">
                <slot name="retour" />
            </div>
            <div class="m-8">
                <slot name="levels" />
            </div>
        </div>
    </div>
</template>