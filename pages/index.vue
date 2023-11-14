<template>
  <TopNavigationBar>
            <template #logo >
                <img @click="showAuth = null" src="../public/logo.svg" />
            </template>
        </TopNavigationBar>
    <AuthButton @login="showAuth = 'login'" @register="showAuth = 'register'" />
    <AuthCard v-if="showAuth" :show-auth="showAuth" @connexion="onSubmit" />
    <ProjectDescriptionCard @call-to-action="showAuth = 'register'" v-else />
</template>

<script setup>
const showAuth = ref(null)
const { getItems } = useDirectusItems();
const { login, logout } = useDirectusAuth();
const user = useDirectusUser();
const product = ref({})
const router = useRouter();

//const userData = ref({email:'teddy@mail.com',password:'123456'})

const onSubmit = async (logindata) => {
    try {
        await login({ email: logindata.email+'@mail.com', password: logindata.password });
        router.push('/welcome')
        
    } catch (e) {
        console.log(e)
     }
};

const fetchProducts = async () => {
  try {
    
    const items = await getItems({
      collection: "product"
    });
    product.value = items
  } catch (e) {}
};

</script>