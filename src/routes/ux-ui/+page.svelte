<script lang="ts">
  import Deliveries from '$lib/deliveries.svelte';
    import HowItWorks from '$lib/how-it-works.svelte';
  import Projects from '$lib/projects.svelte';
  import Card from './card.svelte';
  import Hero from './hero.svelte';
</script>

<main>
  <Hero />
  <section class="m-auto flex max-w-6xl flex-col gap-6 pb-36 pt-52">
    <ul class="flex flex-col gap-28">
      <li>
        <Card
          src="/ux-ui/card.png"
          tag="Website"
          title="Websites que potencializam resultados."
          description="Nosso diferencial está em criar e aprimorar websites com tecnologias de ponta. 
          Nossa equipe é composta por especialistas certificados, sempre atualizados com as tendências mais recentes do mercado digital."
        />
      </li>
      <li>
        <Card
          inversed
          src="/ux-ui/card.png"
          tag="Landing Page"
          title="Landing Pages que decolam o seu negócio."
          description="Na criação e otimização de Landing Pages, nossa equipe certificada está sempre à frente, imersa nas últimas 
          tendências digitais para destacar sua presença online como nunca antes!"
        />
      </li>
      <li>
        <Card
          src="/ux-ui/card.png"
          tag="Analise UX/UI"
          title="Impulsione ainda mais o seu negócio com quem entende."
          description="Nossa especialidade! Onde nossa equipe de especialistas está constantemente atualizada com as tendências 
          mais recentes do mercado digital para criar e aprimorar experiências excepcionais para seus usuários."
        />
      </li>
    </ul>
  </section>
  <Deliveries />
  <Projects />
  <HowItWorks />
</main>
