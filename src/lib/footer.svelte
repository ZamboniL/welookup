<script>
  import Button from './button.svelte';
  import Input from './input.svelte';
  import Textarea from './textarea.svelte';
</script>

<section class="relative overflow-x-clip bg-primary-700 pb-9 pt-20 md:py-36">
  <img src="/grass-bottom-dark.svg" alt="" class="absolute -top-1 left-0 min-w-full max-w-none" />
  <div
    class="m-auto flex max-w-5xl grid-cols-[370px_1fr] flex-col gap-x-32 gap-y-8 px-4 md:grid md:gap-y-6 md:px-0"
  >
    <div class="md:order-1 md:max-w-96">
      <span class="text-primary-300">ENTRE EM CONTATO!</span>
      <h2 class="text-4xl font-bold text-white md:mb-28">
        Pronto para elevar o padrão do seu comércio digital?
      </h2>
    </div>
    <ul class="order-3">
      <li class="pb-8">
        <span class="text-sm text-primary-200">TELEFONE</span>
        <p class="text-lg font-semibold text-white">+ 55 11 95922 7525</p>
      </li>
      <li class="pb-8">
        <span class="text-sm text-primary-200">WHATSAPP</span>
        <p class="text-lg font-semibold text-white">+ 55 11 95922 7525</p>
      </li>
      <li>
        <span class="text-sm text-primary-200">E-MAIL</span>
        <p class="text-lg font-semibold text-white">contato@welookup.com.br</p>
      </li>
    </ul>
    <form class="flex flex-col gap-5 md:order-2 md:row-span-2">
      <Input placeholder="Nome" />
      <Input placeholder="Empresa" />
      <Input placeholder="E-mail" />
      <Input placeholder="Telefone" />
      <Textarea placeholder="Mensagem" />
    </form>
    <div class="col-span-2 md:order-4 md:ml-auto">
      <Button class="w-full md:w-auto">Enviar</Button>
    </div>
  </div>
</section>
<footer class="border-t border-primary-600 bg-primary-700 py-8 md:py-12">
  <div
    class="m-auto flex max-w-4xl flex-col items-center justify-between gap-8 text-sm text-primary-300 md:flex-row md:gap-0"
  >
    <span class="order-4 text-sm md:order-1">{new Date().getFullYear()} © WeLookUP</span>
    <ul class="flex flex-col items-center gap-8 md:flex-row">
      <li><a href="/#">Sobre Nós</a></li>
      <li><a href="/#">Vagas</a></li>
      <li><a href="/#">Política de Privacidade</a></li>
    </ul>
    <div class="flex gap-8">
      <a href="/#">
        <img src="/instagram.svg" alt="Instagram" />
      </a>
      <a href="/#">
        <img src="/linkedin.svg" alt="LinkedIn" />
      </a>
    </div>
  </div>
</footer>
