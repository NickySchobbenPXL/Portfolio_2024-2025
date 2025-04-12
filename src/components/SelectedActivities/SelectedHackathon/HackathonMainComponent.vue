<script setup>

import HackathonMessengerComponent from "./HackathonMessengerComponent.vue";

const title = "Hackathon: Hack The Future";
const year = "2025";
const imgUrl = "/Portfolio_2024-2025/images/htf_logo.jpg"
const descriptionText = `Voor de hackathon van dit jaar koos ik ervoor om deel te nemen aan Hack The Future, de 11e editie van dit evenement, georganiseerd door de Cronos Groep. Hack The Future is een jaarlijkse hackathon waarbij studenten, in teams van twee, een uitdagende opdracht voorgeschoteld krijgen die ze binnen een dag moeten oplossen. De hackathon is verdeeld over twee dagen: één voor IT-profielen en één voor studenten uit creatieve richtingen zoals marketing, communicatie en design.<br><br> Het evenement gaat niet alleen over technische oplossingen, maar biedt ook ruimte voor creatief denken en samenwerking. het thema van dit jaar, ‘Among the Stars’, zorgde voor een speelse en futuristische sfeer die het analytisch denkvermogen en de creativiteit van de deelnemers aanwakkerde. Het evenement vond plaats in het Flanders Meeting & Convention Center, gelegen in de Zoo van Antwerpen. Ik heb samen met mijn goede vriend en klasgenoot Mike Vanbree deelgenomen aan dit evenement.`
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
             :src="imgUrl"
             alt="Featured Image"/>
      </header>

      <div class="mx-auto mt-10 max-w-screen-md space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700">
        <h1 class="font-bold leading-snug tracking-tight text-slate-800 mx-auto w-full text-3xl text-center">
          Omschrijving
        </h1>
        <p v-html="descriptionText"></p>
      </div>
    </article>
  </main>

  <div class="w-fit mx-auto mt-10 flex space-x-2">
    <div class="h-0.5 w-2 bg-gray-600"></div>
    <div class="h-0.5 w-32 bg-gray-600"></div>
    <div class="h-0.5 w-2 bg-gray-600"></div>

  </div>

  <aside aria-label="Related Articles" class="mx-auto mt-10 py-20">
    <HackathonMessengerComponent/>
  </aside>
</template>

<style scoped>

</style>