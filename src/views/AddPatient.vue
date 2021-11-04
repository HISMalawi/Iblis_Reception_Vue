<template>

    <BaseLayout pageTitle="Add Patient">

 
  <div class="add-patient max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
    <div class="max-w-3xl mx-auto">
      <!-- Content goes here -->
      <form class="space-y-8 divide-y divide-gray-200">
        <div class=" bg-white py-8 px-4 shadow sm:rounded-lg space-y-8 divide-y divide-gray-200 sm:space-y-5">
        

          <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
            <div>
              <h3 class="text-4xl mb-10 leading-6 font-bold text-gray-900">
                Patient Information
              </h3>
              
            </div>
            <div class="space-y-6 sm:space-y-5">
              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="first-name" class="block text-lg font-medium text-gray-700 sm:mt-px sm:pt-2">
                  First name
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="last-name" class="block text-lg font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Last name
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="email" class="block text-lg font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Email address
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <input id="email" name="email" type="email" autocomplete="email" class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="country" class="block text-lg font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Country
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <select id="country" name="country" autocomplete="country-name" class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                    <option>Malawi</option>
                  </select>
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="street-address" class="block text-lg font-medium text-gray-700 sm:mt-px sm:pt-2">
                  Street address
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="city" class="block text-lg font-medium text-gray-700 sm:mt-px sm:pt-2">
                  City
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <input type="text" name="city" id="city" autocomplete="address-level2" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="region" class="block text-lg font-medium text-gray-700 sm:mt-px sm:pt-2">
                  State / Province
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <input type="text" name="region" id="region" autocomplete="address-level1" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="postal-code" class="block text-lg font-medium text-gray-700 sm:mt-px sm:pt-2">
                  ZIP / Postal code
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-5">
          <div class="flex justify-end pt-5">
            <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-3xl font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Cancel
            </button>
            <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-3xl font-medium rounded-md text-white bg-gray-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-500">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>




      

    </BaseLayout> 

</template>

<script lang="ts">
import BaseLayout from '../components/base/BaseLayout.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddPatient',
  components: {
    BaseLayout,
  }
});
</script>

<style>
.add-patient input {

  font-size: 28px;
  padding: 10px;
  border: 1px solid rgba(128, 128, 128, 0.39);

}

.add-patient select {

  font-size: 28px;
  padding: 10px;

}
</style>
