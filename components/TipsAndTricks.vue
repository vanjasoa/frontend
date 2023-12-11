<template>
    <div class="bg-red-600  font-poppins">
        <div class="m-10 text-red-600"><h1>test</h1></div>
        <div class="flex flex-col items-center">
            <div class=" ">
            <img src="../assets/images/avantage.png" class="w-40  object-cover" alt="">
        </div>
        </div>

       
       
        <div id="controls-carousel" class="relative w-full" data-carousel="slide">

            <!-- Carousel wrapper -->
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                <!-- Item 1 -->
                <div class=" duration-700 ease-in-out" data-carousel-item> 
                    <div class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  text-white text-center">
                        <h4 class="font-bold ">Tips et Astuces</h4>
                        <p class="text-xs mt-4 ">Utiliser ce programme de fidélité pour </p>
                        <p class="text-xs ">acheter vos produits et gagnez des points </p>
                    </div>
                </div>
            </div>
            <!-- Slider controls -->
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-white group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-white group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>
        <div class="text-center ">
            <button class="bg-white text-black p-4 rounded-md font-bold pl-20 pr-20">Voir les avantages</button>
            <p class="mt-6 text-red-600">e</p>

        </div>
    </div>
</template>
