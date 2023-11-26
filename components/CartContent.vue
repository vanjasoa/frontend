<template>
    <div v-for="[name, items] in Object.entries(productCart.groupedItems)">
        <div class="flex justify-around">
            <div class="flex flex-col">
                <span class="text-md font-extrabold">{{ name }}</span>
                <span class="text-green-500">{{ items.map((i) => i.prix)[0] }} Ariary</span>
                <span class="text-green-500">{{ items.map((i) => i.point)[0] }} Point</span>
            </div>
            <div class="border-2 border-black rounded-full w-40 flex justify-around items-center">
                <button class="rounded-full bg-slate-200 w-8 h-8 mx-auto"> - </button>
                <span class="text-md font-semibold mx-auto">{{ items.length }}</span>
                <button class="rounded-full bg-black text-white w-8 h-8 mx-auto"> + </button>
            </div>
        </div>


        <!--h2>{{ items.length }} X {{ items.map((i) => i.prix)[0] }} Ariary = {{ items.map((i) =>
            i.prix).reduce((totalItemPrice,
                prix) => totalItemPrice + prix, 0) }} Ariary</h2>
        <h4>{{ items.length }} X {{ items.map((i) => i.point)[0] }} Point = {{ items.map((i) =>
            i.point).reduce((totalItemPrice,
                point) => totalItemPrice + point, 0) }} Point</h4-->
    </div>
    <div class="border-2 border-black rounded-md w-full p-4 flex flex-col">
        <div class="flex justify-between">
            <span class="font-extrabold">Total</span>
            <span class="text-green-500 font-extrabold text-xl">{{productCart.items.map((p) => p.prix).reduce((acc, curr) => acc + curr, 0)}} Ariary</span>
        </div>
        <div class="flex justify-between">
            <span class="font-extrabold">Total</span>
            <span class="text-green-500 font-extrabold text-xl">{{productCart.items.map((p) => p.point).reduce((acc, curr) => acc + curr, 0)}} Points</span> 
        </div>
    </div>
    <div>

        <button class="rounded-md bg-red-500 text-white font-extrabold p-2" @click="sendData">Enregistrer la commande</button>
    </div>
</template>

<script setup>
const emit = defineEmits(['saveCart'])
const props = defineProps({
    'productCart': Object
})

const sendData = () => {
    let data = {
        panier: props.productCart.itemsSend,
        Total: props.productCart.itemsTotal
    }
    emit('saveCart', data)
}
</script>