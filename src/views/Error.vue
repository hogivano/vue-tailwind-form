<template>
<section class="Error">
  <h1 class="py-2 font-semibold">Ooops</h1>
  <p class="text-gray-900 font-light">Your age is over our accepted limit.</p>
  <p class="text-gray-900 font-light">We are sorry but we cannot proccess you now</p>
  <button @click="router.go(-1);" class="bg-gray-900 mt-10 text-white rounded-md py-3 px-6">
    Ok :(
  </button>
</section>
</template>

<script>
import {
  useRouter,
} from 'vue-router';

export default {
  name: 'Error',
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>
