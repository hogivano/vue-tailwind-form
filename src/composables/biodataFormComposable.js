import {
  reactive,
  ref,
  watch,
  computed,
  onMounted,
} from 'vue';
import {
  useRouter,
} from 'vue-router';
import {
  useStore,
} from 'vuex';

export default {
  name: 'BiodataForm',
  setup() {
    const router = useRouter();
    const store = useStore();
    const dataForm = reactive({
      name: '',
      age: '',
      country: '',
      package: -1,
      premium: '',
      expectedPrice: 0,
    });
    const currentCurrency = ref('');
    const countries = computed(() => store.state.countries);
    const packages = computed(() => store.state.packages);

    const calculatePriceTotal = (packageIdx) => {
      dataForm.premium = `${(Number(dataForm.expectedPrice) + (dataForm.expectedPrice * packages.value[packageIdx].addPrice) / 100)}`;
    };

    const onCheck = (idx) => {
      dataForm.package = idx;
      calculatePriceTotal(idx);
    };

    const checkForm = () => {
      if (dataForm.age > 100) {
        router.push({
          name: 'Error',
        });
        return;
      }
      const listObj = Object.values(dataForm);
      if (listObj.filter((item) => item !== '').length === 6) {
        store.dispatch('setBiodataForm', dataForm);
        router.push({
          name: 'Summary',
        });
      }
    };
    const calculateAddPrice = (addPrice) => `(+${((dataForm.expectedPrice * addPrice) / 100)}${currentCurrency.value}, ${addPrice}%)`;
    const nextPage = () => {
      checkForm();
    };

    const mappingState = () => {
      const biodata = store.state.biodataForm;
      dataForm.name = biodata.name;
      dataForm.age = biodata.age;
      dataForm.expectedPrice = biodata.expectedPrice;
      dataForm.country = biodata.country;
      dataForm.package = biodata.package;
      dataForm.premium = biodata.premium;
    };

    watch(() => dataForm.country, (newVal) => {
      if (newVal !== '') {
        currentCurrency.value = countries.value[newVal].currency;
      }
    });

    watch(() => dataForm.expectedPrice, () => {
      console.log('dataForm.package', dataForm.package);
      if (dataForm.package >= 0) {
        calculatePriceTotal(dataForm.package);
      }
    });

    onMounted(() => {
      mappingState();
    });

    return {
      dataForm,
      router,
      countries,
      packages,
      currentCurrency,
      calculateAddPrice,
      onCheck,
      nextPage,
    };
  },
};
