export const useCommandeStore = defineStore('cart', () => {
    const items = ref([]); // state

    const addItem = (item) => {
        items.value.push({...item});
    } // action

    const removeItem = (item) => {
        const index = items.value.findIndex(i => i.name === item.name);
        items.value.splice(index, 1);
    } // action

    const $reset = () => {
        items.value = [];
    } // action $reset

    return { items, addItem, removeItem, $reset}
})