<template>
    <!-- <div class="flex flex-col w-full h-128 border-4 border-black rounded-lg  shadow-md">

        <div class=" top-0 mt-[-60px] ml-28">
            <slot name="point" />
        </div>

    </div> -->
    <div class=" font-poppins">
        <div class="">

            <div class="  text-center p-1 border-black rounded-lg  shadow-md   " style="border-width: 1px;" >
                <NuxtImg class="w-full rounded-md  h-36" :src="img(props.product.image)"/>
                <div class="m-1">
                    <p class=" font-bold text-xs">{{ props.product.name }}</p>
                    <h2 class="text-green-500 font-extrabold">{{ props.product.prix }} AR</h2>
                </div>
                <button class="  bg-black text-white text-xs font-bold rounded-md  p-2 " @click="emit('addProduct',product)">Ajouter au panier</button>
                
            </div>
            <div class="-mt-80 ml-20 absolute ">
                    <slot name="point" />
            </div>

        </div>

        
    </div>



</template>

<script setup>
const { getThumbnail: img } = useDirectusFiles();

const props = defineProps(['product'])
const emit = defineEmits(['addProduct'])
</script>