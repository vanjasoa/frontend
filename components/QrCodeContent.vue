<template>
    <div class="flex flex-col justify-center items-center   font-poppins">
        <div class="fixed z-40 -mt-96  w-40 md:w-72">
            <slot name="retour" />
        </div>
        <div >
            <!--QRCodeVue3 :width="250" :height="250" :value="id_client"
                :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
                :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }" :dotsOptions="{
                    type: 'square',
                    color: '#fff',
                    gradient: {
                        type: 'linear',
                        rotation: 0,
                        colorStops: [
                            { offset: 0, color: '#000' },
                            { offset: 1, color: '#000' },
                        ],
                    },
                }" :backgroundOptions="{ color: '#ffffff' }" :cornersSquareOptions="{ type: 'square', color: '#000000' }"
                :cornersDotOptions="{ type: undefined, color: '#000000' }" fileExt="png" :download="true" myclass="my-qur"
                imgclass="img-qr" downloadButton="my-button" :downloadOptions="{ name: 'vqr', extension: 'png' }"
                :ButtonName="button_name"
                 /-->
                 <qrcode-vue class="mt-32" :value="id_client" :size="size" level="H" />

        </div>
        <h1 class="font-bold mt-8">Présentez votre pass</h1>
    </div>
</template>

<script setup>

//import QRCodeVue3 from "qrcode-vue3";
import QrcodeVue from 'qrcode.vue'
const size = ref(200)

const props = defineProps(['id_client'])
</script>