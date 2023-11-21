<template>
    <div v-for="[name, items] in Object.entries(productCart.groupedItems)">
        {{ name }}
        <h2>{{ items.length }} X {{ items.map((i) => i.prix)[0] }} Ariary = {{ items.map((i) => i.prix).reduce((totalItemPrice,
            prix) => totalItemPrice + prix, 0) }} Ariary</h2>
        <h4>{{ items.length }} X {{ items.map((i) => i.point)[0] }} Point = {{ items.map((i) => i.point).reduce((totalItemPrice,
            point) => totalItemPrice + point, 0) }} Point</h4>
    </div>
    <div>
        Montant Total {{
            productCart.items
                .map((p) => p.prix)
                .reduce((acc, curr) => acc + curr, 0)
        }}
        Total des Points {{
            productCart.items
                .map((p) => p.point)
                .reduce((acc, curr) => acc + curr, 0)
        }}
    </div>
    <div>

        <button class="border-2 rounded-md border-black" @click="sendData">Enregistrer</button>
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
        Total : props.productCart.itemsTotal
    }
    emit('saveCart',data)
}
</script>