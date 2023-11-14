<template>
    <AuthButton @login="showAuth = 'login'" @register="showAuth = 'register'" />
    <button v-if="user" @click="logout">logout</button>
    <AuthCard v-if="showAuth" :show-auth="showAuth" @connexion="onSubmit" />
    <ProjectDescriptionCard v-else />
</template>

<script setup>
const showAuth = ref(null)
const { getItems } = useDirectusItems();
const { login, logout } = useDirectusAuth();
const user = useDirectusUser();
const product = ref({})

//const userData = ref({email:'teddy@mail.com',password:'123456'})

const onSubmit = async (logindata) => {
    try {
        await login({ email: logindata.email, password: logindata.password });
        
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