<script setup>

import StudyBuddyLeftSideCarouselComponent from "./StudyBuddyLeftSideCarouselComponent.vue";
import StudyBuddyRightSideCarouselComponent from "./StudyBuddyRightSideCarouselComponent.vue";

const title = "Study Buddy";
const year = "2023";
const descriptionText = `Tijdens het eerste semester van mijn tweede jaar besloot ik deel te nemen aan het Study Buddy-programma. Dit is een initiatief waarbij studenten die een vak succesvol hebben afgerond, bijles kunnen geven aan medestudenten die extra ondersteuning nodig hebben. Voor de tutor is dit een kans om de leerstof nog beter te beheersen, terwijl de tutee extra begeleiding krijgt bij onderwerpen waarbij ze moeilijkheden ervaren.<br><br>
Voor IT Essentials kreeg ik één tutee toegewezen, met wie ik vier sessies heb gedaan. In het tweede semester schreef ik me opnieuw in, dit keer als tutor voor Java Essentials. Hier werden drie tutees aan mij gekoppeld, maar was er uiteindelijk maar één persoon komen opdagen. Door de drukte van het tweede semester kon ik helaas niet meer dan één sessie doen.
`
const secondDescriptionText = `Voordat we als tutor van start gingen, kregen we eerst een algemene infosessie met alle tutors en de studycoaches Joshe Kuypers en Lore Bodard. Tijdens deze sessie kregen we een beter beeld van wat Study Buddy precies inhoudt, hoe het praktisch in zijn werking gaat, en hoe we onze bijlessessies het beste konden aanpakken.<br><br>
We leerden dat een goede tutor vier belangrijke competenties nodig heeft:<br><br>
1.\tInterpersoonlijke competenties – empathisch, open en teamgericht zijn.<br>
2.\tAlgemene pedagogische competenties – motiveren, helder communiceren en coachen.<br>
3.\tManagende competenties – plannen, zelfstandig werken en probleemoplossend denken.<br>
4.\tInhoudelijke expertise – een sterke vakkennis hebben.<br><br>
Daarnaast kregen we enkele praktische tips. Zo werd aangeraden om elke sessie te beginnen met een kennismaking om de sfeer wat losser te maken. Ook was het belangrijk om duidelijke afspraken te maken over verwachtingen en consequenties, zodat zowel de tutor als de tutee wist waar ze aan toe waren. Vervolgens werd er ons ook verteld dat het belangrijk is om een veilige en open leeromgeving te creëren.
`
</script>

<template>
  <main>
    <article>
      <header class="mx-auto max-w-screen-xl pt-28 text-center">
        <h1 class="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">{{ title }} {{ year }}</h1>
        <div class="mt-6 flex flex-wrap justify-center gap-2" aria-label="Tags">
          <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Marketing
          </button>
          <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Branding</button>
          <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Digital</button>
          <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Identity</button>
        </div>
        <img class="sm:h-[34rem] mt-10 w-full object-contain"
             src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
             alt="Featured Image"/>
      </header>

      <div class="mx-auto mt-10 max-w-screen-md space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700">
        <h1 class="font-bold leading-snug tracking-tight text-slate-800 mx-auto w-full text-3xl text-center">
          Omschrijving
        </h1>
        <p v-html="descriptionText"></p>
      </div>

      <div class="w-fit mx-auto mt-10 flex space-x-2">
        <div class="h-0.5 w-2 bg-gray-600"></div>
        <div class="h-0.5 w-32 bg-gray-600"></div>
        <div class="h-0.5 w-2 bg-gray-600"></div>

      </div>

      <div class="mx-auto mt-10 max-w-screen-md space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700">
        <h1 class="font-bold leading-snug tracking-tight text-slate-800 mx-auto w-full text-3xl text-center">
          Een eerste inkijk in het Study Buddy-programma
        </h1>
        <p v-html="secondDescriptionText"></p>
      </div>
    </article>
  </main>

  <div class="w-fit mx-auto mt-10 flex space-x-2">
    <div class="h-0.5 w-2 bg-gray-600"></div>
    <div class="h-0.5 w-32 bg-gray-600"></div>
    <div class="h-0.5 w-2 bg-gray-600"></div>

  </div>

  <aside aria-label="Related Articles" class="mx-auto mt-10 py-20">
    <div class="flex w-full h-screen">
      <div class="w-1/2 h-full">
        <StudyBuddyLeftSideCarouselComponent/>
      </div>
      <div class="w-1/2 h-full">
        <StudyBuddyRightSideCarouselComponent/>
      </div>
    </div>
  </aside>
</template>


<style scoped>

</style>