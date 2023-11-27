<template>
    <div class="flex flex-col w-full h-128 border-4 border-black rounded-lg relative shadow-md">

        <div class="absolute top-0 mt-[-60px] ml-28">
            <slot name="point" />
        </div>

        <div class="flex flex-col w-full p-4">
            <NuxtImg class="w-full rounded-md" :src="img(props.product.image)"/>
            <div class="m-1">
                <h1 class="text-xl font-extrabold">{{ props.product.name }}</h1>
                <h2 class="text-green-500 font-extrabold">{{ props.product.prix }} AR</h2>
                <h3>Pour 3 personnes </h3>
            </div>
            <button class="border-2 border-black rounded-xl h-[40px] w-full active:bg-slate-400" @click="emit('addProduct',product)">Ajouter au panier</button>
        </div>

    </div>
</template>

<script setup>
const { getThumbnail: img } = useDirectusFiles();

const props = defineProps(['product'])
const emit = defineEmits(['addProduct'])
</script>