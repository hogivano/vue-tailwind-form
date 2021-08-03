<template>
<section class="Success">
  <h1 class="py-2 font-semibold">Horray!!</h1>
  <p class="text-gray-900 font-light">Your request it's processed.</p>
  <button @click="router.push({ name: 'Home' });"
    class="bg-gray-900 mt-10 text-white rounded-md py-3 px-6">
    Home
  </button>
</section>
</template>

<script>
import {
  useRouter,
} from 'vue-router';

export default {
  name: 'Success',
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>
