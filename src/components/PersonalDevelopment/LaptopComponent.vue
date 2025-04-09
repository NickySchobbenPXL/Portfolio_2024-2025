<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue';
import LaptopScreenComponent from "./LaptopScreenComponent.vue";

const sessions = ref([
  {
    title: "Brein aan het werk! Niet storen!",
    location: "Campus Elfde-Linie - G141",
    date: "05/03/2024",
    time: "9:30u - 12:00u",
    description: "In deze sessie onderzochten we de effecten van 24/7 verbonden zijn met het internet. We bespraken hoe we hier op een verantwoorde manier mee kunnen omgaan en ontdekten welke tools ons kunnen helpen om digitaal efficiënter te werken.",
    url: "https://www.persoonlijkeontwikkeling.be/popsessies?title=BreinAanHetWerkNietStoren",
  },
  {
    title: "POPping",
    location: "Campus Elfde-Linie - B301",
    date: "20/02/2024",
    time: "10:30u – 12:30u",
    description: "Tijdens deze POP-sessie werkten we samen binnen het research-projectteam om inzicht te krijgen in onze eigen kwaliteiten en die van teamleden. We bespraken elkaars sterktes en groeipunten en leerden hoe we effectief feedback kunnen geven en ontvangen. Tot slot stelden we een concreet persoonlijk ontwikkelingsplan op.",
    url: "https://www.persoonlijkeontwikkeling.be/popsessies?title=POPping",
  },
  {
    title: "My Team and I",
    location: "Corda - ISpace",
    date: "09/10/2024",
    time: "15:30u - 17:30u",
    description: "In deze sessie lag de focus op effectief samenwerken binnen ons IT-projectteam. We analyseerden onze groepsdynamiek aan de hand van het model van Lencioni en namen deel aan drie samenwerkingsactiviteiten. Hierdoor leerden we niet alleen beter samenwerken, maar ook kritisch reflecteren op onze teamprocessen.",
    url: "https://www.persoonlijkeontwikkeling.be/popsessies?title=MyTeamAndI",
  },
  {
    title: "Projectweek",
    location: "Corda - ISpace",
    date: "12/02/2024 - 16/02/2025",
    time: "08:30u - 16:30u",
    description: "Tijdens deze week maakten we voor het eerst kennis met het researchproject en het team waarmee we zullen samenwerken. Daarnaast namen we deel aan diverse activiteiten, waaronder een POP-sessie gericht op het beter leren kennen van je team, een workshop over academisch schrijven en effectief reflecteren, en een jobevent met een workshop waarin we leerden hoe je succesvol kunt netwerken.",
    url: "https://www.projectweek.be/",
  },
]);

const currentIndex = ref(0);

const updateIndex = () => {
  currentIndex.value = (currentIndex.value + 1) % sessions.value.length;
};

onMounted(() => {
  const interval = setInterval(updateIndex, 4000);

  onBeforeUnmount(() => {
    clearInterval(interval);
  });
});
</script>

<template>
  <div
      class="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[441px] md:max-w-[768px]">
    <LaptopScreenComponent
        :title="sessions[currentIndex].title"
        :location="sessions[currentIndex].location"
        :date="sessions[currentIndex].date"
        :time="sessions[currentIndex].time"
        :description="sessions[currentIndex].description"
        :url="sessions[currentIndex].url"
    />
  </div>

  <div
      class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[31px] md:max-w-[896px]">
    <div
        class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
  </div>
</template>

<style scoped>

</style>