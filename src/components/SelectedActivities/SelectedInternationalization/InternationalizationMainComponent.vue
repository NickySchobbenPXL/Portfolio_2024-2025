<script setup>
import {ref} from "vue";
import LeftTextRightPictureComponent from "./LeftTextRightPictureComponent.vue";
import RightPictureLeftTextComponent from "./RightPictureLeftTextComponent.vue";

const title = "Special Topics in Digital Marketing BIP - Metaverse";
const year = "2024";
const imgUrl = "/public/images/algebra_logo.png"
const descriptionText = `Elk jaar organiseren PXL, Algebra University en Rosenheim University of Applied Sciences een BIP-week rond een specifiek thema.
Dit jaar vond deze plaats in Zagreb, Kroatië, aan de Algebra University. Het thema ging over Metaverse,
een fascinerende digitale wereld vol kansen en uitdagingen. Het doel was om samen na te denken over hoe je een bedrijf in de Metaverse zou kunnen starten,
met aandacht voor zowel de technische en commerciële uitdagingen als de kansen die het biedt.<br><br>
Samen met studenten vanuit Duitsland en Kroatië vormde ik een internationaal team.
Een week lang werkten we intensief samen aan het ontwikkelen van een Go-to-Market-strategie voor een Metaverse-service.
Dit deden we door marktprofielen te analyseren, een strategisch marketingplan op te stellen en een concrete verkoopstrategie uit te werken.
Aan het einde van de week mochten we ons project aan een jury presenteren.<br><br>
De BIP-week bestond uit twee delen: eerst drie online meetings ter voorbereiding, gevolgd door een week vol inspirerende, face-to-face samenwerking in Zagreb. <br><br>
Hoewel deze week minder IT-gerelateerd was en meer draaide om marketing, was het voor mij de perfecte opportuniteit om meer te leren over het grotere geheel van een project.
Niet alleen het technische gedeelte, maar ook hoe je een idee succesvol in de markt zet.
Mijn persoonlijke doel was om meer te leren over marketing én voornamelijk mijn soft skills aan te scherpen,
vooral op het gebied van samenwerken in een internationaal team met diverse achtergronden.<br><br>
Ons team bestond uit: <br><br>
\ • Fiona Streng (Duitsland)<br>
•\tDeo Supriya (Indië / Duitsland)<br>
•\tAbdija Hadžić (Kroatië)<br>
•\tReinaud Brouns (België)<br>
•\tEn ikzelf (België)`

const textData = ref([
  {
    title: "Wat staat er ons te wachten in Zagreb",
    description: `Op 27 maart 2024 gingen we van start met onze eerste online sessie.
    We begonnen met een introductie over het programma en kregen een overzicht van hoe de komende weken eruit zouden zien.
    Halverwege de sessie verdiepten we ons in de theorie over wat een team succesvol maakt en hoe je als individu kunt bijdragen tot het succes van een project.
    Na de theorie werden we in aparte kanalen geplaatst om elkaar beter te leren kennen.
    Hierbij kregen we een lijst van interactieve vragen die we aan elkaar konden stellen om zo op zoek te gaan naar een gemeenschappelijke connectie.<br><br>
   Tijdens de tweede online sessie doken we dieper in de wereld van de Metaverse.
   We kregen verschillende voorbeelden te zien van succesvolle projecten die gebruikmaakten van deze technologie.
   Daarnaast werd er uitgebreid ingegaan op de verschillende marketingstrategieën die deze projecten tot een succes hadden geleid.
   Het doel van deze sessie was om ons alvast te helpen met brainstormen over mogelijke ideeën ter voorbereiding op onze samenwerking in Zagreb.<br><br>
   In de derde en laatste online sessie lag de focus op het Business Model Canvas (BMC).
   We leerden hoe dit model werkt, hoe het kan worden ingezet om een beter inzicht te krijgen in je doelgroep en hoe
   je effectieve marketingstrategieën kunt ontwikkelen om deze doelgroep te bereiken.
   Als afsluiting kregen we een beknopte introductie over de opbouw van de eindpresentatie voor de jury, zodat we goed voorbereid aan de slag konden gaan.
    `,
    imgUrl: "/public/images/internationalisering1.png",
  },
  {
    title: "Aankomst in Zagreb",
    description: `Op 28 april 2024 vertrok de meerderheid van onze groep vanuit Charleroi met het vliegtuig naar Kroatië.
     Het ander deel van de groep had ervoor gekozen om al een dag eerder, op zaterdag, al naar Kroatië te gaan om de hoofdstad Zagreb op hun eigen tempo te verkennen.<br><br>
Bij aankomst hebben we ons direct ingecheckt en zijn we samen met de volledige groep van PXL gaan uiteten. Dit was het perfecte moment om elkaar beter te leren kennen en de week in een gezellige sfeer te beginnen.
`,
    imgUrl: "/public/images/internationalisering2.jpg",
  },
  {
    title: "Dag 1: Start van de BIP-werkweek",
    description: `Op 29 april 2024 was het eindelijk zover: de start van onze BIP-werkweek. Na een goede nachtrust vertrokken we richting Algebra University,
     waar het programma zou plaatsvinden. Bij aankomst werden we hartelijk verwelkomd door de lectoren van de universiteit.
     Aansluitend kregen we een rondleiding over de campus, waarbij we meer te weten kwamen over de verschillende programma’s en opleidingen die de universiteit aanbiedt.<br><br>
     Na de lunch verzamelden we in ons eigen lokaal, waar we voor de eerste keer fysiek kennismaakten met onze groep.
     Tijdens de online sessies was al duidelijk dat de sfeer goed zat, en dit werd meteen bevestigd toen we elkaar in het echt ontmoetten.
     De klik was er direct, wat een positieve toon zette voor de rest van de week.<br><br>
     In de namiddag volgden we een interactieve workshop over teamdynamiek en effectieve communicatietechnieken.
     We leerden hoe we als team efficiënt konden samenwerken en kregen praktische tips mee om de samenwerking te verbeteren.
     Een rollenspel hielp ons om elkaars sterke punten beter te begrijpen. Op basis van het rollenspel bepaalden we de rolverdeling binnen het team.
     Zo kozen we gezamenlijk Reinaud als teamleider, omdat hij de juiste kwaliteiten had om de leiding te nemen. De overige teamleden verdeelden de ondersteunende rollen,
     waarbij ikzelf de taak kreeg om het team te begeleiden en te sturen waar nodig.
`,
    imgUrl: "/public/images/internationalisering3.jpg",
  },
  {
    title: "Dag 2: Tijd om samen te innoveren",
    description: `Tijdens de tweede dag van onze BIP-week verdiepten we ons verder in de wereld van de Metaverse.
    We kregen verschillende voorbeelden te zien die ons hielpen om een beter beeld te krijgen van hoe we ons eigen project konden vormgeven.
    Aansluitend volgden we een boeiende workshop over de Go-To-Market-strategie,
    waarin we leerden hoe je een product succesvol op de markt kunt brengen en hoe we deze strategie konden toepassen op ons project.<br><br>
    Na enkele uren intensief brainstormen kwamen we uiteindelijk tot twee ideeën:<br><br>
    1.\tEen sportcafé met VR-ervaring: In dit concept konden bezoekers sportwedstrijden live volgen, maar met een extra dimensie. Door een VR-bril op te zetten,
    zouden ze het gevoel krijgen alsof ze zich midden in het stadion bevonden, omringd door de sfeer van het echte evenement.<br>
    2.\tHistorische belevingen met VR: Dit idee sprak ons het meest aan en werd uiteindelijk ons definitieve project.
    Het concept draaide om het beschikbaar stellen van VR-brillen bij toeristische trekpleisters en historische monumenten, zoals het Colosseum.
    Bezoekers zouden door de VR-bril de geschiedenis niet alleen kunnen bekijken, maar écht kunnen beleven alsof ze zich in het verleden bevonden.
    Dit zou de ervaring verrijken door de monumenten tot leven te brengen.<br><br>
    Na het kiezen van ons project mochten we ons idee pitchen voor de rest van de groep. Hoewel het concept met veel enthousiasme werd onthaald,
    ontvingen we van de lectoren waardevolle feedback over mogelijke uitdagingen. Zo werd erop gewezen dat het realiseren van dit project een complexe onderneming zou zijn,
    vooral vanwege de noodzaak tot samenwerking met overheidsinstanties en de technische beperkingen van het implementeren van dergelijke infrastructuur op historische locaties.
    In sommige gevallen zou dit zelfs onmogelijk of niet toegestaan kunnen zijn.<br><br>
    We hadden al snel het gevoel dat we mogelijk wat te hoog gegrepen hadden, maar waren toch vastberaden om ons op dit project te richten en het tot een goed einde te brengen.
`,
    imgUrl: "/public/images/internationalisering4.jpg",
  },
  {
    title: "Dag 3: Even op adem komen met een toffe daguitstap",
    description: `Op de derde dag van onze BIP-week konden we even op adem komen dankzij een geplande groepsuitstap naar het Trakošćan-kasteel en het Neanderthaler Museum
    in Krapina. De lectoren waren verrast dat we na slechts twee dagen al zo vermoeid waren.
    Wat ze echter niet wisten, was dat ons hostel boven een ondergrondse nachtclub lag… en laten we zeggen dat we daar sinds onze aankomst goed gebruik van hadden gemaakt.
    Deze busreis van drie uur kwam dan ook heel goed uit om de gemiste uren slaap, vaak niet meer dan twee à drie per nacht, in te halen.
    Ondanks de vermoeidheid was de reis bijzonder leuk en leerrijk.<br><br>
    In het Neanderthaler Museum doken we in de geschiedenis van de mensheid, met tentoonstellingen over de evolutie van de Neanderthaler.
    Het Trakošćan-kasteel, een prachtig middeleeuws bouwwerk uit de 13e eeuw gelegen in het noorden van Kroatië,
    bood ons een blik op de rijke Kroatische geschiedenis.<br><br>
    Wat deze uitstap echter bijzonder maakte, was de kans om in een ontspannen sfeer nog beter kennis te maken met de studenten uit Duitsland en Kroatië.
`,
    imgUrl: "/public/images/internationalisering5.jpg",
  },
  {
    title: "Dag 4: Afronding van het project, en de voorbereidingen voor de jurypresentatie",
    description: `Voor de vierde dag was het de bedoeling om ons project af te ronden, en de laatste puntjes op de i te zetten. Toch waren we als groep nog lang niet klaar, omdat we steeds bleven dromen over nieuwe ideeën. Uiteindelijk besloten we om een groot deel van de features te schrappen, zodat we onze deadline konden halen. Tegen het einde van de dag verdeelden we ons over verschillende lokalen om te oefenen voor de jurypresentatie die de volgende dag gepland stond. Rond 19:00 uur hadden we eindelijk het gevoel dat we genoeg geoefend hadden en klaar waren voor de grote finale.`,
    imgUrl: "/public/images/internationalisering6.jpg",
  },
  {
    title: "Dag 5: De jurypresentatie en het verdict",
    description: `De laatste dag, en voor velen ook de meest stressvolle van de hele week. Het was eindelijk tijd voor onze jurypresentatie. Groep per groep werden we naar voren geroepen om onze pitch te geven. We kregen ongeveer 15 minuten om onze presentatie te houden, gevolgd door nog eens 15 minuten voor een Q&A. De Q&A was opgemaakt als een soort van “shark tank” ervaring. Hier speelde de jury de rol van fictieve investeerders die op basis van ons project bepaalden of ze wel of niet zouden ‘investeren’. Een spannende, maar vooral ontzettend leuke ervaring. <br><br>
Nadat alle presentaties klaar waren, en we konden genieten van een welverdiende pauze, kwam eindelijk het verdict! De ‘sharks’ hadden een top 3 samengesteld met de beste projecten. Helaas zaten wij daar niet bij, maar dat vonden we op zich niet erg. We waren oprecht tevreden met wat we als team hadden bereikt, en dat voelde voor ons als de echte overwinning van het verhaal.
`,
    imgUrl: "/public/images/internationalisering7.jpg",
  },
  {
    title: "Extra: Infiltratieplan Rosenheim – Missie Geslaagd!",
    description: `Een onvergetelijke herinnering aan onze trip was de geheime missie van Reinaud en mij om ons zonder probleem tussen de Duitse locals te mengen. Hoewel we hadden gezworen dit undercoveravontuur tussen ons geheim te houden, wist speurneus Jan Castermans ons uiteindelijk toch te ontmaskeren. Betrapt... maar wel met stijl!`,
    imgUrl: "/public/images/internationalisering8.png",
  },
]);
</script>

<template>
  <main>
    <article>
      <header class="mx-auto max-w-screen-xl pt-28 text-center">
        <h1 class="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">{{ title }} {{ year }}</h1>
        <div class="mt-6 flex flex-wrap justify-center gap-2" aria-label="Tags">
          <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Digitale
            Marketing
          </button>
          <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Metaverse
          </button>
          <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Samenwerking
          </button>
          <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">Internationaal
          </button>
          <button class="rounded-lg bg-gray-100 px-2 py-1 font-medium text-gray-600 hover:bg-gray-200">
            Multidisciplinair
          </button>
        </div>
        <img class="sm:h-[34rem] mt-10 w-full object-contain"
             :src="imgUrl"
             alt="Featured Image"/>
      </header>

      <div class="mx-auto mt-10 max-w-screen-md space-y-12 px-4 py-10 font-serif text-lg tracking-wide text-gray-700">
        <strong class="text-2xl font-medium">Omschrijving</strong>
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
    <div>
      <component
          v-for="(item, index) in textData"
          :is="index % 2 === 0 ? LeftTextRightPictureComponent : RightPictureLeftTextComponent"
          :key="index"
          :title="item.title"
          :description="item.description"
          :imgUrl="item.imgUrl"
      />
    </div>
  </aside>
  <hr class="mt-16 border-t-2 border-gray-900 w-1/2 mx-auto"/>
</template>

<style scoped>

</style>