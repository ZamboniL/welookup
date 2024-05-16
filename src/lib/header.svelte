<script>
  import { twMerge } from 'tailwind-merge';
  import HeaderButton from './header-button.svelte';
  let open = true;
  let solutions = true;

  function closeMenu() {
    open = false;
  }
</script>

<header>
  <nav class="m-auto flex max-w-6xl items-center justify-between px-4 py-6 md:px-0">
    <img src="/logo.png" alt="" />
    <ul class="hidden gap-8 text-sm text-primary-600 md:flex">
      <li><a href="/">Home</a></li>
      <li><a href="/#solucoes">Soluções </a></li>
      <li><a href="/#projetos">Projetos</a></li>
      <li><a href="/#como-fazemos">Como fazemos</a></li>
      <li><a href="/sobre-nos">Sobre nós</a></li>
    </ul>
    <HeaderButton class="hidden min-w-36 md:block">Entrar em contato</HeaderButton>
    <HeaderButton
      class="flex h-11 w-11 items-center justify-center p-0 md:hidden"
      on:click={() => (open = !open)}
    >
      {#if open}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M15.2806 14.2194C15.3503 14.289 15.4056 14.3718 15.4433 14.4628C15.481 14.5539 15.5004 14.6514 15.5004 14.75C15.5004 14.8485 15.481 14.9461 15.4433 15.0372C15.4056 15.1282 15.3503 15.2109 15.2806 15.2806C15.2109 15.3503 15.1282 15.4056 15.0372 15.4433C14.9461 15.481 14.8485 15.5004 14.75 15.5004C14.6514 15.5004 14.5539 15.481 14.4628 15.4433C14.3718 15.4056 14.289 15.3503 14.2194 15.2806L7.99999 9.0603L1.78061 15.2806C1.63988 15.4213 1.44901 15.5004 1.24999 15.5004C1.05097 15.5004 0.860095 15.4213 0.719365 15.2806C0.578634 15.1399 0.499573 14.949 0.499573 14.75C0.499573 14.551 0.578634 14.3601 0.719365 14.2194L6.93968 7.99999L0.719365 1.78061C0.578634 1.63988 0.499573 1.44901 0.499573 1.24999C0.499573 1.05097 0.578634 0.860095 0.719365 0.719365C0.860095 0.578634 1.05097 0.499573 1.24999 0.499573C1.44901 0.499573 1.63988 0.578634 1.78061 0.719365L7.99999 6.93968L14.2194 0.719365C14.3601 0.578634 14.551 0.499573 14.75 0.499573C14.949 0.499573 15.1399 0.578634 15.2806 0.719365C15.4213 0.860095 15.5004 1.05097 15.5004 1.24999C15.5004 1.44901 15.4213 1.63988 15.2806 1.78061L9.0603 7.99999L15.2806 14.2194Z"
            fill="white"
          />
        </svg>
      {:else}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
        >
          <path
            d="M18 7C18 7.19891 17.921 7.38968 17.7803 7.53033C17.6397 7.67098 17.4489 7.75 17.25 7.75H0.75C0.551088 7.75 0.360322 7.67098 0.21967 7.53033C0.0790178 7.38968 0 7.19891 0 7C0 6.80109 0.0790178 6.61032 0.21967 6.46967C0.360322 6.32902 0.551088 6.25 0.75 6.25H17.25C17.4489 6.25 17.6397 6.32902 17.7803 6.46967C17.921 6.61032 18 6.80109 18 7ZM0.75 1.75H17.25C17.4489 1.75 17.6397 1.67098 17.7803 1.53033C17.921 1.38968 18 1.19891 18 1C18 0.801088 17.921 0.610322 17.7803 0.46967C17.6397 0.329018 17.4489 0.25 17.25 0.25H0.75C0.551088 0.25 0.360322 0.329018 0.21967 0.46967C0.0790178 0.610322 0 0.801088 0 1C0 1.19891 0.0790178 1.38968 0.21967 1.53033C0.360322 1.67098 0.551088 1.75 0.75 1.75ZM17.25 12.25H0.75C0.551088 12.25 0.360322 12.329 0.21967 12.4697C0.0790178 12.6103 0 12.8011 0 13C0 13.1989 0.0790178 13.3897 0.21967 13.5303C0.360322 13.671 0.551088 13.75 0.75 13.75H17.25C17.4489 13.75 17.6397 13.671 17.7803 13.5303C17.921 13.3897 18 13.1989 18 13C18 12.8011 17.921 12.6103 17.7803 12.4697C17.6397 12.329 17.4489 12.25 17.25 12.25Z"
            fill="white"
          />
        </svg>
      {/if}
    </HeaderButton>
  </nav>
  {#if open}
    <div class="min-h-screen border-t border-zinc-200 p-4">
      <ul class="mb-8 flex flex-col gap-8 border-b border-zinc-200 pb-8 text-sm text-primary-600">
        <li><a href="/" on:click={closeMenu}>Home</a></li>
        <li>
          <button
            class="flex items-center gap-2"
            on:click={() => {
              solutions = !solutions;
              closeMenu();
            }}
          >
            Soluções
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              class={twMerge(solutions ? 'rotate-180' : '')}
            >
              <path
                d="M11.3538 1.35375L6.35375 6.35375C6.30732 6.40024 6.25217 6.43712 6.19147 6.46228C6.13077 6.48745 6.06571 6.5004 6 6.5004C5.9343 6.5004 5.86923 6.48745 5.80853 6.46228C5.74783 6.43712 5.69269 6.40024 5.64625 6.35375L0.646253 1.35375C0.552433 1.25993 0.499725 1.13269 0.499725 1C0.499725 0.867321 0.552433 0.740073 0.646253 0.646253C0.740074 0.552433 0.867321 0.499725 1 0.499725C1.13269 0.499725 1.25993 0.552433 1.35375 0.646253L6 5.29313L10.6463 0.646253C10.6927 0.599798 10.7479 0.562948 10.8086 0.537807C10.8693 0.512665 10.9343 0.499725 11 0.499725C11.0657 0.499725 11.1308 0.512665 11.1915 0.537807C11.2521 0.562948 11.3073 0.599798 11.3538 0.646253C11.4002 0.692708 11.4371 0.747859 11.4622 0.808555C11.4873 0.869252 11.5003 0.934306 11.5003 1C11.5003 1.0657 11.4873 1.13076 11.4622 1.19145C11.4371 1.25215 11.4002 1.3073 11.3538 1.35375Z"
                fill="#270E67"
              />
            </svg>
          </button>
          {#if solutions}
            <div class="mt-6 bg-primary-100 px-4 py-6">
              <ul class="flex flex-col gap-6">
                <li>
                  <a href="/#implantação" class="flex items-center gap-3" on:click={closeMenu}>
                    <div class="h-8 w-8 rounded-md bg-white p-1.5">
                      <img src="/cart.svg" alt="" />
                    </div>
                    Implantação de ecommerce
                  </a>
                </li>
                <li>
                  <a href="/#ux-ui" class="flex items-center gap-3" on:click={closeMenu}>
                    <div class="h-8 w-8 rounded-md bg-white p-1.5">
                      <img src="/wand.svg" alt="" />
                    </div>
                    UX/UI Design
                  </a>
                </li>
                <li>
                  <a href="/#suporte" class="flex items-center gap-3" on:click={closeMenu}>
                    <div class="h-8 w-8 rounded-md bg-white p-1.5">
                      <img src="/wish.svg" alt="" />
                    </div>
                    Suporte & Evolução
                  </a>
                </li>
                <li>
                  <a href="/#marketing" class="flex items-center gap-3" on:click={closeMenu}>
                    <div class="h-8 w-8 rounded-md bg-white p-1.5">
                      <img src="/marketing.svg" alt="" />
                    </div>
                    Marketing Digital
                  </a>
                </li>
              </ul>
            </div>
          {/if}
        </li>
        <li><a href="/#projetos" on:click={closeMenu}>Projetos</a></li>
        <li><a href="/#como-fazemos" on:click={closeMenu}>Como fazemos</a></li>
        <li><a href="/sobre-nos" on:click={closeMenu}>Sobre nós</a></li>
      </ul>
      <HeaderButton class="w-full md:block">Entrar em contato</HeaderButton>
    </div>
  {/if}
</header>

<style>
  a,
  button {
    font-weight: 500;
  }
</style>
