<template>
  <TopNavigationBar>
    <template #logo>
      <NuxtImg class="w-64 h-32" src="logo.png" @click="showAuth = null" />
    </template>
  </TopNavigationBar>
  <AuthButton @login="showAuth = 'login'" @register="showAuth = 'register'" />
  <AuthCard v-if="showAuth" :show-auth="showAuth" @connexion="onSubmit" @register="onRegister" />
  <ProjectDescriptionCard v-else @call-to-action="showAuth = 'register'" />
</template>

<script setup>
const showAuth = ref(null)
const { getItems } = useDirectusItems();
const { login, createUser } = useDirectusAuth();
const product = ref({})
const router = useRouter();
//const { createUsers } = useDirectusUsers();

const onSubmit = async (logindata) => {
  try {
    await login({ email: logindata.email + '@mail.com', password: logindata.password });
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
  } catch (e) { }
};

const onRegister = async (registerdata) => {
  try {
    const newUser = await createUser({ email: registerdata.email + '@mail.com', password: registerdata.password, role: 'f8fc491a-643b-47fd-a929-18b4c6b35a17' });
  } catch (e) { }
};

</script>