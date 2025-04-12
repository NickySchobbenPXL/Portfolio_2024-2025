<template>
  <!-- Card(s) section -->
  <section class="bg-white">
    <div class="container mx-auto p-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-full mx-auto">
        <SeminarCardComponent
            v-for="(seminar, index) in seminars"
            :key="index"
            :seminar="seminar"
            :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SeminarCardComponent from "./SeminarCardComponent.vue";

export default {
  name: "SeminarsComponent",
  components: {SeminarCardComponent},
  data() {
    return {
      seminars: [
        {
          image: '/Portfolio_2024/images/cbtw2.png',
          title: 'CQRS (Command and Query Responsibility Segregation) met MediatR',
          company: 'CBTW/Positive Thinking Company',
          location: 'Campus Elfde-Linie - G414',
          date: '27/10/2024, 10:00u-12:00u',
          description: `MediatR is een populaire .NET-library die helpt om verantwoordelijkheden te scheiden,
          waardoor applicaties schaalbaar en overzichtelijk blijven. Tijdens deze workshop leerden we wat MediatR is,
          hoe het werkt en hoe we het optimaal kunnen inzetten als toekomstige ontwikkelaars.`
        },
        {
          image: '/Portfolio_2024/images/biq.svg',
          title: 'Het nut van pull requests en code review in een product development lifecycle',
          company: 'BIQ',
          location: 'Campus Elfde-Linie - G141',
          date: '05/03/2024, 9:30u-12:00u',
          description: `GitHub is een open-source versiebeheersysteem waarmee meerdere mensen gelijktijdig aan hetzelfde project kunnen werken.
          In deze sessie ontdekten we hoe je codewijzigingen duidelijk en uniform documenteert om projecten efficiënt te beheren.`
        },
        {
          image: null,
          title: 'Inleiding tot visuele generatieve AI - Stable Diffusion XL / ComfyUI / Controlnet',
          company: 'Uncanny',
          location: 'Campus Elfde-Linie – G414',
          date: '19/03/2024, 08:30u–12:30u',
          description: `Tijdens deze sessie doken we in Stable Diffusion, een AI-technologie voor het genereren van afbeeldingen.
          We leerden hoe we effectieve prompts kunnen schrijven om het gewenste visuele resultaat te bereiken.`
        },
        {
          image: '/Portfolio_2024/images/AE.png',
          title: 'API & Security Testing: Unleashing the Power of Manual Testing',
          company: 'AE',
          location: 'Campus Elfde-Linie - G414',
          date: '19/03/2024, 08:30u–12:30u',
          description: `Beveiliging is een cruciaal, maar vaak onderschat aspect van softwareontwikkeling.
          In deze workshop onderzochten we het belang van veilig programmeren en voerden we praktische labs uit waarin we webapplicaties
          probeerden te hacken om kwetsbaarheden beter te begrijpen.`
        },
        {
          image: '/Portfolio_2024/images/ncomputer_logo.jpg',
          title: 'Prompt engineering',
          company: 'Nocomputer',
          location: 'Corda 7 - iClassroom 3 CC714',
          date: '23/10/2024, 13:30u–16:30u',
          description: `Met prompt engineering leer je hoe je efficiënt werkt met
          Large Language Models. We onderzochten welke LLM’s het beste passen bij
          verschillende contexten en hoe je tools zoals ChatGPT optimaal kunt benutten voor snellere en betere resultaten.`
        },
        {
          image: '/Portfolio_2024/images/it_licious_logo.jpg',
          title: 'Flutter',
          company: 'ITLicious',
          location: 'Corda 7 - iClassroom 3 CC713',
          date: '06/11/2024, 13:30u–16:30u',
          description: `Flutter is een door Google ontwikkeld framework waarmee je
          crossplatform-apps bouwt voor iOS, Android en het web.
          Tijdens deze seminarie kregen we een introductie over de werking van Flutter en namen we deel aan een hands-on workshop om het framework verder te verkennen.`
        },
        {
          image: '/Portfolio_2024/images/gluo_logo.png',
          title: 'DevSecOps Workshop',
          company: 'Gluo',
          location: 'Corda 7 - iClassroom 3 CC713',
          date: '13/11/2024, 13:30u–17:30u',
          description: `In deze seminarie kregen we inzicht in DevSecOps, waarbij beveiliging integraal onderdeel is van de softwareontwikkelingscyclus. Door middel van labs leerden we hoe je applicaties veilig kunt deployen in de cloud.`
        },
        {
          image: '/Portfolio_2024/images/cegeka_logo.svg',
          title: 'Bedrijfsbezoek en datacenter',
          company: 'Cegeka',
          location: 'Cegeka (Universiteitslaan)',
          date: '20/11/2024, 14:15u–16:15u',
          description: `Tijdens deze seminarie leerden we meer over Cegeka, hun ontstaan en missie. Na een introductie over het bedrijf kregen we een presentatie over hun datacenter, gevolgd door een rondleiding waarin de werking en het belang van het datacenter werden toegelicht.`
        },
      ]
    };
  }
};
</script>


<style scoped>
body,
html {
  font-family: "Lato", sans-serif;
  scroll-behavior: smooth !important;
}
</style>