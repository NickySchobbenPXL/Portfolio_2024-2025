<script setup>
import {computed, ref} from "vue";

const imgUrl = "/Portfolio_2024-2025/images/student1.jpg";

const data = ref([
  {
    title: "Het eerste contact",
    description: `Mijn eerste tutee was Gurvinder, een student aan de PXL met een TSO-diploma in elektriciteit. Hij had voor deze opleiding nog nooit geprogrammeerd en gaf aan moeite te hebben om de lessen te volgen. Hij had het gevoel niet mee te kunnen volgen tijdens de lessen, en had daarom besloten om zich in te schrijven als tutee. Hij wilde tijdens onze sessies terug beginnen vanaf het eerste hoofdstuk om zo de basis van Python beter te kunnen begrijpen.`
  },
  {
    title: "Voorbereiding",
    description: "Als voorbereiding op onze sessies had ik vier kleine ‘examenopdrachten’ opgesteld, waarin de theorie van ieder hoofdstuk werd verwerkt. De bedoeling was om deze opdrachten tijdens iedere sessie gezamenlijk op te lossen. Om het proces wat leuker te maken, had ik een extra element toegevoegd. Na het voltooien van elke grote opdracht kreeg de tutee een stukje tekst te zien. Aan het einde van de reeks vormden deze stukjes samen de zin: ‘Je hebt goed gewerkt!‘."
  },
  {
    title: "Sessie 1: Eerste fysieke kennismaking en start van de leerstof",
    description: `Tijdens onze eerste fysieke ontmoeting zat de sfeer meteen goed. Gurvinder was erg gemotiveerd om te leren programmeren. We bespraken hoe hij thuis studeerde en welke leermethode het beste bij hem zou passen. Hoewel hij enorm gemotiveerd was, had hij veel moeite om thuis aan schoolopdrachten te beginnen.<br><br>
We besloten samen om vanaf de basis te beginnen. Ik gaf uitleg over de theorie, toonde voorbeelden en liet hem vervolgens de leerstof in zijn eigen woorden uitleggen. Toen hij beter begon te begrijpen hoe alles werkte, gaf ik hem steeds meer de ruimte om zelf na te denken over alternatieve oplossingen en zijn keuzes te onderbouwen. Aan het einde van de sessie had Gurvinder al veel vooruitgang geboekt en kon hij de oefeningen van de eerste twee hoofdstukken zelfstandig oplossen. De examenopdracht die ik had voorbereid, bleek wel nog te moeilijk te zijn door de achterstand in de leerstof die hij op dat moment had.
`
  },
  {
    title: "Sessie 2: Herhaling en motivatieproblemen",
    description: `Bij aanvang van de tweede sessie vertelde Gurvinder dat hij helaas niet had kunnen oefenen en dat hij al veel van de leerstof vergeten was. Wel ging het iets beter tijdens de lessen en kon hij al enkele concepten meevolgen.<br><br>
Tijdens deze sessie herhaalden we de belangrijkste onderdelen van de eerste hoofdstukken. Ik probeerde zoveel mogelijk in dialoog te gaan, zodat hij de leerstof gedetailleerd en correct kon uitleggen. Sommige onderwerpen gingen vlot, terwijl andere meer moeite kostten. Ik gaf hem regelmatig complimenten over zijn oplossingen en creëerde een veilige leeromgeving waarin hij fouten mocht maken zonder zich zorgen te maken. Wel gaf ik aan dat het vanaf nu ook wel cruciaal was om ook thuis te oefenen. Zonder extra inspanning zou hij niet genoeg tijd hebben om de leerstof voldoende onder de knie te hebben voor het examen.
`
  },
  {
    title: "Sessie 3: Eerste vooruitgang en doorzetten",
    description: `In de derde sessie vertelde Gurvinder mij dat hij thuis meer had geoefend. Hij had van elk behandeld hoofdstuk enkele oefeningen gemaakt, die we samen doornamen en verbeterden. Zijn motivatie was duidelijk groter tijdens de sessies zelf. Hij nam hierin veel initiatief, stond open voor feedback en dacht actief mee.<br><br>
Toch bleef hij het lastig te vinden om zichzelf thuis voldoende te motiveren. Dit bleef voor hem een uitdaging en gaf aan zonder consistente oefening moeite te hebben om alle concepten te onthouden. Ik probeerde hem hierbij zoveel mogelijk te motiveren, en mee te geven dat hij goed onderweg was.
`
  },
  {
    title: "Sessie 4: Examenvoorbereiding en afronding",
    description: `Voor de laatste sessie had ik mijn eigen examen van het vorige jaar meegenomen als oefening. Dit bleek een flinke uitdaging voor Gurvinder te zijn, omdat hij nog niet voldoende tijd had besteed aan het opbouwen van zijn kennis. Toch bleef hij gemotiveerd en wilde hij de opdracht zo veel mogelijk zelfstandig oplossen.<br><br>
Aan het einde van de sessie hadden we samen de oplossing uitgewerkt, en besloot hij om de examenopdracht thuis nogmaals te maken en deze naar mij op te sturen voor feedback.
`
  },
  {
    title: "Het resultaat",
    description: `Na onze laatste sessie begonnen de examens. Gurvinder liet me weten dat hij helaas niet was geslaagd. Hij twijfelde ook of hij wel verder wilde met programmeren en overwoog om zijn opleiding voort te zetten, maar in het tweede jaar te kiezen voor de richting SWM. Hij gaf me wel aan enorm dankbaar te zijn voor de sessies die we gedaan hadden, en vertelde me dat hij tijdens ons gezamenlijk traject veel had bijgeleerd.`
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
        <p v-html="currentData.description" class="py-3 text-gray-600 leading-6"></p>
      </div>

      <!-- controls -->
      <div class="absolute top-1/2 w-full flex justify-between z-20 px-4">
        <div class="inline-block text-red-600 cursor-pointer -translate-x-5 bg-white rounded-full no-select">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor"
               @click="changeDataToOneLower">
            <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"/>
          </svg>
        </div>
        <div
            class="inline-block text-red-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5 no-select">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor"
               @click="changeDataToOneHigher">
            <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"/>
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


<style scoped>

</style>