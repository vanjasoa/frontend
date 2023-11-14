<template>
    <div>

        <TopNavigationBar>
            <template #logo >
                <Logo />
            </template>
            <template #profil >
                <PointButton />
                <AccountButton @click="ProfilShow" />
            </template>
        </TopNavigationBar>

        <MenuList v-if="showContent === null" >
            <template #menulist >
                <MenuButton v-for="(item, index) in itemsMenu" :key="index" :name="item.title" @click="showContent = index" :color="item.color" />
            </template>
        </MenuList>

        <div v-else>
          <CollectContent v-if="itemsMenu[showContent].title == 'Je collecte' " >
            <template #retour >
              <MenuButton @click="showContent = null" :name="itemsMenu[showContent].title" :color="itemsMenu[showContent].color" />
            </template>
            <template #category>
              <CategoryCard v-for="category in categoryList" :name="category" />
            </template>
            <template #productlist>
              <ProductCard v-for="product in productList" :product="product" >
                <template #image >
                  <ImagePizza />
                </template>
                <template #point>
                  <PointButton />
                </template>
              </ProductCard>
            </template>
          </CollectContent>
          <QrCodeContent v-if="itemsMenu[showContent].title == 'Mon QR' " >
            <template #retour >
              <MenuButton @click="showContent = null" :name="itemsMenu[showContent].title" :color="itemsMenu[showContent].color" />
            </template>
          </QrCodeContent>
          <RewardsContent v-if="itemsMenu[showContent].title == 'Mes recompenses' "> 
            <template #retour >
              <MenuButton @click="showContent = null" :name="itemsMenu[showContent].title" :color="itemsMenu[showContent].color" />
            </template>
            <template #levels >
              <LevelsCard v-for="level in levelsList" :level="level">
                <template #image >
                  <Level />
                </template>
              </LevelsCard>
            </template>
          </RewardsContent>
          <ProfilContent v-if="itemsMenu[showContent].title == 'Profil'" @quit="deconnecter" :user-content="user" >
            <template #retour >
              <button @click="showContent = null">retour</button>
            </template>
            <template #content>
              <Badge />
            </template>
          </ProfilContent>
        </div>
        <div>
          <button @click="showCart = true">
            <CartButtom />
          </button>
        </div>
        <CartModal v-if="showCart == true">
          <template #retour>
            <button @click="showCart = false">fermer</button>
          </template>
        </CartModal>
        
        <LevelsProgressBar>
          <template #level>
            <Level />
          </template>
          <template #next-level>
            <Level />
          </template>
        </LevelsProgressBar>

    </div>
</template>

<script setup>

definePageMeta({
  middleware: ["auth"]
})

const { logout } = useDirectusAuth();
const user = useDirectusUser();
const router = useRouter();

const deconnecter = async () => {
  logout();
  router.push('/')
};

const showContent = ref(null);
const showCart = ref(false);

const itemsMenu = [
  {
    title: "Mon QR",
    content: "Contenu Mon QrCode",
    color:'#11973F'
  },
  {
    title: "Je collecte",
    content: "Contenu collection de produits.",
    color:'#F1C534'
  },
  {
    title: "Mes recompenses",
    content: "Contenu des recompenses.",
    color:'#E61B21'
  },
  {
    title: "Profil",
    content: "Contenu des recompenses.",
    color:'#11973F'
  },
];

const categoryList = ['pizza','glace','frite']

const productList = [
  {
    name: 'pizza GM',
    point:10
  },
  {
    name: 'pizza PM',
    point:15
  },
  {
    name: 'glace GM',
    point:20
  },
  {
    name: 'glace PM',
    point:25
  },
]

const levelsList = [
  {
    name:'Noobs',
    point:0
  },
  {
    name:'FastoPRIME',
    point:50
  },
  {
    name:'El gourmet',
    point:75
  },
  {
    name:'Miam Master',
    point:100
  },
]

const ProfilShow = () => {
  showContent.value = 3
}


</script>