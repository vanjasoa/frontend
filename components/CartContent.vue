<template>
    <div class=" flex ">
        <div class=" mt-32 w-full shadow-md sm:rounded-lg">
            <table class="w-full text-xs text-left rtl:text-right text-gray-500">
                <thead class=" text-center text-xs text-gray-700 uppercase bg-gray-50 rounded-t-lg ">
                    <tr>
                        <th scope="col" class=" text-center px-1 py-3">
                            Produit
                        </th>
                        <th v-if="page=='collecter'" scope="col" class=" text-center px-1 py-3">
                            Prix
                        </th>
                        <th v-if="page=='rewards'" scope="col" class=" text-center px-1 py-3">
                            Point
                        </th> 
                        <th scope="col" class=" text-center px-1 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="[name, items] in Object.entries(productCart.groupedItems)"
                        class="bg-white border-b ">
                        <th scope="row" class="px-2 w-2 py-4 font-medium items-center text-gray-900 whitespace-nowrap">
                            {{ name }}
                        </th>
                        <td v-if="page=='collecter'" class="px-2 py-4">
                            <span class="text-green-500">{{ items.map((i) => i.prix)[0] }} Ariary</span>
                        </td>
                        <td v-if="page=='rewards'" class="px-1 py-4">
                            <span class="text-green-500">{{ items.map((i) => i.point)[0] }} Point</span>
                        </td> 
                        <td class="px-2 py-4">
                            <div class="border-2 rounded-full w-20 flex justify-around items-center">
                                <button @click="productCart.removeItem(items[0])"
                                    class="rounded-full bg-slate-200 w-6 h-6 mx-auto"> - </button>
                                <span class="text-md font-semibold mx-auto">{{ items.length }}</span>

                                <button v-if="page == 'collecter'" @click="productCart.addItem(items[0])"
                                    class="rounded-full bg-black text-white w-6 h-6 mx-auto"> + </button>
                                <button v-if="page == 'rewards'" :disabled="parseInt(props.point) <= productCart.items.map((p) =>
                                    p.point).reduce((acc,
                                        curr) => acc + curr, 0)" @click="productCart.addItem(items[0])"
                                    class="rounded-full bg-black text-white w-6 h-6 mx-auto"> + </button>
                            </div>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>


        <div class="fixed bottom-4 bg-white w-full p-4">

            <div class="   border-black rounded-lg shadow-lg p-4  text-center font-poppins" style="border-width: 1px;">

                <div v-if="page=='collecter'" class="flex justify-between">
                    <span class="font-extrabold">Prix total  {{ page }}</span>
                    <span class="text-green-500 font-extrabold text-xl">{{ productCart.items.map((p) => p.prix).reduce((acc,
                        curr) => acc + curr, 0) }} Ariary</span>
                </div>
                <div v-if="page=='rewards'" class="flex justify-between mt-2">
                    <span class="font-extrabold">Total points</span>
                    <span class="text-green-500 font-extrabold text-xl">{{ productCart.items.map((p) =>
                        p.point).reduce((acc,
                            curr) => acc + curr, 0) }} Points</span>
                </div>
                <div v-if="title=='rewards'" class="mt-6">
                    <button v-show="parseInt(props.point) >= productCart.items.map((p) =>
                                    p.point).reduce((acc,
                                        curr) => acc + curr, 0)" class="rounded-md w-full bg-red-500 text-white font-bold p-2 " @click="sendData">Enregistrer la
                        commande</button>
                    <button v-show="parseInt(props.point) < productCart.items.map((p) =>
                                    p.point).reduce((acc,
                                        curr) => acc + curr, 0)" :disabled="parseInt(props.point) <= productCart.items.map((p) =>
                                    p.point).reduce((acc,
                                        curr) => acc + curr, 0)" class="rounded-md w-full bg-gray-400 text-white font-bold p-2 " @click="sendData">Enregistrer la
                        commande</button>
                </div>
                <div v-else class="mt-6">
                    <button  class="rounded-md w-full bg-red-500 text-white font-bold p-2 " @click="sendData">Enregistrer la commande</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const emit = defineEmits(['saveCart'])
const props = defineProps({
    'productCart': Object,
    'page': String,
    'point': String,
    'title': String
})

const sendData = () => {
    let data = {
        panier: props.productCart.itemsSend,
        Total: props.productCart.itemsTotal
    }
    emit('saveCart', data)
}
</script>