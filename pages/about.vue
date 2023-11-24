<template>
  <div class="flex flex-col items-center relative">
    <!-- Boutons pour sélectionner le menu -->
    <div v-if="showMenu === null">
      <button @click="showMenu = 'collect'" class="mb-4 bg-blue-500 text-white px-4 py-2 rounded">Je collecte</button>
      <button @click="showMenu = 'rewards'" class="mb-4 bg-green-500 text-white px-4 py-2 rounded">Mes récompenses</button>
    </div>

    <!-- Contenu du menu "Je collecte" ou "Mes récompenses" -->
    <div v-if="showMenu === 'collect' || showMenu === 'rewards'">
      <h2 class="text-2xl mb-4">{{ showMenu === 'collect' ? 'Je collecte' : 'Mes récompenses' }}</h2>

      <!-- Sélection de catégorie -->
      <div v-if="selectedCategory === null" class="mb-4">
        <div class="flex space-x-4">
          <div v-for="category in categories" :key="category" class="border p-4 cursor-pointer" @click="selectCategory(category)">
            {{ category }}
          </div>
        </div>
        <button @click="showMenu = null">Retour menu principale</button>
      </div>

      <!-- Affichage des produits de la catégorie sélectionnée -->
      <div v-if="selectedCategory">
        <h3 class="text-xl mb-2">{{ selectedCategory }}</h3>
        <div class="flex flex-wrap">
          <div v-for="product in getProductsByCategory(selectedCategory)" :key="product.name" class="border p-4 m-2">
            {{ product.name }} - {{ product.point }} points
            <button @click="addToCart(product)" class="ml-2 bg-blue-500 text-white px-2 py-1 rounded">Ajouter au panier</button>
          </div>
        </div>
        <button @click="selectedCategory = null">retour category</button>
      </div>
    </div>

    <!-- Bouton pour basculer l'affichage du panier -->
    <button @click="toggleCart" class="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded">Panier</button>

    <!-- Affichage du panier -->
    <div v-if="cartVisible" class="fixed top-0 right-0 p-4 bg-white border shadow">
      <h2 class="text-xl mb-2">Panier</h2>
      <h3>{{ titre_panier }}</h3>
      <ul v-if="cart.length > 0">
        <li v-for="item in cart" :key="item.product.name" class="mb-2">
          {{ item.product.name }} - {{ item.product.point }} points (Quantité: {{ item.quantity }})
        </li>
      </ul>
      <div v-else>
        Le panier est vide.
      </div>
      <button @click="validateCart" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Valider le panier</button>
    </div>

    <div class="fixed top-0 left-0 p-4 bg-white border shadow">
      <span>Points : {{ totalPoints }}</span>
    </div>
  </div>
</template>

<script setup>
const showMenu = ref(null);
const selectedCategory = ref(null);
const cart = ref([]);
const cartVisible = ref(false); // Variable pour contrôler la visibilité du panier
const titre_panier = ref('test')
const totalPoints = ref(0)

const categories = ['Glace', 'Pizza'];
const products = [
  { name: 'Cornet de glace', category: 'Glace', point: 3 },
  { name: 'Pizza Margherita', category: 'Pizza', point: 5 },
  { name: 'Sundae', category: 'Glace', point: 4 },
  { name: 'Pizza Pepperoni', category: 'Pizza', point: 6 },
  // Ajoutez d'autres produits fictifs
];

const rewardLevels = [
  { name: 'Niveau 1', pointsRequired: 5, categories: ['Pizza', 'Jus'] },
  { name: 'Niveau 2', pointsRequired: 10, categories: ['Fastfood'] },
  { name: 'Niveau 3', pointsRequired: 15, categories: ['Autres'] },
];

const selectCategory = (category) => {
  selectedCategory.value = category;
};

const getProductsByCategory = (category) => {
  return products.filter((product) => product.category === category);
};

const addToCart = (product) => {
  const existingItem = cart.value.find((item) => item.product.name === product.name);
  cartVisible.value = true;
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.value.push({ product, quantity: 1 });
  }
};

const toggleCart = () => {
  cartVisible.value = !cartVisible.value;
  if(showMenu.value === 'collect')
  {
    titre_panier.value = 'panier collecter'
    console.log('hello')
  }
  if(showMenu.value === 'rewards')
  {
    titre_panier.value = 'panier rewards'
  }
  if(showMenu.value === null){
    titre_panier.value = 'panier vide'
  }
};

const validateCart = () => {
  if (showMenu.value === 'collect') {
    const collectedPoints = cart.value.reduce((total, item) => total + item.product.point * item.quantity, 0);
    console.log(`Points collectés: ${collectedPoints}`);
    totalPoints.value += collectedPoints
  } else if (showMenu.value === 'rewards') {

    const selectedRewardLevel = rewardLevels.find((level) => level.name === 'Niveau 3');
    const totalPointsRequired = selectedRewardLevel ? selectedRewardLevel.pointsRequired : 0;

    if (totalPoints.value >= totalPointsRequired) {
      console.log(`Félicitations ! Vous avez suffisamment de points pour réclamer vos récompenses.`);
      totalPoints.value -= totalPointsRequired;
      // Ajoutez ici la logique pour distribuer les récompenses, par exemple.
    } else {
      console.log(`Vous n'avez pas suffisamment de points pour réclamer vos récompenses.`);
    }
  }

  cart.value = [];

  // Retour au menu principal après la validation du panier
  showMenu.value = null;
  titre_panier.value = null;
  cartVisible.value = false;
};
</script>
