<template>
<section class="Summary">
  <div class="mb-10 flex flex-col space-y-3">
    <h1 class="py-3 font-semibold">Summary</h1>
    <h3 class="font-semibold">{{ biodata.name }},</h3>
    <p class="text-gray-900 font-light">Name: {{ biodata.name }}</p>
    <p class="text-gray-900 font-light">Age: {{ biodata.age }}</p>
    <p class="text-gray-900 font-light"
      v-if="countries.filter((item, index) => index === biodata.country).length > 0">
      Where do you live: {{ countries.filter((item, index) => index === biodata.country)[0].name }}
    </p>
    <p class="text-gray-900 font-light"
      v-if="packages.filter((item, index) => index === biodata.package).length > 0">
      Package: {{ packages.filter((item, index) => index === biodata.package)[0].name }}
    </p>
    <p class="text-gray-900 font-light"
      v-if="countries.filter((item, index) => index === biodata.country).length > 0">
      Premium: {{
        new Number(biodata.premium).toLocaleString('id-ID')
      }}{{ countries.filter((item, index) => index === biodata.country)[0].currency }}
    </p>
  </div>
  <div class="action-button">
    <button @click="backHistory()"
    class="mx-2 border-2 py-2 border-gray-400 py-3 px-8 rounded-md">
      Back
    </button>
    <button @click="submit()" class="mx-2 bg-gray-900 text-white rounded-md py-3 px-8">
      Buy
    </button>
  </div>
</section>
</template>

<script src="@/composables/summaryComposable.js" ></script>
