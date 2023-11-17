
export const useCartStore = defineStore('cart', () => {
    const items = ref([]); // state

    const itemsCount = computed(() => items.value.length); // getter

    const groupedItems = computed(() => {
         return items.value.reduce((acc, item) => {
            if (!acc[item.name]) {
                acc[item.name] = [];
            }
            acc[item.name].push(item);
            return acc;
        }, {} );
    });

    const itemsSend = computed(() => {
        
        return items.value.reduce((accumulator, produit) => {
            const { id, name, prix, point } = produit;
            
            // Génération d'un nouvel objet pour chaque produit avec quantite et montant
            const nouvelleEntree = { id, designation:name, quantite: 1, prix, montant: prix, point: point };
            
            // Recherche si l'entrée existe déjà dans l'accumulateur
            const entreeExistante = accumulator.find((entree) => entree.id === id);
          
            if (entreeExistante) {
              // Si l'entrée existe déjà, mettez à jour la quantité et le montant
              entreeExistante.quantite += 1;
              entreeExistante.montant += prix;
              entreeExistante.point += point;
            } else {
              // Sinon, ajoutez la nouvelle entrée à l'accumulateur
              accumulator.push(nouvelleEntree);
            }
          
            return accumulator;
          }, []);
    });

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

    return { items, itemsCount, groupedItems, addItem, removeItem, $reset,itemsSend}
});