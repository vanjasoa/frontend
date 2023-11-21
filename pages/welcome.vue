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
            <CategoryCard v-for="category in categoryList" :name="category" />
          </template>
          <template #pub>
            <AdvertisingCard />
          </template>
          <template #productlist>
            <ProductCard v-for="product in productList" :product="product" @add-product="addProduct">
              <template #image>
                <ImagePizza />
              </template>
              <template #point>
                <PointButton />
              </template>
            </ProductCard>
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
            <LevelsCard v-for="level in levelsList" :level="level">
              <template #image>
                <Level />
              </template>
            </LevelsCard>
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
        <button @click="showCart = true">
          <CartButtom :quantiter_produit="cart.itemsCount" />
        </button>
      </div>
    </footer>

    <CartModal v-if="showCart == true" :total-point="cart.itemsTotal">
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
const productList = ref({})
import { useCartStore } from '@/stores/cart';
const cart = useCartStore()
const commande = ref({})
const showProduct = ref(true)

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
  try {
    //const items = cart.itemsSend.value;
    const items = [{
      Total: data.Total,
      panier: data.panier
    }]
    await createItems({ collection: "commande", items });

  } catch (e) { }
  console.log(data)
  cart.$reset()
};

const addProduct = (item) => {
  cart.addItem(item);
}


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

const categoryList = ['pizza', 'glace', 'frite']


const levelsList = [
  {
    name: 'Noobs',
    point: 0
  },
  {
    name: 'FastoPRIME',
    point: 50
  },
  {
    name: 'El gourmet',
    point: 75
  },
  {
    name: 'Miam Master',
    point: 100
  },
]

const ProfilShow = () => {
  showContent.value = 3
}

fetchProducts()
fetchCommande()


</script>