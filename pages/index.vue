<template>
  <div class="dark:bg-white">
    <TopNavigationBar>
      <template #logo>
        <NuxtImg class="w-64 h-32" src="logo.png" @click="showAuth = null" />
      </template>
    </TopNavigationBar>
    <AuthButton @login="showAuth = 'login'" @register="showAuth = 'register'" />
    <AuthCard :listError="validate" v-if="showAuth" :show-auth="showAuth" @connexion="onSubmit" @register="onRegister"
      :is-loading="isLoading" />
    <ProjectDescriptionCard v-else @call-to-action="showAuth = 'register'" />
  </div>
  <Footer />
</template>

<script setup>

const showAuth = ref(null)
const isLoading = ref(false);

const { login, createUser } = useDirectusAuth();

const router = useRouter();

const validate = ref([])

const onSubmit = async (logindata) => {
  isLoading.value = true;
  try {
    await login({ email: logindata.email + '@mail.com', password: logindata.password });
    router.push('/welcome');
  } catch (e) {
    console.log(e);
  } 
};
const onRegister = async (registerdata) => {
  const regexPhone = /^0\d{9}$/;
  const regexName = /^[A-ZÀ-ÖØ-Ý][a-zà-öø-ý-]*(?:\s+[A-ZÀ-ÖØ-Ý][a-zà-öø-ý-]*)*$/;
  const regexPseudo = /^[a-z]+/
  const regexLieu = /^[A-Za-zÀ-ÖØ-Ý0-9-'\s]+$/;
  const regexPassword = /^.{8,}$/;
  try {
    if (!regexName.test(registerdata.first_name)) {
      if (validate.value["first_name"] == undefined) {
        validate.value['first_name'] = 'Prenoms invalide ou vide. Ex: Randria'
      }
    } else {
      delete validate.value['first_name'] 
    }
    if (!regexName.test(registerdata.last_name)) {
      if (validate.value["last_name"] == undefined) {
        validate.value['last_name'] = 'Nom invalide ou vide. Ex: Tefy Niaina'
      }
    } else {
      delete validate.value['last_name'] 
    }

    if (!regexPseudo.test(registerdata.email)) {
      if (validate.value["pseudo"] == undefined) {
        validate.value['pseudo'] = 'Pseudo invalide ou vide. Ex: andy'
      }
    } else {
      delete validate.value['pseudo'] 
    }
    if (!regexPassword.test(registerdata.password)) {
      if (validate.value["password"] == undefined) {
        validate.value['password'] = 'Mot de passe invalide ou vide. 8 caractères au moins'
      }
    } else {
      delete validate.value['password']
    }
    if (!regexPhone.test(registerdata.phone_number)) {
      if (validate.value["phone_number"] == undefined) {
        validate.value['phone_number'] = 'Contact incorrect ou vide. Ex: 0334456789'
      }
    } else {
      delete validate.value['phone_number'] 
    }
    if (!regexPassword.test(registerdata.confirmPassword)) {
      if (validate.value["confirmPassword"] == undefined) {
        validate.value['confirmPassword'] = 'Password ne correspond pas.'
      }
    } else {
      if (registerdata.confirmPassword !== registerdata.password) {
        validate.value['confirmPassword'] = 'Mot de passe invalide ou vide. 8 caractères au moins.'
      } else {
        delete validate.value['confirmPassword']
      }
    }
    if (Object.keys(validate.value).length === 0) {
        isLoading.value = true;
        const newUser = await createUser({
        email: registerdata.email+'@mail.com',
        password: registerdata.password,
        role: 'f8fc491a-643b-47fd-a929-18b4c6b35a17',
        last_name: registerdata.last_name,
        first_name: registerdata.first_name,
        phone_number: registerdata.phone_number,
        adresse_mail: registerdata.adresse_mail,
        date_de_naissance: registerdata.date_de_naissance,
        lieu_residence: registerdata.lieu_residence
      });
      await login({ email: registerdata.email+'@mail.com', password: registerdata.password });
        router.push('/welcome');
        
    }
  } catch (e) {
    console.log(e)
  } finally {
    
  }
};

</script>