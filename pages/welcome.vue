<template>
  <div class=" flex flex-col h-screen">
    <div class="fixed top-0  w-full ">
      <MainNavigationBar>
        <template #logo>
          <NuxtImg @click="showContent = null" class="w-64 h-32" src="logo.png" />
        </template>
        <template #profil>
          <PointButton :point="user.point" />
          <AccountButton @click="ProfilShow" />
        </template>
      </MainNavigationBar>
    </div>
    <div class="mt-48 ">
      <MenuList v-if="showContent === null">
        <template #menulist>
          <MenuButton v-for="(item, index) in itemsMenu" :key="index" :name="item.title" @click="showContent = index"
            :color="item.color" />
        </template>
      </MenuList>

      <div v-else>

        <CollectContent v-if="itemsMenu[showContent].title == 'Je collecte'">
          <template #retour>
            <MenuButton @click="showContent = null" :name="itemsMenu[showContent].title"
              :color="itemsMenu[showContent].color" />
          </template>
          <template #category>
            <CategoryCard v-for="category in categoryList" :name="category" v-if="selectedCategory === null"
              @click="selectCategory(category)" />
          </template>
          <template #pub>
            <AdvertisingCard />
          </template>
          <template #productlist>
            <ProductCard v-for="product in getProductsByCategory(selectedCategory)" :product="product"
              @add-product="addProduct" v-if="selectedCategory">

              <template #point>
                <PointButton :point="product.point" />
              </template>
            </ProductCard>
            <button v-if="selectedCategory" @click="selectedCategory = null">retour category</button>
          </template>
        </CollectContent>

        <QrCodeContent v-if="itemsMenu[showContent].title == 'Mon QR'" :id_client="user.id">
          <template #retour>
            <MenuButton @click="showContent = null" :name="itemsMenu[showContent].title"
              :color="itemsMenu[showContent].color" />
          </template>
        </QrCodeContent>

        <RewardsContent v-if="itemsMenu[showContent].title == 'Mes recompenses'">
          <template #retour>
            <MenuButton @click="showContent = null" :name="itemsMenu[showContent].title"
              :color="itemsMenu[showContent].color" />
          </template>
          <template #levels>
            <LevelsCard v-for="level in rewardLevels" :level="level" v-if="selectedCategory === null"
              :category-available="level.categories" :user-points="user.point">
              <template #image>
                <img :src="level.name+'.png'" />
              </template>
              <template #category>
                <CategoryCard v-for="category in level.categories" :name="category" @click="selectCategory(category)" />
              </template>
              <template #products>

              </template>
            </LevelsCard>

            <RewardsModal v-if="selectedCategory">
              <template #modal>
                <ProductCard v-for="product in getProductsByCategory(selectedCategory)" :product="product"
                  @add-product="addProduct">
                  <template #point>
                    <PointButton :point="product.point" />
                  </template>
                </ProductCard>
              </template>
            </RewardsModal>


            <button v-if="selectedCategory" @click="selectedCategory = null">retour rewards</button>
          </template>
        </RewardsContent>

        <ProfilContent v-if="itemsMenu[showContent].title == 'Profil'" @quit="deconnecter" :user-content="user"
          :historique="commande">
        </ProfilContent>

      </div>
      <div class="fixed bottom-0 left-0 w-full p-4 ">
        <button @click="toggleCart">
          <CartButtom :quantiter_produit="cart.itemsCount" />
        </button>

      </div>
      <TipsAndTricks/>
      <Footer/>
    </div>
    <!-- <footer class="bg-tansparent">

      <button @click="toggleCart">
        <CartButtom :quantiter_produit="cart.itemsCount" />
      </button>

    </footer> -->

    <CartModal v-if="showCart == true" :total-point="cart.itemsTotal" :title_cart="title_cart">
      <template #retour>
        <button @click="showCart = false">
          <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.22504 14L15.075 5.14999C15.5407 4.68159 15.802 4.04796 15.802 3.38749C15.802 2.72703 15.5407 2.0934 15.075 1.62499C14.8426 1.39067 14.5661 1.20469 14.2615 1.07776C13.9568 0.950843 13.6301 0.885498 13.3 0.885498C12.97 0.885498 12.6432 0.950843 12.3386 1.07776C12.034 1.20469 11.7574 1.39067 11.525 1.62499L0.925043 12.225C0.690722 12.4574 0.504736 12.7339 0.377815 13.0386C0.250893 13.3432 0.185547 13.67 0.185547 14C0.185547 14.33 0.250893 14.6568 0.377815 14.9614C0.504736 15.2661 0.690722 15.5426 0.925043 15.775L11.525 26.5C11.7586 26.7317 12.0357 26.915 12.3403 27.0394C12.6449 27.1638 12.971 27.2269 13.3 27.225C13.6291 27.2269 13.9552 27.1638 14.2598 27.0394C14.5644 26.915 14.8414 26.7317 15.075 26.5C15.5407 26.0316 15.802 25.398 15.802 24.7375C15.802 24.077 15.5407 23.4434 15.075 22.975L6.22504 14Z"
              fill="white" />
          </svg>

        </button>
      </template>
      <template #cart>
        <CartContent :productCart="cart" @saveCart="sendCart" />
      </template>
    </CartModal>



    <!--LevelsProgressBar>
          <template #level>
            <Level />
          </template>
          <template #next-level>
            <Level />
          </template>
        </LevelsProgressBar-->

  </div>
</template>

<script setup>

definePageMeta({
  middleware: ["auth"]
})

const { logout } = useDirectusAuth();
const user = useDirectusUser();
const router = useRouter();
const { getItems, createItems } = useDirectusItems();
const productList = ref([])
import { useCartStore } from '@/stores/cart';
const cart = useCartStore()
const commande = ref({})
//const showProduct = ref(true)
const title_cart = ref('')
const showContent = ref(null);
const showCart = ref(false);
const itemsMenu = [
  {
    title: "Mon QR",
    content: "Contenu Mon QrCode",
    color: '#11973F'
  },
  {
    title: "Je collecte",
    content: "Contenu collection de produits.",
    color: '#F1C534'
  },
  {
    title: "Mes recompenses",
    content: "Contenu des recompenses.",
    color: '#E61B21'
  },
  {
    title: "Profil",
    content: "Contenu des recompenses.",
    color: '#11973F'
  },
];

const categoryList = ['pizza', 'glace', 'jus', 'fastfood']
const selectedCategory = ref(null);


const rewardLevels = [
  { name: 'FastoPRIME', pointsRequired: 50, categories: ['glace', 'jus'] },
  { name: 'El gourmet', pointsRequired: 75, categories: ['fastfood', 'glace', 'jus'] },
  { name: 'Miam Master', pointsRequired: 100, categories: ['pizza', 'fastfood', 'glace', 'jus'] },
];

const deconnecter = async () => {
  logout();
  router.push('/')
};

const fetchProducts = async () => {
  try {

    const items = await getItems({
      collection: "product"
    });
    productList.value = items
  } catch (e) { }
};

const fetchCommande = async () => {
  try {

    const items = await getItems({
      collection: "commande"
    });
    commande.value = items
  } catch (e) { }
};

const sendCart = async (data) => {
  if (showContent.value === 1) {
    try {
      //const items = cart.itemsSend.value;
      const items = [{
        Total: data.Total,
        panier: data.panier
      }]
      await createItems({ collection: "commande", items });

    } catch (e) { }
    cart.$reset()
  }
  if (showContent.value === 2) {
    try {
      //const items = cart.itemsSend.value;
      const items = [{
        total: data.Total,
        panier: data.panier
      }]
      await createItems({ collection: "rewards", items });

    } catch (e) { }
    cart.$reset()
  }
}

const selectCategory = (category) => {
  selectedCategory.value = category;
};

const getProductsByCategory = (category) => {
  return productList.value.filter((product) => product.category === category);
};


const addProduct = (item) => {
  cart.addItem(item);
}

const toggleCart = () => {
  showCart.value = !showCart.value;
  console.log(showContent.value)

  if (showContent.value === 1) {
    title_cart.value = 'collecter'
  }
  if (showContent.value === 2) {
    title_cart.value = 'rewards'
  }
  if (showContent.value === null) {
    title_cart.value = 'panier vide'
    cart.$reset()
  }
};

const ProfilShow = () => {
  showContent.value = 3
}

fetchProducts()
fetchCommande()

watchEffect(() => {
  // Reset le panier lorsque showContent est null
  if (showContent.value === null) {
    cart.$reset();
  }
});

// // Appeler la fonction de rafraîchissement toutes les 10 secondes
// const refreshIntervalId = setInterval(() => {
//   location.reload();
// }, 10000);

// // Nettoyer l'intervalle lorsque le composant est détruit
// onBeforeUnmount(() => {
//   clearInterval(refreshIntervalId);
// });


</script>