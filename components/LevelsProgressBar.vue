<template>
    <div class="w-full h-[400px] border-4">
        <div class="flex justify-between mx-16">
            <div class="w-[150px] h-[150px]">
                <slot name="level" />
            </div>
            <div class="w-[150px] h-[150px]">
                <slot name="next-level" />
            </div>
    
        </div>
        
        <div class="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 my-16">
            <div class="bg-[#F1C534] h-4 rounded-full" style="width: 45%"></div>
        </div>
    </div>
</template>