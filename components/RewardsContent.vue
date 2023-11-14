<template>
    <div>
        <div class="flex flex-col justify-center items-center">
            <div class="mt-[-100px]">
                <slot name="retour" />
            </div>
            
            <slot name="levels" />
        </div>
    </div>
</template>