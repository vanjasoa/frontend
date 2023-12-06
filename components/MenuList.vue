<template>
    <div class="flex flex-col items-center gap-2 lg:flex-row lg:justify-center">
        <h1 class="font-extrabold text-2xl m-4">Que voulez-vous faire ?</h1>
        <slot name="menulist" />
    </div>
    <slot name="avantages" />
</template>