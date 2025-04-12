<script setup>
import {computed, ref} from "vue";

const imgUrl = "/Portfolio_2024/images/student2.png";

const data = ref([
  {
    title: "Het eerste contact",
    description: "Mijn tweede tutee was een student genaamd Charles. Hij was enorm gemotiveerd en had, ondanks dat hij nog nooit geprogrammeerd had, door de jaren heen een sterke interesse in programmeren ontwikkeld. Hij was al goed mee met de leerstof, maar had moeite met bepaalde onderdelen van enkele hoofdstukken. Voor onze eerste sessie hadden we via e-mail contact om te bespreken hoe we de sessie het beste konden aanpakken en welke leerstof we zouden behandelen.\n" +
        "Hoewel ik in grote lijnen dezelfde aanpak wilde hanteren als bij mijn eerste bijles, besloot ik deze keer geen examenopdracht meer voor te bereiden. In plaats daarvan richtte ik me volledig op de specifieke theorie waar Charles moeite mee had en maakte ik daar ter plekke gerichte oefeningen voor.\n"
  },
  {
    title: "Sessie 1: Bespreking theorie en oefenen maar",
    description: "Voor onze sessie besloten Charles en ik om online af te spreken via Discord. Na een korte introductie zat de sfeer er meteen goed in en konden we het goed met elkaar vinden. We bespraken kort de onderdelen waarmee hij moeite had, zijn huidige aanpak en hoe hij thuis oefende. Vervolgens gaf ik hem een samenvatting van de theorie, aangevuld met enkele voorbeelden, waarna we samen aan de voorbereide oefeningen begonnen.\n" +
        "Charles bleek de theorie eigenlijk al goed te beheersen, en na een half uur had hij de onderwerpen waar hij moeite mee had al een stuk beter onder de knie. Ik liet hem de oefeningen zelfstandig maken en vroeg hem om uit te leggen wat hij deed en waarom hij voor bepaalde oplossingen koos. Aan het einde van de sessie gaf hij aan dat hij nu alles goed begreep en er zelfstandig mee verder kon.\n" +
        "Helaas kon ik Charles geen volledige sessies meer aanbieden, maar gaf ik hem wel de mogelijkheid om mij een bericht te sturen als hij ergens vastliep. Na de examenperiode liet hij me weten dat hij net niet geslaagd was. Voor de herexamen heeft hij dan extra hard gewerkt, en die uiteindelijk met succes afgerond. We houden nog steeds geregeld contact met elkaar om te kijken hoe het gaat. Inmiddels zit hij in zijn tweede jaar en doet hij het zéér goed.\n"
  },
  {
    title: "Het resultaat",
    description: "Na de examenperiode liet hij me weten dat hij net niet geslaagd was. Voor de herexamen heeft hij dan extra hard gewerkt, en die uiteindelijk met succes afgerond. We houden nog steeds geregeld contact met elkaar om te kijken hoe het gaat. Inmiddels zit hij in zijn tweede jaar en doet hij het zéér goed."
  },
]);

let currentDataIndex = ref(0);

const currentData = computed(() => data.value[currentDataIndex.value]);

function changeDataToOneLower() {
  if (currentDataIndex.value - 1 < 0) {
    currentDataIndex.value = data.value.length - 1;
  } else {
    currentDataIndex.value -= 1;
  }
}

function changeDataToOneHigher() {
  if (currentDataIndex.value + 1 >= data.value.length) {
    currentDataIndex.value = 0;
  } else {
    currentDataIndex.value += 1;
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-3 relative flex items-center justify-center">
    <!-- Centered container -->
    <div class="w-[90%] h-[700px] relative bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">

      <img class="rounded-t-lg h-1/2 object-cover" :src="imgUrl" alt=""/>

      <div class="py-4 px-8 h-1/2 overflow-y-auto">
        <h1 class="mt-2 text-gray-900 font-bold text-2xl tracking-tight text-center">
          {{ currentData.title }}
        </h1>
        <p class="py-3 text-gray-600 leading-6">
          {{ currentData.description }}
        </p>
      </div>

      <!-- controls -->
      <div class="absolute top-1/2 w-full flex justify-between z-20 px-4">
        <div class="inline-block text-red-600 cursor-pointer -translate-x-5 bg-white rounded-full no-select">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor" @click="changeDataToOneLower">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"/>
          </svg>
        </div>
        <div class="inline-block text-red-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5 no-select">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor" @click="changeDataToOneHigher">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.no-select {
  user-select: none;
}
</style>


<style scoped>
.no-select {
  user-select: none;
}
</style>
