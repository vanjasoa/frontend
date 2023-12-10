<template>
  <div>
    <div class="flex justify-between mt-12">
      <div class="flex flex-initial">
        <div class="w-20 ml-2">
          <div
            class="w-[60px] h-[60px] border-4 border-white rounded-lg bg-slate-300"
          >
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 8C26.1217 8 28.1566 8.84285 29.6569 10.3431C31.1571 11.8434 32 13.8783 32 16C32 18.1217 31.1571 20.1566 29.6569 21.6569C28.1566 23.1571 26.1217 24 24 24C21.8783 24 19.8434 23.1571 18.3431 21.6569C16.8429 20.1566 16 18.1217 16 16C16 13.8783 16.8429 11.8434 18.3431 10.3431C19.8434 8.84285 21.8783 8 24 8ZM24 28C32.84 28 40 31.58 40 36V40H8V36C8 31.58 15.16 28 24 28Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div class="text-left">
          <h1 class="font-extrabold">{{ userContent.last_name }}</h1>
          <h1 class="font-extrabold">{{ userContent.first_name }}</h1>
        </div>
      </div>
      <div>
        <div class="flex-initial w-20 h-20">
          <button @click="emit('quit')">
            <svg
              class="bg-black rounded-lg"
              width="50"
              height="50"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.6665 19.9999C6.6665 20.4419 6.8421 20.8659 7.15466 21.1784C7.46722 21.491 7.89114 21.6666 8.33317 21.6666H20.9832L17.1498 25.4833C16.9936 25.6382 16.8696 25.8225 16.785 26.0256C16.7004 26.2287 16.6568 26.4466 16.6568 26.6666C16.6568 26.8866 16.7004 27.1044 16.785 27.3075C16.8696 27.5106 16.9936 27.695 17.1498 27.8499C17.3048 28.0061 17.4891 28.1301 17.6922 28.2147C17.8953 28.2994 18.1132 28.3429 18.3332 28.3429C18.5532 28.3429 18.771 28.2994 18.9741 28.2147C19.1772 28.1301 19.3616 28.0061 19.5165 27.8499L26.1832 21.1833C26.3349 21.0247 26.4538 20.8378 26.5332 20.6333C26.6999 20.2275 26.6999 19.7724 26.5332 19.3666C26.4538 19.162 26.3349 18.9751 26.1832 18.8166L19.5165 12.1499C19.3611 11.9945 19.1766 11.8713 18.9736 11.7872C18.7705 11.7031 18.5529 11.6598 18.3332 11.6598C18.1134 11.6598 17.8958 11.7031 17.6928 11.7872C17.4897 11.8713 17.3052 11.9945 17.1498 12.1499C16.9944 12.3053 16.8712 12.4898 16.7871 12.6928C16.703 12.8959 16.6597 13.1135 16.6597 13.3333C16.6597 13.553 16.703 13.7706 16.7871 13.9737C16.8712 14.1767 16.9944 14.3612 17.1498 14.5166L20.9832 18.3333H8.33317C7.89114 18.3333 7.46722 18.5088 7.15466 18.8214C6.8421 19.134 6.6665 19.5579 6.6665 19.9999ZM28.3332 3.33325H11.6665C10.3404 3.33325 9.06865 3.86004 8.13097 4.79772C7.19329 5.7354 6.6665 7.00717 6.6665 8.33325V13.3333C6.6665 13.7753 6.8421 14.1992 7.15466 14.5118C7.46722 14.8243 7.89114 14.9999 8.33317 14.9999C8.7752 14.9999 9.19912 14.8243 9.51168 14.5118C9.82424 14.1992 9.99984 13.7753 9.99984 13.3333V8.33325C9.99984 7.89122 10.1754 7.4673 10.488 7.15474C10.8006 6.84218 11.2245 6.66659 11.6665 6.66659H28.3332C28.7752 6.66659 29.1991 6.84218 29.5117 7.15474C29.8242 7.4673 29.9998 7.89122 29.9998 8.33325V31.6666C29.9998 32.1086 29.8242 32.5325 29.5117 32.8451C29.1991 33.1577 28.7752 33.3333 28.3332 33.3333H11.6665C11.2245 33.3333 10.8006 33.1577 10.488 32.8451C10.1754 32.5325 9.99984 32.1086 9.99984 31.6666V26.6666C9.99984 26.2246 9.82424 25.8006 9.51168 25.4881C9.19912 25.1755 8.7752 24.9999 8.33317 24.9999C7.89114 24.9999 7.46722 25.1755 7.15466 25.4881C6.8421 25.8006 6.6665 26.2246 6.6665 26.6666V31.6666C6.6665 32.9927 7.19329 34.2644 8.13097 35.2021C9.06865 36.1398 10.3404 36.6666 11.6665 36.6666H28.3332C29.6593 36.6666 30.931 36.1398 31.8687 35.2021C32.8064 34.2644 33.3332 32.9927 33.3332 31.6666V8.33325C33.3332 7.00717 32.8064 5.7354 31.8687 4.79772C30.931 3.86004 29.6593 3.33325 28.3332 3.33325Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col items-center font-poppins">
    <div class="fixed top-28 md:top-52 w-64 z-50">
      <img src="../assets/images/MonComte.png" alt="" />
    </div>
  </div>

  <div class="font-poppins">
    <div class="flex flex-col items-center">
      <div class="rounded-md w-64 m-8 ml-4">
        <div class="flex flex-col bg-[#960022] px-4 py-2 rounded-md w-64 mx-4">
          <span class="text-white ml-5">Niveau</span>
          <h1 class="ml-5 font-bold text-white">{{ userContent.level }}</h1>
        </div>
        <img
          class="w-24 h-24 -ml-12 -mt-20"
          :src="userContent.level + '.png'"
        />
      </div>
      <div class="w-full">
        <h2 class="font-bold">Historique des commandes</h2>
        <ul v-for="commande in props.historique">
          <li class=" border-black p-2 rounded-md m-2" style="border-width: 1px;" >
            {{ formatDate(commande.date_created) }}
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table
                class="text-xs w-full text-center  text-gray-500 "
              >
                <thead
                  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 "
                >
                  <tr>
                    <th scope="col" class="px-1 py-3">Produit</th>
                    <th scope="col" class="px-1 py-3">
                      <div class="flex items-center">
                        Prix
                      </div>
                    </th>
                    <th scope="col" class="px-1 py-3">
                      <div class="flex items-center">
                        Point
                      </div>
                    </th>
                    <th scope="col" class="px-1 py-3">
                      <div class="flex items-center">
                        Status
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in commande.panier"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      class="px-1 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {{ item.name }}
                    </th>
                    <td class="px-1 py-4">
                      {{ item.prix }}
                    </td>
                    <td class="px-1 py-4">
                      {{ item.point }}
                    </td>
                    <td class="px-1 py-4">
                      <span
                        v-if="commande.status == 'paid'"
                        class="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300"
                      >
                        <span
                          class="w-2 h-2 me-1 bg-green-500 rounded-full"
                        ></span>
                        {{ commande.status }}
                      </span>
                      <span
                        v-if="commande.status == 'save'"
                        class="inline-flex items-center bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                      >
                        <span
                          class="w-2 h-2 me-1 bg-yellow-500 rounded-full"
                        ></span>
                        {{ commande.status }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <slot name="content" />
  </div>
</template>

<script setup>
const emit = defineEmits(["quit"]);
const level = ref("noobs");
const props = defineProps(["userContent", "historique"]);

const formatDate = (date) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  return new Date(date).toLocaleDateString("fr-FR", options);
};
</script>