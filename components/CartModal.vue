<template>
    <div class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="w-full h-[40px] bg-[#E61B21]">
            <div>
                <slot name="retour" />
            </div>
            <div>
                <h2>{{ props.title_cart }}</h2>
            </div>
            <div class="flex justify-end bg-white">
                <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.1282 1.6269C13.6725 0.591914 15.1544 0.591916 15.6986 1.62691L19.0856 8.06766C19.2958 8.46741 19.68 8.74658 20.1252 8.82298L27.2973 10.0538C28.4498 10.2516 28.9077 11.661 28.0916 12.4985L23.0127 17.7099C22.6975 18.0334 22.5507 18.4851 22.6156 18.932L23.6613 26.1335C23.8293 27.2907 22.6304 28.1618 21.5818 27.6444L15.0559 24.4245C14.6509 24.2246 14.1759 24.2246 13.7709 24.4245L7.24506 27.6444C6.19639 28.1618 4.99749 27.2907 5.16553 26.1335L6.21124 18.932C6.27614 18.4851 6.12937 18.0334 5.81414 17.7099L0.735239 12.4985C-0.0809097 11.661 0.377031 10.2516 1.52955 10.0538L8.70168 8.82298C9.14682 8.74658 9.53108 8.46741 9.74129 8.06766L13.1282 1.6269Z"
                        fill="#F1C534" />
                </svg>
                <span class="text-[#F1C534] font-extrabold text-xl">{{ props.totalPoint }} point</span>

            </div>

        </div>
        <div class="w-full h-[1000px] bg-slate-300">
            <slot name="cart" />

        </div>
    </div>
</template>

<script setup>

const props = defineProps(['totalPoint','title_cart'])

</script>