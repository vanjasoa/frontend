<template>
    <div v-for="[name, items] in Object.entries(productCart.groupedItems)">
        <div class="flex justify-around">
            <div class="flex ">

                <span class="text-md font-extrabold">{{ name }}</span>
                <span class="text-green-500">{{ items.map((i) => i.prix)[0] }} Ariary</span>
                <span class="text-green-500">{{ items.map((i) => i.point)[0] }} Point</span>
            </div>
            <div class="border-2 rounded-full w-40 flex justify-around items-center">
                <button @click="productCart.removeItem(items[0])" class="rounded-full bg-slate-200 w-8 h-8 mx-auto"> -
                </button>
                <span class="text-md font-semibold mx-auto">{{ items.length }}</span>
                <button :disabled="parseInt(point) <= productCart.items.map((p) => p.point).reduce((acc,
                    curr) => acc + curr, 0)" @click="productCart.addItem(items[0])"
                    class="rounded-full bg-black text-white w-8 h-8 mx-auto"> + </button>
            </div>
        </div>
    </div>
    <div class="border-2 border-black rounded-lg w-full p-4 flex flex-col text-center">
        <div class="flex justify-between">
            <span class="font-extrabold">Prix total</span>
            <span class="text-green-500 font-extrabold text-xl">{{ productCart.items.map((p) => p.prix).reduce((acc,
                curr) => acc + curr, 0) }} Ariary</span>
        </div>
        <div class="flex justify-between">
            <span class="font-extrabold">Total point</span>
            <span v-if="parseInt(point) <= productCart.items.map((p) => p.point).reduce((acc, curr) => acc + curr, 0)"
                class="text-red-500 font-extrabold text-xl">{{ productCart.items.map((p) => p.point).reduce((acc,
                    curr) => acc + curr, 0) }} Points</span>
            <span v-if="parseInt(point) > productCart.items.map((p) => p.point).reduce((acc, curr) => acc + curr, 0)"
                class="text-green-500 font-extrabold text-xl">{{ productCart.items.map((p) => p.point).reduce((acc,
                    curr) => acc + curr, 0) }} Points</span>
        </div>
        <div>
            <button v-if="parseInt(point) > productCart.items.map((p) => p.point).reduce((acc, curr) => acc + curr, 0)"
                :disabled="parseInt(point) <= productCart.items.map((p) => p.point).reduce((acc, curr) => acc + curr, 0)"
                class="rounded-md bg-red-500 text-white font-extrabold p-2 bg-gray-900" @click="sendData">Enregistrer la
                commande</button>
            <button v-if="parseInt(point) <= productCart.items.map((p) => p.point).reduce((acc, curr) => acc + curr, 0)"
                :disabled="parseInt(point) <= productCart.items.map((p) => p.point).reduce((acc, curr) => acc + curr, 0)"
                class="rounded-md  text-white font-extrabold p-2 bg-gray-400" @click="sendData">Enregistrer la
                commande</button>

        </div>
    </div>
</template>

<script setup>
import { stringifyQuery } from 'vue-router';

const emit = defineEmits(['saveCart'])
const props = defineProps({
    'productCart': Object,
    'point': String
})

const sendData = () => {
    let data = {
        panier: props.productCart.itemsSend,
        Total: props.productCart.itemsTotal
    }
    emit('saveCart', data)
}

</script>