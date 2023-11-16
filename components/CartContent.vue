<template>
    <div v-for="[name, items] in Object.entries(productCart)" :key="name">
        <span>{{ name }}</span>
        <!--span class="px-6 py-4">{{ items.map((i) => i.prix)[0] }}</span-->
        <span>{{ items.length }}</span>
        <!--span>
            {{
                      items
                        .map((i) => i.prix)
                        .reduce(
                          (totalItemPrice, prix) => totalItemPrice + prix,
                          0
                        )
                    }}
        </span-->
    </div>
    <div>
        total:
        <span>
            {{
                      productCart
                        .map((p) => p.prix)
                        .reduce((acc, curr) => acc + curr, 0)
                    }}
        </span>
    </div>
</template>

<script setup>
const props = defineProps({
    'productCart':Object
})
</script>