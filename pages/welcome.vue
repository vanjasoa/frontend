<template>
  <div class=" flex flex-col h-screen">
    <header class="z-0">
      <TopNavigationBar>
        <template #logo>
          <NuxtImg @click="showContent = null" class="w-64 h-32" src="logo.png" />
        </template>
        <template #profil>
          <PointButton :point="user.point" />
          <AccountButton @click="ProfilShow" />
        </template>
      </TopNavigationBar>
    </header>
    <main class="flex-1 overflow-y-auto z-40">
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
              <template #image>
                <ImagePizza />
              </template>
              <template #point>
                <PointButton />
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
            <LevelsCard v-for="level in rewardLevels" :level="level" v-if="selectedCategory === null">
              <template #image>
                <Level />
              </template>
              <template #category>
                <CategoryCard v-for="category in level.categories" :name="category" @click="selectCategory(category)" />
              </template>
            </LevelsCard>
            <ProductCard v-for="product in getProductsByCategory(selectedCategory)" :product="product"
              @add-product="addProduct" v-if="selectedCategory">
              <template #image>
                <ImagePizza />
              </template>
              <template #point>
                <PointButton />
              </template>
            </ProductCard>
            <button v-if="selectedCategory" @click="selectedCategory = null">retour rewards</button>
          </template>
        </RewardsContent>

        <ProfilContent v-if="itemsMenu[showContent].title == 'Profil'" @quit="deconnecter" :user-content="user"
          :historique="commande">
          <template #content>
            <Badge />
          </template>
        </ProfilContent>

      </div>
    </main>
    <footer>
      <div>
        <button @click="toggleCart">
          <CartButtom :quantiter_produit="cart.itemsCount" />
        </button>
      </div>
    </footer>

    <CartModal v-if="showCart == true" :total-point="cart.itemsTotal" :title_cart="title_cart">
      <template #retour>
        <button @click="showCart = false">fermer</button>
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
        Total: data.Total,
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


</script>