<template>
    <p v-if="user" >
        {{ user }}
        <h1>
            {{ product }}
        </h1>
        <button @click="fetchProducts">refresh data</button>
    </p>
    <h1 class="text-xl">Login</h1>
    <button @click="onSubmit(userData)">Login</button>
    <h1>Logout</h1>
    <button @click="logout">Logout</button>
</template>

<script setup>
const { getItems } = useDirectusItems();
const { login, logout } = useDirectusAuth();
const user = useDirectusUser();
const product = ref({})

const userData = ref({email:'teddy@mail.com',password:'123456'})

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