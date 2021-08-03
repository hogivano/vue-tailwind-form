import { useRouter } from 'vue-router';

export default {
  name: 'Home',
  setup() {
    const router = useRouter();
    const onStart = () => {
      router.push({ name: 'Biodata' });
    };
    return {
      onStart,
    };
  },
};
