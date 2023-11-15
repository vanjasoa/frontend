<template>
        <div class="flex flex-col justify-center items-center">
            <div class="mt-[-100px]">
                <slot name="retour" />
            </div>
            <div class="my-16">
                <QRCodeVue3 value="Simple QR code" />
            </div>
            <h1 class="text-xl font-extrabold">Présentez votre pass</h1>
        </div>
</template>

<script setup>

import QRCodeVue3 from "qrcode-vue3";

const props = defineProps(['id_client'])
</script>