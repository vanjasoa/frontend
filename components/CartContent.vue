<template>
    <div v-for="[name, items] in Object.entries(productCart.groupedItems)">
        {{ name }}
        <h2>{{ items.length }} X {{ items.map((i) => i.prix)[0] }} Ariary = {{ items.map((i) => i.prix).reduce((totalItemPrice,
            prix) => totalItemPrice + prix, 0) }} Ariary</h2>
        <h4>{{ items.length }} X {{ items.map((i) => i.point)[0] }} Point = {{ items.map((i) => i.point).reduce((totalItemPrice,
            point) => totalItemPrice + point, 0) }} Point</h4>
    </div>
    <div>
        Total {{
            productCart.items
                .map((p) => p.prix)
                .reduce((acc, curr) => acc + curr, 0)
        }}
        Total Point {{
            productCart.items
                .map((p) => p.point)
                .reduce((acc, curr) => acc + curr, 0)
        }}
    </div>
    <div>
        item send
        <h2>{{ productCart.itemsSend }}</h2>
        <p>Total point: {{ productCart.itemsSend.map((p) => p.point)
                .reduce((acc, curr) => acc + curr, 0) }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    'productCart': Object
})
</script>