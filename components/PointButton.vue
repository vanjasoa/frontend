<template>
    <div class="flex flex-col w-20 h-20 font-poppins ">
        <svg viewBox="0 0 124 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_99_698)">
                <path
                    d="M58.3464 22.1283C59.9783 19.025 64.4217 19.025 66.0536 22.1283L76.2091 41.4405C76.8394 42.6391 77.9916 43.4762 79.3263 43.7053L100.831 47.3959C104.287 47.989 105.66 52.215 103.213 54.726L87.9844 70.3522C87.0392 71.3221 86.5991 72.6765 86.7937 74.0167L89.9292 95.6098C90.4331 99.0797 86.8382 101.692 83.6939 100.14L64.1265 90.4854C62.9121 89.8862 61.4879 89.8862 60.2735 90.4854L40.7061 100.14C37.5618 101.692 33.9669 99.0797 34.4708 95.6098L37.6063 74.0167C37.8009 72.6765 37.3608 71.3221 36.4156 70.3522L21.1868 54.726C18.7396 52.2149 20.1127 47.989 23.5685 47.3959L45.0737 43.7053C46.4084 43.4762 47.5606 42.6391 48.1909 41.4405L58.3464 22.1283Z"
                    fill="#F1C534" />
            </g>
            
            <defs>
                <filter id="filter0_d_99_698" x="0.655878" y="0.509897" 
                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="9.64545" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_99_698" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_99_698" result="shape" />
                </filter>
            </defs>
        </svg>
        <span class=" text-md -mt-12 ml-8 text-white font-extrabold">{{ props.point }}</span>
    </div>
</template>

<script setup>

const props = defineProps(['point'])

</script>