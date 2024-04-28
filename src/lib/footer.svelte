<script>
  import Button from './button.svelte';
  import Input from './input.svelte';
  import Textarea from './textarea.svelte';
</script>

<section class="relative bg-primary-700 py-36">
  <img src="/grass-bottom-dark.svg" alt="" class="absolute -top-1 left-0 w-full" />
  <div class="m-auto grid max-w-4xl grid-cols-2 gap-x-32 gap-y-6">
    <div class="flex flex-col justify-between">
      <div>
        <span class="text-primary-300">ENTRE EM CONTATO!</span>
        <h2 class="mb-28 text-4xl font-bold text-white">
          Pronto para elevar o padrão do seu comércio digital?
        </h2>
      </div>
      <ul>
        <li class="pb-8">
          <span class="text-sm text-primary-200">TELEFONE</span>
          <p class="text-lg font-semibold text-white">+ 55 11 95922 7525</p>
        </li>
        <li class="pb-8">
          <span class="text-sm text-primary-200">WHATSAPP</span>
          <p class="text-lg font-semibold text-white">+ 55 11 95922 7525</p>
        </li>
        <li class="pb-8">
          <span class="text-sm text-primary-200">E-MAIL</span>
          <p class="text-lg font-semibold text-white">contato@welookup.com.br</p>
        </li>
      </ul>
    </div>
    <form class="flex flex-col gap-5">
      <Input placeholder="Nome" />
      <Input placeholder="Empresa" />
      <Input placeholder="E-mail" />
      <Input placeholder="Telefone" />
      <Textarea placeholder="Mensagem" />
    </form>
    <div class="col-span-2 ml-auto">
      <Button>Enviar</Button>
    </div>
  </div>
</section>
<footer class="border-t border-primary-600 bg-primary-700 py-12">
  <div class="m-auto flex max-w-4xl items-center justify-between text-sm text-primary-300">
    <span class="text-sm">{new Date().getFullYear()} © WeLookUP</span>
    <ul class="flex gap-8">
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
