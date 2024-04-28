<script>
  import Tag from '$lib/tag.svelte';
  import Card from './card.svelte';
  import Rectangle from '$lib/rectangle.svelte';
  import Hero from './hero.svelte';
  import Deliveries from '$lib/deliveries.svelte';
</script>

<main>
  <Hero />
  <section class="m-auto flex max-w-6xl flex-col gap-6 pb-36 pt-52">
    <Tag>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        slot="icon"
      >
        <path
          opacity="0.2"
          d="M14.0625 2.8125V13.5L11.8125 11.8934V5.0625C11.8125 4.91332 11.7532 4.77024 11.6477 4.66475C11.5423 4.55926 11.3992 4.5 11.25 4.5H6.1875V2.8125C6.1875 2.66332 6.24676 2.52024 6.35225 2.41475C6.45774 2.30926 6.60082 2.25 6.75 2.25H13.5C13.6492 2.25 13.7923 2.30926 13.8977 2.41475C14.0032 2.52024 14.0625 2.66332 14.0625 2.8125Z"
          fill="#6A30F1"
        />
        <path
          d="M13.5 1.6875H6.75C6.45163 1.6875 6.16548 1.80603 5.9545 2.017C5.74353 2.22798 5.625 2.51413 5.625 2.8125V3.9375H4.5C4.20163 3.9375 3.91548 4.05603 3.7045 4.267C3.49353 4.47798 3.375 4.76413 3.375 5.0625V15.75C3.375 15.8534 3.40347 15.9547 3.45729 16.0429C3.51112 16.1312 3.58821 16.2029 3.68011 16.2502C3.77201 16.2975 3.87516 16.3185 3.97824 16.311C4.08132 16.3036 4.18035 16.2678 4.26445 16.2077L7.875 13.6287L11.4862 16.2077C11.5703 16.2676 11.6693 16.3032 11.7723 16.3106C11.8753 16.318 11.9783 16.2969 12.0701 16.2496C12.1618 16.2023 12.2388 16.1307 12.2926 16.0426C12.3464 15.9545 12.3749 15.8532 12.375 15.75V12.986L13.7355 13.9577C13.8196 14.0178 13.9187 14.0536 14.0218 14.061C14.1248 14.0685 14.228 14.0475 14.3199 14.0002C14.4118 13.9529 14.4889 13.8812 14.5427 13.7929C14.5965 13.7047 14.625 13.6034 14.625 13.5V2.8125C14.625 2.51413 14.5065 2.22798 14.2955 2.017C14.0845 1.80603 13.7984 1.6875 13.5 1.6875ZM11.25 14.6573L8.20125 12.4777C8.10585 12.4095 7.99154 12.3729 7.8743 12.3729C7.75706 12.3729 7.64275 12.4095 7.54734 12.4777L4.5 14.6566V5.0625H11.25V14.6573ZM13.5 12.4073L12.375 11.6016V5.0625C12.375 4.76413 12.2565 4.47798 12.0455 4.267C11.8345 4.05603 11.5484 3.9375 11.25 3.9375H6.75V2.8125H13.5V12.4073Z"
          fill="#6A30F1"
        />
      </svg>
      Nossa cultura
    </Tag>
    <div class="grid grid-cols-2 items-end gap-10 pb-6">
      <h2 class="w-[570px] text-[40px] font-bold leading-[51px] text-primary-400">
        Nós somos a WeLookUp, a sua agência digital.
      </h2>
      <p class="text-lg text-[#808080]">
        Desde 2020 nossa equipe atua no mercado digital, desenvolvendo as melhores soluções em alta
        performance para diferentes nichos de mercado.
      </p>
    </div>
    <ul class="grid grid-cols-3 gap-8">
      <li>
        <Card
          light
          icon="/mission.svg"
          title="Missão"
          description="Criar experiências digitais excepcionais para impulsionar o sucesso de nossos
          clientes online, através de design inovador e tecnologia de ponta."
        />
      </li>
      <li>
        <Card
          icon="/eye.svg"
          title="Visão"
          description="Ser a principal agência de design especializada em e-commerces e websites, 
          reconhecida por sua criatividade, excelência técnica e satisfação do cliente."
        />
      </li>
      <li>
        <Card
          light
          icon="/trade.svg"
          title="Valores"
          description="Excelência, Inovação, Colaboração, Integridade e Paixão."
        />
      </li>
    </ul>
  </section>
  <Deliveries />
  <section class="m-auto flex max-w-6xl flex-col items-center gap-6 pb-36">
    <Tag>
      <svg width="17" height="17" viewBox="0 0 17 17" slot="icon">
        <path
          d="M12.8924 9.07453L9.26356 7.73859L7.92762 4.10695C7.84851 3.89203 7.70538 3.70654 7.51753 3.57552C7.32969 3.4445 7.10618 3.37425 6.87716 3.37425C6.64813 3.37425 6.42462 3.4445 6.23678 3.57552C6.04893 3.70654 5.9058 3.89203 5.82669 4.10695L4.48934 7.73438L0.857702 9.07031C0.642777 9.14943 0.457291 9.29256 0.32627 9.4804C0.19525 9.66825 0.125 9.89176 0.125 10.1208C0.125 10.3498 0.19525 10.5733 0.32627 10.7612C0.457291 10.949 0.642777 11.0921 0.857702 11.1713L4.48442 12.5156L5.82036 16.1452C5.89947 16.3601 6.04261 16.5456 6.23045 16.6766C6.41829 16.8076 6.6418 16.8779 6.87083 16.8779C7.09985 16.8779 7.32336 16.8076 7.51121 16.6766C7.69905 16.5456 7.84218 16.3601 7.9213 16.1452L9.25723 12.5163L12.8889 11.1804C13.1038 11.1013 13.2893 10.9581 13.4203 10.7703C13.5513 10.5825 13.6216 10.3589 13.6216 10.1299C13.6216 9.9009 13.5513 9.67739 13.4203 9.48954C13.2893 9.3017 13.1038 9.15857 12.8889 9.07945L12.8924 9.07453ZM8.87122 11.4609C8.71921 11.5167 8.58117 11.6049 8.46667 11.7194C8.35217 11.8339 8.26396 11.972 8.20817 12.124L6.87223 15.7423L5.53911 12.1212C5.48327 11.97 5.39534 11.8327 5.28137 11.7187C5.16739 11.6047 5.03008 11.5168 4.87887 11.4609L1.26059 10.125L4.87887 8.78906C5.03008 8.73323 5.16739 8.6453 5.28137 8.53132C5.39534 8.41735 5.48327 8.28003 5.53911 8.12883L6.87505 4.51055L8.21098 8.12883C8.26678 8.28084 8.35498 8.41888 8.46948 8.53338C8.58398 8.64788 8.72202 8.73608 8.87403 8.79188L12.4923 10.1278L8.87122 11.4609ZM9.12505 2.8125C9.12505 2.66332 9.18431 2.52024 9.2898 2.41475C9.39529 2.30926 9.53836 2.25 9.68755 2.25H10.8125V1.125C10.8125 0.975816 10.8718 0.832742 10.9773 0.727252C11.0828 0.621763 11.2259 0.5625 11.375 0.5625C11.5242 0.5625 11.6673 0.621763 11.7728 0.727252C11.8783 0.832742 11.9375 0.975816 11.9375 1.125V2.25H13.0625C13.2117 2.25 13.3548 2.30926 13.4603 2.41475C13.5658 2.52024 13.625 2.66332 13.625 2.8125C13.625 2.96168 13.5658 3.10476 13.4603 3.21025C13.3548 3.31574 13.2117 3.375 13.0625 3.375H11.9375V4.5C11.9375 4.64918 11.8783 4.79226 11.7728 4.89775C11.6673 5.00324 11.5242 5.0625 11.375 5.0625C11.2259 5.0625 11.0828 5.00324 10.9773 4.89775C10.8718 4.79226 10.8125 4.64918 10.8125 4.5V3.375H9.68755C9.53836 3.375 9.39529 3.31574 9.2898 3.21025C9.18431 3.10476 9.12505 2.96168 9.12505 2.8125ZM16.4375 6.1875C16.4375 6.33668 16.3783 6.47976 16.2728 6.58525C16.1673 6.69074 16.0242 6.75 15.875 6.75H15.3125V7.3125C15.3125 7.46169 15.2533 7.60476 15.1478 7.71025C15.0423 7.81574 14.8992 7.875 14.75 7.875C14.6009 7.875 14.4578 7.81574 14.3523 7.71025C14.2468 7.60476 14.1875 7.46169 14.1875 7.3125V6.75H13.625C13.4759 6.75 13.3328 6.69074 13.2273 6.58525C13.1218 6.47976 13.0625 6.33668 13.0625 6.1875C13.0625 6.03832 13.1218 5.89524 13.2273 5.78975C13.3328 5.68426 13.4759 5.625 13.625 5.625H14.1875V5.0625C14.1875 4.91332 14.2468 4.77024 14.3523 4.66475C14.4578 4.55926 14.6009 4.5 14.75 4.5C14.8992 4.5 15.0423 4.55926 15.1478 4.66475C15.2533 4.77024 15.3125 4.91332 15.3125 5.0625V5.625H15.875C16.0242 5.625 16.1673 5.68426 16.2728 5.78975C16.3783 5.89524 16.4375 6.03832 16.4375 6.1875Z"
          fill="#6A30F1"
        />
      </svg>
      Empresas
    </Tag>
    <h2 class="text-4xl font-bold text-primary-400">Clientes que fazem parte da nossa história.</h2>
    <p class="mb-6">Veja aqui alguns dos nossos parceiros que acreditaram na gente!</p>
    <ul class="grid grid-cols-4">
      <Rectangle src="/partners/guardaroba.png" alt="guardaroba" class="rounded-tl-2xl" />
      <Rectangle src="/partners/approve.png" alt="approve" />
      <Rectangle src="/partners/jadejade.png" alt="jadejade" />
      <Rectangle src="/partners/piticas.png" alt="piticas" class="rounded-tr-2xl" />
      <Rectangle src="/partners/okdok.png" alt="okdok" />
      <Rectangle src="/partners/nutty.png" alt="nutty" />
      <Rectangle src="/partners/stanley.png" alt="stanley" />
      <Rectangle src="/partners/i2go.png" alt="i2go" />
      <Rectangle src="/partners/paiper.png" alt="paiper" class="rounded-bl-2xl" />
      <Rectangle src="/partners/contemplato.png" alt="contemplato" />
      <Rectangle src="/partners/furia.png" alt="furia" />
      <Rectangle src="/partners/dermapelle.png" alt="dermapelle" class="rounded-br-2xl" />
    </ul>
  </section>
</main>
