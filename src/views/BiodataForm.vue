<template>
<section class="BiodataForm">
  <h1 class="py-3 font-semibold">Tell us about yourself</h1>
  <div class="md:w-2/3 lg:w-1/3 w-full flex flex-col space-y-4 mx-auto">
    <div class="input-field">
      <label class="text-left">Name</label>
      <input name="name" v-model="dataForm.name" type="text"
      class="border-2 py-2 w-full border-gray-300 px-2 rounded-md shadow-sm"
      placeholder="Add Text" />
    </div>
    <div class="input-field">
      <label class="text-left">Age</label>
      <input name="age" v-model="dataForm.age" type="number"
      class="border-2 py-2 w-full border-gray-300 px-2 rounded-md shadow-sm" />
    </div>
    <div class="input-field">
      <label class="text-left">Expected Price</label>
      <input name="expetedPrice" v-model="dataForm.expectedPrice" type="number"
      class="border-2 py-2 w-full border-gray-300 px-2 rounded-md shadow-sm" />
    </div>
    <div class="input-field ">
      <label>Where do you live</label>
      <select name="country" class="bg-white py-3 px-2 rounded-md w-full border-2 border-gray-300"
      v-model="dataForm.country" @change="changeCountry">
        <option value="">Select Country</option>
        <option v-for="(item, index) in countries" :key="index" :value="index">
          {{ item.name }}
        </option>
      </select>
    </div>
    <div class="radio-select flex items-center flex-col space-y-3 py-8">
      <div class="input-field flex items-center mr-auto space-x-2 cursor-pointer"
      v-for="(item, index) in packages" :key="`pack-${index}`">
        <input type="radio" @change="onCheck(index)" id="check" class="w-4 h-4"
        :checked="dataForm.package === index" />
        <span>
          {{ item.name }}
          {{ (item.added && currentCurrency) ? calculateAddPrice(item.addPrice) : '' }}
        </span>
      </div>
    </div>
  </div>
  <div class="calculate w-full my-20">
    <h3 class="font-semibold">
      Your premium is:
      <span class="px-4">
        {{ new Number(dataForm.premium).toLocaleString("id-ID") }}{{ currentCurrency }}
      </span>
    </h3>
  </div>
  <div class="action-button">
    <button @click="router.go(-1);" class="mx-2 border-2 py-2 border-gray-400 py-3 px-8 rounded-md">
      Back
    </button>
    <button @click="nextPage()" class="mx-2 bg-gray-900 text-white rounded-md py-3 px-8">
      Next
    </button>
  </div>
</section>
</template>

<script src="@/composables/biodataFormComposable.js"></script>
