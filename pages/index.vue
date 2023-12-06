<template>
  <TopNavigationBar>
    <template #logo>
      <NuxtImg class="w-64 h-32" src="logo.png" @click="showAuth = null" />
    </template>
  </TopNavigationBar>
  <AuthButton @login="showAuth = 'login'" @register="showAuth = 'register'" />
  <AuthCard v-if="showAuth" :show-auth="showAuth" @connexion="onSubmit" @register="onRegister" />
  <ProjectDescriptionCard v-else @call-to-action="showAuth = 'register'" />
  <Footer/>
</template>

<script setup>

const showAuth = ref(null)

const { login, createUser } = useDirectusAuth();

const router = useRouter();

const onSubmit = async (logindata) => {
  try {

    await login({ email: logindata.email + '@mail.com', password: logindata.password });
    router.push('/welcome');
  } catch (e) {
    console.log(e);
  }
};

const onRegister = async (registerdata) => {
  
  try {

    const newUser = await createUser({ 
      email: registerdata.email + '@mail.com', 
      password: registerdata.password, 
      role: 'f8fc491a-643b-47fd-a929-18b4c6b35a17',
      last_name: registerdata.last_name,
      first_name: registerdata.first_name,
      phone_number: registerdata.phone_number,
      adresse_mail:registerdata.adresse_mail,
      date_de_naissance: registerdata.date_de_naissance,
      lieu_residence: registerdata.lieu_residence
     });
    showAuth.value = 'login';
  } catch (e) {
  }
};

</script>