<template>
    <select v-model="selectedDay" :id="dayId" class="w-1/3 placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 text-xs">
        <option v-for="day in days" :key="day">{{ day }}</option>
    </select>


    <select v-model="selectedMonth" :id="monthId" class="w-1/3 mx-2 placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 text-xs">
        <option v-for="(month, index) in monthNames" :key="index + 1" :value="index + 1">{{ month }}</option>
    </select>


    <select v-model="selectedYear" :id="yearId" class="w-1/3 placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 text-xs">
        <option v-for="year in years" :key="year">{{ year }}</option>
    </select>

    <!--p>Date sélectionnée: {{ formattedDate }}</p-->
</template>
  
<script setup>
const props = defineProps(['props'])
const emit = defineEmits()
const dayId = `day-${props._uid}`;
const monthId = `month-${props._uid}`;
const yearId = `year-${props._uid}`;

const monthNames = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];

const days = generateDays();
const years = generateYears();

const selectedDay = ref(1);
const selectedMonth = ref(1);
const selectedYear = ref(new Date().getFullYear());

const formattedDate = computed(() => {
    const monthNumber = padZero(selectedMonth.value);
    return `${selectedYear.value}-${monthNumber}-${padZero(selectedDay.value)}`;
});

function generateDays() {
    const days = [];
    for (let i = 1; i <= 31; i++) {
        days.push(i);
    }
    return days;
}

function generateYears() {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear; year >= 1900; year--) {
        years.push(year);
    }
    return years;
}

function padZero(value) {
    return String(value).padStart(2, '0');
}

watchEffect(() => {
    emit('update:modelValue', formattedDate.value);
});
</script>
  