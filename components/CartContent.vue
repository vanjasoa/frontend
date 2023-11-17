<template>
    <div v-for="[name, items] in Object.entries(productCart.groupedItems)">
        {{ name }}
        <h2>{{ items.length }} X {{ items.map((i) => i.prix)[0] }} = {{ items.map((i) => i.prix).reduce((totalItemPrice,
            prix) => totalItemPrice + prix, 0) }}</h2>
    </div>
    <div>
        Total {{
            productCart.items
                .map((p) => p.prix)
                .reduce((acc, curr) => acc + curr, 0)
        }}
    </div>
</template>

<script setup>
const props = defineProps({
    'productCart': Object
})
</script>