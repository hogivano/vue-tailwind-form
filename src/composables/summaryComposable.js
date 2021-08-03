import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

export default {
  name: 'Summary',
  setup() {
    const router = useRouter();
    const store = useStore();
    const biodata = computed(() => store.state.biodataForm);
    const packages = computed(() => store.state.packages);
    const countries = computed(() => store.state.countries);

    const backHistory = () => {
      router.go(-1);
    };

    const submit = () => {
      store.dispatch('defaultBiodata');
      router.push({
        name: 'Success',
      });
    };
    return {
      biodata,
      packages,
      countries,
      backHistory,
      submit,
    };
  },
};
