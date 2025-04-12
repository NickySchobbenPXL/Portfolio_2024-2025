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
        <strong class="text-2xl font-medium">Omschrijving</strong>
        <p v-html="descriptionText"/>
      </div>
    </article>
  </main>

  <div class="w-fit mx-auto mt-10 flex space-x-2">
    <div class="h-0.5 w-2 bg-gray-600"></div>
    <div class="h-0.5 w-32 bg-gray-600"></div>
    <div class="h-0.5 w-2 bg-gray-600"></div>
  </div>

  <aside aria-label="Related Articles" class="mx-auto mt-10 py-20">
    <h2 class="mb-8 text-center text-5xl font-bold text-gray-900">More Blogs</h2>

    <div class="mx-auto grid justify-center px-4 sm:grid-cols-2 sm:gap-6 sm:px-8 md:grid-cols-3">
      <ProjectweekArticleComponent
          v-for="(item, index) in activityDescriptions"
          :key="index"
          :title="item.title"
          :description="item.description"
          :image="null"
      />
    </div>
  </aside>
</template>

<script setup>

import ProjectweekArticleComponent from "./ProjectweekArticleComponent.vue";

const title = "Projectweek";
const year = "2024";
const imgUrl = "/images/projectweek_logo.png"
const descriptionText = "De projectweek is een week vol diverse activiteiten die ons voorbereiden op het researchproject. Tijdens deze week maakten we voor het eerst kennis met ons team en kregen we een uitgebreide introductie over het project. We namen deel aan verschillende pop-sessies, volgden een workshop over onderzoekend handelen en kregen een sessie over het Agile-proces. Daarnaast kregen we meer inzicht in I-Talent en hadden we de kans om tijdens een jobevent in contact te komen met bedrijven, wat een toffe eerste stap was in het opbouwen van ons professionele netwerk."
const activityDescriptions = [
  {
    title: "Dag 1: Toelichting projectweek",
    description: `De projectweek begon met een samenkomst in de aula op de campus, waar we een warm welkom kregen van verschillende lectoren. Zij gaven toelichting bij het programma en de opzet van de week. Aansluitend volgde een introductie over I-Talent, waarin werd uitgelegd hoe het opgebouwd is, welke activiteiten we moesten uitvoeren en hoe we met ons portfolio aan de slag konden.<br><br>
        Na de middagpauze namen we deel aan de workshop Ken jezelf! – een sessie rond kernkwadranten, samenwerking en reflectie. Dit was meteen het moment waarop we ons team leerden kennen, waarmee we de rest van het project zouden samenwerken. Al snel ontstond er een goede sfeer; we ontdekten gezamenlijke interesses en overeenkomsten.<br><br>
        Tijdens de workshop stond de vraag centraal: “Hoe goed ken je jezelf eigenlijk?” We maakten kennis met het concept van de ‘bubbel’, bestaande uit drie zones: de comfortzone (waar je je veilig voelt), de stretchzone (waar je leert en groeit) en de paniekzone (waar leren bemoeilijkt wordt door stress). Vervolgens leerden we over de kernkwadranten, opgebouwd uit vier elementen: de kernkwaliteit (zoals behulpzaamheid), de valkuil (bijvoorbeeld bemoeizucht), de uitdaging (zoals leren loslaten) en de allergie (bijvoorbeeld onverschilligheid).<br><br>
        Deze inzichten hielpen ons niet alleen om onszelf beter te begrijpen, maar ook om onze teamgenoten op een dieper niveau te leren kennen. We kregen zicht op gedeelde waarden én mogelijke spanningspunten, wat de basis vormde voor een sterke samenwerking."
 `
  },
  {
    title: "Dag 2: Feedback geven en ontvangen: hoe doe je dat?",
    description: `Op de tweede dag begonnen we met een pop-sessie van Learning Path: Feedback – The Key to Improvement. Tijdens deze sessie leerden we het verschil tussen feedback en kritiek, hoe we zelf omgaan met feedback, en hoe we op een constructieve manier feedback kunnen geven én ontvangen.<br><br>
        Halverwege de sessie speelden we een groepsspel waarin we werkten met kaarten waarop soft skills stonden. Elk van ons kreeg een blad met twee kolommen: 'zelfbeeld' en 'feedback'. Per ronde trokken we een kaart en kozen we of we de vaardigheid in ons eigen 'zelfbeeld' plaatsten (iets wat we wilden ontwikkelen), of als feedback gaven aan een teamgenoot (een kwaliteit die we bij hen herkenden). Ondanks dat we elkaar pas net leerden kennen, ontstond er al een hechte sfeer. Zelfs de docent merkte op hoe goed de samenwerking verliep.<br><br>
        Voor mijn eigen 'zelfbeeld' koos ik onder andere kritisch inzicht, argumenteren, durf en flexibiliteit — vaardigheden waarin ik wil groeien. Van mijn groepsgenoten kreeg ik feedback die ik als erg waardevol ervaarde, met eigenschappen zoals collegialiteit, engagement, mensgericht leiderschap, proactiviteit en emotionele intelligentie. Het deed me goed te horen dat ik wordt gezien als iemand die het team samenbrengt, actief luistert en anderen op hun gemak stelt — kwaliteiten die ik belangrijk vind in een samenwerking.<br><br>
        Na de pop-sessie kregen we een pitch over het researchproject. Dit jaar werkten we samen met een vrouw die een paardenfokkerij runt. Ze gebruikte momenteel een notitieboekje op haar telefoon om gegevens bij te houden, wat onoverzichtelijk werd. Ze had de wens om een digitale toepassing te hebben om haar administratie efficiënter te beheren.<br><br>
        In de namiddag volgde een sessie over reflectie en academisch schrijven, een waardevolle voorbereiding op het schrijven van onze researchpaper. De dag werd afgesloten met een inspirerende presentatie van Ann Beckers over netwerken, waarin ze het belang benadrukte van een goed netwerk en hoe platformen zoals LinkedIn je professionele ontwikkeling kunnen ondersteunen.
  `
  },
  {
    title: "Dag 3: Onderzoekend handelen en Agile werken",
    description: `Op de derde dag kregen we uitleg over onderzoekend handelen. Omdat we niet alleen een project uitvoerden, maar ook onderzoek moesten doen binnen een specifiek thema, leerden we hoe we dit het beste konden aanpakken en hoe we betrouwbare bronnen konden raadplegen.<br><br>
Daarna volgde een sessie over Agile werken, waarin werd uitgelegd hoe we het project in sprints zouden aanpakken, met de klantcommunicatie als centraal punt. Het doel was niet om een volledig afgerond product op te leveren, maar om ervaring op te doen met samenwerken in een Agile-team.<br><br>
Ten slotte kregen we een presentatie over internationalisering, waarin de mogelijkheden en praktische inschrijvingsprocedures werden toegelicht.
`
  },
  {
    title: "Dag 4: Tijd om te netwerken!",
    description: `Voor het jobevent in de namiddag volgden we een workshop over netwerken. We leerden hoe belangrijk het is om vooraf doelen te stellen en te onderzoeken welke bedrijven aanwezig zullen zijn. Ook werkten we aan een elevator pitch om onszelf snel en effectief voor te stellen.<br><br>
In de namiddag bezochten we het jobevent in de Trixxo Arena. Ik had me goed voorbereid en onderzocht welke bedrijven me aanspraken. Hoewel ik meerdere bedrijven sprak, had ik de beste klik met AE, ACA en Cegeka. Tijdens de zomervakantie besloot ik uiteindelijk te solliciteren bij ieder van deze bedrijven, en koos ik uiteindelijk voor Cegeka.
`
  },
  {
    title: "Dag 5: Start van het researchproject",
    description: `Op de laatste dag van de projectweek gingen we officieel van start met het researchproject. De sfeer in het team was goed en we hadden al een goed idee van onze aanpak. We werkten aan ons projectplan en stelden een lijst met vragen op voor de klant, zodat we de volgende week meteen aan de slag konden.<br><br>
Het project verliep uiteindelijk erg succesvol. Hoewel we onderweg obstakels tegenkwamen, wisten we deze als team op te lossen en ons doel te bereiken. We zijn nog steeds een hechte groep en kijken met veel plezier terug op deze ervaring.
`
  },
]
</script>
<style>
</style>