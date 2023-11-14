<template>
    <div>
        <div v-if="props.showAuth === 'login'" class="flex flex-col items-center my-16">
            <h1 class="font-extrabold text-4xl my-4">BIENVENUE</h1>
            <p class="text-xl mx-16 text-center my-4">
                Connectez-vous avec votre nom d’utilisateur ou numéro de téléphone
            </p>
            <div class="flex flex-col items-center my-8">
                <input name="email" v-model="loginForm.email" class="w-[520px] h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 p-2" type="text" placeholder="Votre nom d’utilisateur ou téléphone">
                <input name="password" v-model="loginForm.password" class="w-[520px] h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 p-2" type="password" placeholder="Votre mot de passe">
                <div class="flex justify-between w-full my-4">
                    <div>
                        <input class="mx-2" type="checkbox">
                        <span class="mx-2 font-extrabold">Se souvenir de moi</span>
                    </div>
                    
                    <a href="#">Mot de passe oublié ?</a>
                </div>
                <button @click="emit('connexion',loginForm)" class="w-[520px] h-[70px] bg-[#E61B21] rounded-md text-white text-xl font-extrabold">Se Connecter</button>
            </div>
        </div>

        <div v-if="props.showAuth === 'register'" class="flex flex-col items-center my-16">
            <h1 class="font-extrabold text-4xl my-4">Commencez</h1>
            <p class="text-xl mx-16 text-center my-4">
                Remplissez les champs ci-dessous pour vous inscrire.
            </p>
            <form class="flex flex-col items-center my-8">
                <input class="w-[520px] h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 p-2" type="text" placeholder="Votre nom d’utilisateur">
                <input class="w-[520px] h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 p-2" type="text" placeholder="Votre nom">
                <input class="w-[520px] h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 p-2" type="text" placeholder="Votre prénom">
                <span class="self-start my-4">Votre date de naissance</span>
                <div class="w-[520px] flex flex-row justify-between">
                    <input class="w-[150px] h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 p-2" type="text" placeholder="Jour">
                    <input class="w-[150px] h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 p-2" type="text" placeholder="Mois">
                    <input class="w-[150px] h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 p-2" type="text" placeholder="Année">
                </div>
                <input class="w-[520px] h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 p-2" type="text" placeholder="Votre numéro de téléphone">
                <input class="w-[520px] h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 p-2" type="text" placeholder="Votre adresse email">
                <input class="w-[520px] h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 p-2" type="password" placeholder="Votre mot de passe">
                <input class="w-[520px] h-[70px] bg-[#F8F8F8] border-2 rounded-md my-1 p-2" type="password" placeholder="Ressaisir votre mot de passe">
                <div class="flex justify-between w-full my-4">
                    <div>
                        <input class="mx-2" type="checkbox">
                        <span class="mx-2 font-extrabold">J’accepte les Termes et Conditions</span>
                    </div>

                </div>
                <button class="w-[520px] h-[70px] bg-[#E61B21] rounded-md text-white text-xl font-extrabold">S’inscrire</button>
                
            </form>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['showAuth'])
const emit =  defineEmits(['connexion'])

const loginForm = ref({ email: 'teddy@mail.com', password: '123456' })


</script>