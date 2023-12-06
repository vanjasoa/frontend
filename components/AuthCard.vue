<template>
    <div>
        <div v-if="props.showAuth === 'login'" class="flex flex-col m-8 lg:w-1/3">
            <h1 class="font-extrabold text-4xl mx-auto">BIENVENUE</h1>
            <p class="text-xl mx-auto my-1">
                Connectez-vous avec votre nom d’utilisateur ou numéro de téléphone
            </p>
            <input name="email" v-model="loginForm.email" class="h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 px-4"
                type="text" placeholder="Votre nom d’utilisateur ou téléphone">
            <input name="password" v-model="loginForm.password" class="h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 px-4"
                type="password" placeholder="Votre mot de passe">
            <div class="flex justify-between w-full my-4">
                <div>
                    <input class="mx-2" type="checkbox">
                    <span class="mx-2 font-extrabold">Se souvenir de moi</span>
                </div>

                <a href="#">Mot de passe oublié ?</a>
            </div>
            <button @click="emit('connexion', loginForm)"
                class="w-full h-[70px] bg-[#E61B21] rounded-md text-white text-xl font-extrabold">Se Connecter</button>
        </div>

        <div v-if="props.showAuth === 'register'" class="flex flex-col m-8 lg:w-1/3">
            <h1 class="font-extrabold text-4xl mx-auto">COMMENCEZ</h1>
            <p class="text-xl mx-auto my-1">
                Remplissez les champs ci-dessous pour vous inscrire.
            </p>

            <input v-model="registerForm.email" class="w-full h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 px-4"
                type="text" placeholder="Votre nom d’utilisateur">
            <input v-model="registerForm.last_name" class="w-full h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 px-4" type="text" placeholder="Votre nom">
            <input v-model="registerForm.first_name" class="w-full h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 px-4" type="text"
                placeholder="Votre prénom">
            <span class="self-start">Votre date de naissance</span>
            <div class="flex">
                <DateSelect v-model="registerForm.date_de_naissance" />
            </div>
            <input v-model="registerForm.phone_number" class="w-full h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 px-4" type="text"
                placeholder="Votre numéro de téléphone">
            <input v-model="registerForm.lieu_residence" class="w-full h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 px-4" type="text"
                placeholder="Votre lieu de residence">    
            <input v-model="registerForm.adresse_mail" class="w-full h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 px-4" type="text"
                placeholder="Votre adresse email">
            <input v-model="registerForm.password" class="w-full h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 px-4"
                type="password" placeholder="Votre mot de passe">
            <input v-model="registerForm.confirmPassword"  class="w-full h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 px-4" type="password"
                placeholder="Ressaisir votre mot de passe">
            <div class="flex justify-between w-full">
                <div>
                    <input v-model="registerForm.acceptTerms" class="m-1" type="checkbox">
                    <span class="font-extrabold m-1">J’accepte les Termes et Conditions</span>
                </div>

            </div>
            <button @click="sendDataRegister"
            :disabled="!isRegistrationValid || !registerForm.acceptTerms"
                class="w-full h-[70px] rounded-md text-white text-xl font-extrabold 
                     bg-[#E61B21] hover:bg-[#D21018] disabled:bg-gray-400 
                     disabled:cursor-not-allowed">S’inscrire</button>
                     <p v-if="!isPasswordMatch" class="text-red-500">Les mots de passe ne correspondent pas.</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['showAuth'])
const emit = defineEmits(['connexion', 'register'])

const isRegistrationValid = computed(() => {
  return (
    registerForm.email !== '' &&
    registerForm.password !== '' &&
    registerForm.phone_number !== '' &&
    registerForm.date_de_naissance !== ''
  );
});

const loginForm = ref({ email: 'teddy', password: '123456' })
const registerForm = ref({ email: '', password: '',confirmPassword:'',first_name: '',last_name: '',phone_number:'',adresse_mail:'',date_de_naissance: '',acceptTerms: false,lieu_residence:'' })
const isPasswordMatch = computed(() => {
  return registerForm.password === registerForm.confirmPassword;
});

const sendDataRegister = () => {
  if (isRegistrationValid.value) {
    emit('register', registerForm.value);
  } else {
    // Afficher un message d'erreur ou prendre une action appropriée
    console.error('Veuillez remplir tous les champs requis avant de vous inscrire.');
  }
};

</script>