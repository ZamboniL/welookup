<script>
  import Tag from '$lib/tag.svelte';
  import Card from './card.svelte';
  import Hero from './hero.svelte';
  import ProjectCard from '../lib/project-card.svelte';
  import Step from './step.svelte';
</script>


<main>
  <Hero />
  <section class="m-auto flex max-w-6xl gap-8 pb-36 pt-52">
    <h2 class="max-w-52">As melhores empresas acreditam em nós</h2>
    <ul class="flex w-full items-center gap-12">
      <li><img src="/partners/approve.png" alt="Approve" class="h-12" /></li>
      <li><img src="/partners/okdok.png" alt="OKDOK" class="h-10" /></li>
      <li><img src="/partners/nutty.png" alt="NUTTY BAVARIAN" class="h-10" /></li>
      <li><img src="/partners/paiper.png" alt="Paiper" class="h-8" /></li>
      <li><img src="/partners/contemplato.png" alt="Contemplato" class="h-8" /></li>
    </ul>
  </section>
  <section class="m-auto flex max-w-6xl flex-col items-center gap-6 pb-36">
    <Tag>
      <svg width="17" height="17" viewBox="0 0 17 17" slot="icon">
        <path
          d="M12.8924 9.07453L9.26356 7.73859L7.92762 4.10695C7.84851 3.89203 7.70538 3.70654 7.51753 3.57552C7.32969 3.4445 7.10618 3.37425 6.87716 3.37425C6.64813 3.37425 6.42462 3.4445 6.23678 3.57552C6.04893 3.70654 5.9058 3.89203 5.82669 4.10695L4.48934 7.73438L0.857702 9.07031C0.642777 9.14943 0.457291 9.29256 0.32627 9.4804C0.19525 9.66825 0.125 9.89176 0.125 10.1208C0.125 10.3498 0.19525 10.5733 0.32627 10.7612C0.457291 10.949 0.642777 11.0921 0.857702 11.1713L4.48442 12.5156L5.82036 16.1452C5.89947 16.3601 6.04261 16.5456 6.23045 16.6766C6.41829 16.8076 6.6418 16.8779 6.87083 16.8779C7.09985 16.8779 7.32336 16.8076 7.51121 16.6766C7.69905 16.5456 7.84218 16.3601 7.9213 16.1452L9.25723 12.5163L12.8889 11.1804C13.1038 11.1013 13.2893 10.9581 13.4203 10.7703C13.5513 10.5825 13.6216 10.3589 13.6216 10.1299C13.6216 9.9009 13.5513 9.67739 13.4203 9.48954C13.2893 9.3017 13.1038 9.15857 12.8889 9.07945L12.8924 9.07453ZM8.87122 11.4609C8.71921 11.5167 8.58117 11.6049 8.46667 11.7194C8.35217 11.8339 8.26396 11.972 8.20817 12.124L6.87223 15.7423L5.53911 12.1212C5.48327 11.97 5.39534 11.8327 5.28137 11.7187C5.16739 11.6047 5.03008 11.5168 4.87887 11.4609L1.26059 10.125L4.87887 8.78906C5.03008 8.73323 5.16739 8.6453 5.28137 8.53132C5.39534 8.41735 5.48327 8.28003 5.53911 8.12883L6.87505 4.51055L8.21098 8.12883C8.26678 8.28084 8.35498 8.41888 8.46948 8.53338C8.58398 8.64788 8.72202 8.73608 8.87403 8.79188L12.4923 10.1278L8.87122 11.4609ZM9.12505 2.8125C9.12505 2.66332 9.18431 2.52024 9.2898 2.41475C9.39529 2.30926 9.53836 2.25 9.68755 2.25H10.8125V1.125C10.8125 0.975816 10.8718 0.832742 10.9773 0.727252C11.0828 0.621763 11.2259 0.5625 11.375 0.5625C11.5242 0.5625 11.6673 0.621763 11.7728 0.727252C11.8783 0.832742 11.9375 0.975816 11.9375 1.125V2.25H13.0625C13.2117 2.25 13.3548 2.30926 13.4603 2.41475C13.5658 2.52024 13.625 2.66332 13.625 2.8125C13.625 2.96168 13.5658 3.10476 13.4603 3.21025C13.3548 3.31574 13.2117 3.375 13.0625 3.375H11.9375V4.5C11.9375 4.64918 11.8783 4.79226 11.7728 4.89775C11.6673 5.00324 11.5242 5.0625 11.375 5.0625C11.2259 5.0625 11.0828 5.00324 10.9773 4.89775C10.8718 4.79226 10.8125 4.64918 10.8125 4.5V3.375H9.68755C9.53836 3.375 9.39529 3.31574 9.2898 3.21025C9.18431 3.10476 9.12505 2.96168 9.12505 2.8125ZM16.4375 6.1875C16.4375 6.33668 16.3783 6.47976 16.2728 6.58525C16.1673 6.69074 16.0242 6.75 15.875 6.75H15.3125V7.3125C15.3125 7.46169 15.2533 7.60476 15.1478 7.71025C15.0423 7.81574 14.8992 7.875 14.75 7.875C14.6009 7.875 14.4578 7.81574 14.3523 7.71025C14.2468 7.60476 14.1875 7.46169 14.1875 7.3125V6.75H13.625C13.4759 6.75 13.3328 6.69074 13.2273 6.58525C13.1218 6.47976 13.0625 6.33668 13.0625 6.1875C13.0625 6.03832 13.1218 5.89524 13.2273 5.78975C13.3328 5.68426 13.4759 5.625 13.625 5.625H14.1875V5.0625C14.1875 4.91332 14.2468 4.77024 14.3523 4.66475C14.4578 4.55926 14.6009 4.5 14.75 4.5C14.8992 4.5 15.0423 4.55926 15.1478 4.66475C15.2533 4.77024 15.3125 4.91332 15.3125 5.0625V5.625H15.875C16.0242 5.625 16.1673 5.68426 16.2728 5.78975C16.3783 5.89524 16.4375 6.03832 16.4375 6.1875Z"
          fill="#6A30F1"
        />
      </svg>
      Soluções
    </Tag>
    <h2 class="text-4xl font-bold text-primary-400">
      Soluções poderosas para o seu sucesso digital!
    </h2>
    <p class="mb-6">Somos especialistas em transformação digital.</p>
    <ul class="grid grid-cols-2 grid-rows-2 gap-8">
      <li>
        <Card
          light
          icon="/cart.svg"
          title="Implantação de e-commerce"
          description="Somos Especializados na implementação e desenvolvimento de tecnologias para eCommerce.
        Nosso objetivo é trazer mais performance, usabilidade e conversão de vendas para seus 
        negócios, com agilidade e transparência."
        />
      </li>
      <li>
        <Card
          icon="/wand.svg"
          title="UX/UI Design"
          description="Nosso compromisso central é garantir que seus clientes desfrutem da melhor 
          experiência de compra e navegação possível. Nosso foco está em desenvolver soluções
          eficientes e inovadoras, sempre buscando criar uma experiência extraordinária para eles."
        />
      </li>
      <li>
        <Card
          icon="/wish.svg"
          title="Suporte & Evolução"
          description="Estamos totalmente dedicados a acompanhar de perto a evolução do seu 
          e-commerce, comprometendo-nos a resolver suas necessidades de suporte diário com um 
          elevado padrão de qualidade, velocidade e eficiência."
        />
      </li>
      <li>
        <Card
          light
          icon="/marketing.svg"
          title="Marketing Digital"
          description="Nossa equipe é altamente especializada em alcançar resultados digitais por 
          meio de campanhas de performance e SEO. Estamos comprometidos em impulsionar o 
          crescimento do seu negócio online, garantindo visibilidade, relevância e sucesso 
          sustentável."
        />
      </li>
    </ul>
  </section>
  <section class="m-auto flex max-w-6xl flex-col items-center gap-6 pb-36">
    <Tag>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        slot="icon"
      >
        <path
          d="M6.29638 11.0739C6.26896 11.1829 5.58341 13.75 1.81255 13.75C1.66337 13.75 1.5203 13.6907 1.41481 13.5852C1.30932 13.4797 1.25005 13.3367 1.25005 13.1875C1.25005 9.41661 3.81716 8.73106 3.92615 8.70364C4.07095 8.66747 4.22419 8.69029 4.35216 8.7671C4.48014 8.84391 4.57235 8.96841 4.60853 9.11321C4.64471 9.25802 4.62188 9.41126 4.54507 9.53923C4.46826 9.6672 4.34376 9.75942 4.19896 9.7956C4.13568 9.81317 2.62255 10.2554 2.40177 12.5983C4.74459 12.3775 5.18755 10.8672 5.20583 10.7968C5.24313 10.6522 5.33635 10.5284 5.46498 10.4525C5.59361 10.3766 5.74712 10.3549 5.89173 10.3922C6.03635 10.4295 6.16023 10.5227 6.23611 10.6513C6.312 10.78 6.33368 10.9335 6.29638 11.0781V11.0739ZM12.8354 6.33482L12.5001 6.67021V10.7715C12.5009 10.9198 12.4722 11.0668 12.4157 11.204C12.3592 11.3411 12.276 11.4656 12.171 11.5703L9.75787 13.982C9.6538 14.0868 9.53002 14.17 9.39365 14.2267C9.25728 14.2834 9.11103 14.3126 8.96334 14.3125C8.84144 14.3124 8.72035 14.2927 8.60474 14.2541C8.40624 14.1885 8.23007 14.0686 8.09612 13.9081C7.96218 13.7475 7.87581 13.5527 7.84677 13.3457L7.46919 10.6393L4.36068 7.53083L1.65576 7.15325C1.44844 7.12417 1.25334 7.03783 1.09242 6.90392C0.931495 6.77001 0.811129 6.59385 0.744861 6.39527C0.678593 6.19668 0.669051 5.98354 0.717309 5.77983C0.765566 5.57612 0.86971 5.38991 1.01802 5.24216L3.42974 2.82903C3.53442 2.72398 3.65895 2.64078 3.79607 2.58429C3.9332 2.5278 4.08019 2.49914 4.22849 2.49997H8.32982L8.66521 2.16458C10.5411 0.289347 12.8017 0.208487 13.6862 0.261222C13.9605 0.277889 14.2192 0.394359 14.4135 0.588655C14.6078 0.782951 14.7242 1.04164 14.7409 1.31591C14.7922 2.19833 14.7114 4.45888 12.8361 6.33482H12.8354ZM1.81255 6.0395L4.42466 6.40372L7.20482 3.62497H4.22849L1.81255 6.0395ZM5.42099 6.99997L8.00005 9.57903L12.0395 5.53958C12.5839 4.99888 13.0062 4.34791 13.2781 3.63043C13.55 2.91295 13.6652 2.14558 13.6159 1.37989C12.8506 1.33239 12.084 1.44875 11.3673 1.72121C10.6506 1.99366 10.0002 2.41594 9.45974 2.95982L5.42099 6.99997ZM11.3751 7.79521L8.5956 10.5747L8.96123 13.1875L11.3751 10.7715V7.79521Z"
          fill="#6A30F1"
        />
      </svg>
      Projetos
    </Tag>
    <h2 class="text-4xl font-bold text-primary-400">
      Trazendo resultados estelares para cada cliente.
    </h2>
    <p class="mb-6">Alguns dos nossos projetos mais recentes estão aqui.</p>
    <ul class="flex gap-8">
      <li><ProjectCard title="Furia" tag="E-commerce" image="/projects/furia.png" /></li>
      <li><ProjectCard title="Paiper" tag="Website" image="/projects/paiper.png" /></li>
      <li><ProjectCard title="Contemplato" tag="Branding" image="/projects/contemplato.png" /></li>
      <li><ProjectCard /></li>
    </ul>
  </section>
  <section
    class="mb-12 border-b border-b-primary-600"
    style="background: linear-gradient(180deg, #FFFFFF 11.55%, #7F58FA 100%);"
  >
    <div class="relative m-auto flex max-w-6xl flex-col items-center gap-6">
      <Tag>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          slot="icon"
        >
          <path
            d="M8.84375 11.6562C8.84375 11.8231 8.79427 11.9863 8.70156 12.125C8.60884 12.2638 8.47707 12.3719 8.32289 12.4358C8.16872 12.4996 7.99907 12.5163 7.8354 12.4838C7.67172 12.4512 7.52138 12.3709 7.40338 12.2529C7.28538 12.1349 7.20502 11.9845 7.17247 11.8209C7.13991 11.6572 7.15662 11.4875 7.22048 11.3334C7.28434 11.1792 7.39249 11.0474 7.53124 10.9547C7.66999 10.862 7.83313 10.8125 8 10.8125C8.22378 10.8125 8.43839 10.9014 8.59662 11.0596C8.75486 11.2179 8.84375 11.4325 8.84375 11.6562ZM8 4.0625C6.44891 4.0625 5.1875 5.19805 5.1875 6.59375V6.875C5.1875 7.02418 5.24677 7.16726 5.35226 7.27275C5.45775 7.37824 5.60082 7.4375 5.75 7.4375C5.89919 7.4375 6.04226 7.37824 6.14775 7.27275C6.25324 7.16726 6.3125 7.02418 6.3125 6.875V6.59375C6.3125 5.82031 7.06977 5.1875 8 5.1875C8.93024 5.1875 9.6875 5.82031 9.6875 6.59375C9.6875 7.36719 8.93024 8 8 8C7.85082 8 7.70775 8.05926 7.60226 8.16475C7.49677 8.27024 7.4375 8.41332 7.4375 8.5625V9.125C7.4375 9.27418 7.49677 9.41726 7.60226 9.52275C7.70775 9.62824 7.85082 9.6875 8 9.6875C8.14919 9.6875 8.29226 9.62824 8.39775 9.52275C8.50324 9.41726 8.5625 9.27418 8.5625 9.125V9.07438C9.845 8.83883 10.8125 7.81578 10.8125 6.59375C10.8125 5.19805 9.5511 4.0625 8 4.0625ZM15.3125 8C15.3125 9.44628 14.8836 10.8601 14.0801 12.0626C13.2766 13.2651 12.1346 14.2024 10.7984 14.7559C9.46219 15.3093 7.99189 15.4541 6.57341 15.172C5.15492 14.8898 3.85196 14.1934 2.82928 13.1707C1.80661 12.148 1.11017 10.8451 0.828011 9.4266C0.545857 8.00811 0.690668 6.53781 1.24413 5.20163C1.7976 3.86544 2.73486 2.72339 3.9374 1.91988C5.13993 1.11637 6.55373 0.6875 8 0.6875C9.93877 0.689547 11.7975 1.46063 13.1685 2.83154C14.5394 4.20246 15.3105 6.06123 15.3125 8ZM14.1875 8C14.1875 6.77623 13.8246 5.57994 13.1447 4.56241C12.4648 3.54488 11.4985 2.75181 10.3679 2.2835C9.23724 1.81518 7.99314 1.69264 6.79288 1.93139C5.59262 2.17014 4.49012 2.75944 3.62478 3.62478C2.75944 4.49011 2.17014 5.59262 1.93139 6.79288C1.69265 7.99314 1.81518 9.23724 2.2835 10.3679C2.75182 11.4985 3.54488 12.4648 4.56241 13.1447C5.57994 13.8246 6.77623 14.1875 8 14.1875C9.64046 14.1856 11.2132 13.5331 12.3732 12.3732C13.5331 11.2132 14.1856 9.64046 14.1875 8Z"
            fill="#6A30F1"
          />
        </svg>
        Como fazemos
      </Tag>
      <h2 class="max-w-4xl text-center text-4xl font-bold text-primary-400">
        Entenda nosso passo a passo para transformar a sua marca!
      </h2>
      <p class="mb-20 text-primary-600">
        Trazemos mais performance, usabilidade e conversão de vendas para seus negócios.
      </p>
      <img src="/radar-bag.svg" alt="" class="absolute bottom-72 left-[480px]" />
      <img src="/radar-person.svg" alt="" class="absolute bottom-36 left-[464px]" />
      <img src="/radar-card.svg" alt="" class="absolute bottom-1 right-48" />
      <img src="/radar-heart.svg" alt="" class="absolute bottom-6 right-[440px]" />
      <img src="/radar-image.svg" alt="" class="absolute bottom-2 right-80" />
      <img src="/radar-pc.svg" alt="" class="absolute bottom-56 right-[400px]" />
      <img src="/radar-text.svg" alt="" class="absolute bottom-0 left-96" />
      <img src="/radar-toggle.svg" alt="" class="absolute bottom-12 left-64" />
      <img
        src="/logo-w.png"
        alt=""
        width="60"
        height="40"
        class="absolute bottom-0 translate-y-1/2"
        style="filter: drop-shadow(0px 4px 20px #9E88FD99);"
      />
      <img src="/radar.svg" alt="" />
    </div>
  </section>
  <section class="pb-11">
    <ol class="m-auto flex w-fit gap-16">
      <Step
        step={1}
        title="Análise"
        description="É aqui o nosso ponto de partida, que revela insights cruciais sobre o mercado,
        o público-alvo e a concorrência."
      />
      <Step
        step={2}
        title="Criação"
        description="É aqui que a magia acontece! Contamos com os melhores profissionais para a 
        criação do seu e-commerce/website."
      />
      <Step
        step={3}
        title="desenvolvimento"
        description="Mão na massa! Depois do processo de criação passamos para o desenvolvimento, 
        dando forma ao seu negócio!"
      />
      <Step
        step={4}
        title="Go Live!"
        description="Chegou o grande dia! Acompanhamos o go live do seu projeto, dando todo o 
        suporte necessário."
      />
    </ol>
  </section>
  <section class="relative w-full bg-[url('/hero-bg.png')] bg-cover p-16">
    <img src="/grass-top.svg" alt="" class="absolute left-0 top-0 w-full" />
    <h2 class="m-auto max-w-6xl text-center text-4xl font-bold text-white">
      Nosso principal foco é transformar a jornada do cliente e criar uma experiência de compra
      incrível.
    </h2>
  </section>
</main>
