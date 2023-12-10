<template>
    <div v-for="[name, items] in Object.entries(productCart.groupedItems)">
        <div class="flex justify-around font-poppins">

            <div class="flex ">
                <span class="text-md font-extrabold">{{ name }}</span>
                <span class="text-green-500">{{ items.map((i) => i.prix)[0] }} Ariary</span>
                <span class="text-green-500">{{ items.map((i) => i.point)[0] }} Point</span>
            </div>
            <div class="border-2 rounded-full w-40 flex justify-around items-center">
                <button @click="productCart.removeItem(items[0])" class="rounded-full bg-slate-200 w-8 h-8 mx-auto"> - </button>
                <span class="text-md font-semibold mx-auto">{{ items.length }}</span>
                <button @click="productCart.addItem(items[0])" class="rounded-full bg-black text-white w-8 h-8 mx-auto"> + </button>
            </div>
        </div>
    </div>
    <div class="border-2 border-black rounded-lg w-full p-4 flex flex-col text-center font-poppins">
        <div class="flex justify-between">
            <span class="font-extrabold">Total</span>
            <span class="text-green-500 font-extrabold text-xl">{{ productCart.items.map((p) => p.prix).reduce((acc,
                curr) => acc + curr, 0) }} Ariary</span>
        </div>
        <div class="flex justify-between">
            <span class="font-extrabold">Total</span>
            <span class="text-green-500 font-extrabold text-xl">{{ productCart.items.map((p) => p.point).reduce((acc,
                curr) => acc + curr, 0) }} Points</span>
        </div>
        <div>
            <button class="rounded-md bg-red-500 text-white font-extrabold p-2" @click="sendData">Enregistrer la commande</button>
        </div>
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