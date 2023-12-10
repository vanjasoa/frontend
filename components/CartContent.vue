<template>


    <div class=" flex ">

        <div class=" mt-32 w-full shadow-md sm:rounded-lg">
            <table  class="w-full text-xs text-left rtl:text-right text-gray-500">
                <thead class=" text-center text-xs text-gray-700 uppercase bg-gray-50 rounded-t-lg ">
                    <tr>
                        <th scope="col" class=" text-center px-1 py-3">
                            Produit
                        </th>
                        <th scope="col" class=" text-center px-1 py-3">
                                Prix
                        </th>
                        <th scope="col" class=" text-center px-1 py-3">
                            Point
                        </th>
                        <th scope="col" class=" text-center px-1 py-3">
                             Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr 
                    v-for="[name, items] in Object.entries(productCart.groupedItems)"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-1 w-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ name }}
                        </th>
                        <td class="px-1 py-4">
                            <span class="text-green-500">{{ items.map((i) => i.prix)[0] }} Ariary</span>
                        </td>
                        <td class="px-1 py-4">
                            <span class="text-green-500">{{ items.map((i) => i.point)[0] }} Point</span>
                        </td>
                        <td class="px-1 py-4">
                            <div class="border-2 rounded-full w-20 flex justify-around items-center">
                                <button @click="productCart.removeItem(items[0])" class="rounded-full bg-slate-200 w-6 h-6 mx-auto"> - </button>
                                <span class="text-md font-semibold mx-auto">{{ items.length }}</span>
                                <button @click="productCart.addItem(items[0])" class="rounded-full bg-black text-white w-6 h-6 mx-auto"> + </button>
                            </div>
                        </td>
   
                    </tr>
                </tbody>
            </table>
        </div>


        <div class="fixed bottom-4 bg-white w-full p-4">

            <div class="   border-black rounded-lg shadow-lg p-4  text-center font-poppins" style="border-width: 1px;">
            <div class="flex justify-between">
                <span class="font-extrabold">Prix total</span>
                <span class="text-green-500 font-extrabold text-xl">{{ productCart.items.map((p) => p.prix).reduce((acc,
                    curr) => acc + curr, 0) }} Ariary</span>
            </div>
            <div class="flex justify-between mt-2">
                <span class="font-extrabold">Total points</span>
                <span class="text-green-500 font-extrabold text-xl">{{ productCart.items.map((p) => p.point).reduce((acc,
                    curr) => acc + curr, 0) }} Points</span>
            </div>
            <div class="mt-6">
                <button class="rounded-md w-full bg-red-500 text-white font-bold p-2 " @click="sendData">Enregistrer la commande</button>
            </div>
        </div>
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