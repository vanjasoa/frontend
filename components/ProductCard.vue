<template>
    <div class="flex flex-col w-full h-[283px] border-4 border-black rounded-lg">

        <div>
            <slot name="point" />
        </div>

        <div class="flex flex-col w-full p-4">
            <NuxtImg :src="img(props.product.image)"/>
            <div class="m-1">
                <h1 class="text-xl font-extrabold">{{ props.product.name }}</h1>
                <h2>{{ props.product.prix }}</h2>
                <h3>Pour 3 personnes </h3>
            </div>
            <button class=" border-2 border-black rounded-xl h-[40px] w-full">Ajouter au panier</button>
        </div>


        <slot name="image" />

    </div>
</template>

<script setup>
const { getThumbnail: img } = useDirectusFiles();

const props = defineProps(['product'])
</script>