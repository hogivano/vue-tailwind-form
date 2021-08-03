<template>
  <section class="Home">
    <h1 class="header py-2 font-semibold">Hello There!</h1>
    <p class="mb-8">Let's buy some items. It is going to take only a few steps</p>
    <button class="bg-gray-900 text-white rounded-md py-3 px-14"
    @click="onStart()">
      Start
    </button>
  </section>
</template>
<script src="@/composables/homeComposable.js" ></script>
