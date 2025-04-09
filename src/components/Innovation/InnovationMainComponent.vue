<script setup>
import InnovationCardComponent from "./InnovationCardComponent.vue";
import {ref} from 'vue';

const innovationCards = ref([
  {
    title: "Innovatieroute: UI/UX",
    location: "Corda Campus",
    date: "24/09/2025 & 08/10/2025",
    company: "Wisemen & AppFoundry",
    time: "9:00u - 16:00u",
    description: "Introductie in UI/UX-design, met de focus op het belang van UX-design en hoe je leert denken vanuit een designperspectief." +
        "Daarnaast heb ik een eigen UI/UX-design uitgewerkt voor een zelfbedacht concept," +
        " aan de hand van wireframes om het idee visueel vorm te geven.",
    imgUrl: "/images/ui_ux_design_logo.png"
  },
  {
    title: "Hackathon: Hack The Future",
    location: "Flanders Meeting & Convention Center in de Zoo van Antwerpen",
    date: "19/11/2024",
    time: "8:00u – 21:00u",
    description: "Jaarlijkse hackathon waarbij je samen met een teamgenoot verschillende opdrachten oplost," +
        " variërend van eenvoudig tot complex. Daarnaast biedt het " +
        "evenement een netwerkmoment, waarbij we de kans kregen om in contact te komen met verschillende bedrijven.",
    imgUrl: "/images/hackthefuture_logo.jpeg"
  },
]);
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
      <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
        <innovation-card-component
            v-for="(item, index) in innovationCards"
            :key="index"
            :title="item.title"
            :location="item.location"
            :company="item.company"
            :date="item.date"
            :time="item.time"
            :description="item.description"
            :imgUrl="item.imgUrl"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>