<template>
    <div class="font-poppins text-center dark:text-black">

        <div v-if="props.showAuth === 'login'" class="flex flex-col m-8 text-sm ">
            <h6 class="font-extrabold text-xl mx-auto mt-4 mb-4">Bienvenue</h6>
            <p class=" text-gray-600 text-xs  my-2">
                Connectez-vous avec votre nom d’utilisateur ou numéro de téléphone
            </p>
            <input name="email" v-model="loginForm.email"
                class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 text-xs my-4"
                type="text" placeholder="Votre nom d’utilisateur ou téléphone">
            <input name="password" v-model="loginForm.password"
                class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 text-xs my-2"
                type="password" placeholder="Votre mot de passe">
            <div class="flex justify-between w-full my-4">
                <div>
                    <input class=" mx-1" type="checkbox">
                    <span class=" font-bold text-xs">Se souvenir de moi</span>
                </div>

                <a href="#" class="text-xs">Mot de passe oublié ?</a>
            </div>
            <button @click="emit('connexion', loginForm)"
                class="w-full  bg-[#E61B21]  mt-4 mb-8 rounded-md text-white p-2 font-bold ">{{ props.isLoading ? 'Connexion en cours...' : 'Se Connecter' }}</button>
        </div>
        <div v-if="props.showAuth === 'register'" class="flex flex-col m-8 text-center dark:bg-white ">

            <h1 class="font-bold text-xl mx-auto">Commencez</h1>
            <p class="text-xs mx-auto my-1 text-gray-600">
                Remplissez les champs ci-dessous pour vous inscrire.
            </p>
            <input v-model="registerForm.pseudo"
                class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 text-xs mt-6"
                type="text" placeholder="Votre nom d’utilisateur">
            <span class="text-xs text-red-500">{{ listError['pseudo'] }}</span>
            <input v-model="registerForm.last_name"
                class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 text-xs mt-4"
                type="text" placeholder="Votre nom">
            <span class="text-xs text-red-500">{{ listError['last_name'] }}</span>
            <input v-model="registerForm.first_name"
                class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 text-xs mt-4"
                type="text" placeholder="Votre prénom">
            <span class="text-xs text-red-500">{{ listError['first_name'] }}</span>
            <span class="self-start text-xs text-gray-500 mt-4 ">Date de naissance</span>
            <div class="flex mt-1">
                <DateSelect v-model="registerForm.date_de_naissance" />
            </div>
            <input v-model="registerForm.phone_number"
                class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 text-xs mt-4"
                type="text" placeholder="Votre numéro de téléphone">
            <span class="text-xs text-red-500">{{ listError['phone_number'] }}</span>
            <input v-model="registerForm.lieu_residence"
                class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 text-xs mt-4"
                type="text" placeholder="Votre lieu de residence">
            <span class="text-xs text-red-500">{{ listError['lieu_residence'] }}</span>
            <input v-model="registerForm.adresse_mail"
                class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 text-xs mt-4"
                type="text" placeholder="Votre adresse email">
            <span class="text-xs text-red-500">{{ listError['email'] }}</span>
            <input v-model="registerForm.password"
                class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 text-xs mt-4"
                type="password" placeholder="Votre mot de passe">  
                <span class="text-xs text-red-500">{{ listError['password'] }}</span>
            <input v-model="registerForm.confirmPassword"
                class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 text-xs mt-4"
                type="password" placeholder="Ressaisir votre mot de passe">
            <span class="text-xs text-red-500"> {{ listError['confirmPassword'] }}</span>
            <div class="flex justify-between w-full">
                <div>
                    <input v-model="registerForm.acceptTerms" class="mt-4 dark:bg-white" type="checkbox">
                    <span class="font-bold text-xs m-1 mt-4">J’accepte les Termes et Conditions</span>
                </div>
            </div>
            <button @click="sendDataRegister" :disabled="!isRegistrationValid || !registerForm.acceptTerms" class="w-full p-2 rounded-md text-white mt-4 mb-6 font-bold 
                     bg-[#E61B21] hover:bg-[#D21018] disabled:bg-gray-400 
                     disabled:cursor-not-allowed">{{ props.isLoading ? 'Inscription en cours...' : 'S’inscrire'
                     }}</button>
            <p v-if="!isPasswordMatch" class="text-red-500 text-xs">Les mots de passe ne correspondent pas.</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['showAuth', 'isLoading', 'listError'])
const emit = defineEmits(['connexion', 'register'])

const isRegistrationValid = computed(() => {
    return (
        registerForm.email !== '' &&
        registerForm.password !== '' &&
        registerForm.phone_number !== '' &&
        registerForm.date_de_naissance !== ''
    );
});

const loginForm = ref({ email: '', password: '' })
const registerForm = ref({ email: '', password: '', confirmPassword: '', first_name: '', last_name: '', phone_number: '', adresse_mail: '', date_de_naissance: '', acceptTerms: false, lieu_residence: '' })
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