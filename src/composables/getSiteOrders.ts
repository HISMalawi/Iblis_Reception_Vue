import { ref, watch } from "vue";
import { useStore } from "@/store";
import { Specimen } from "@/interfaces/Specimen";
import { TestResult } from "@/interfaces/TestResult";
import TokenCheck from "@/composables/tokenCheck";

const { logout } = TokenCheck()

const store = useStore();

const Specimens = ref<Specimen[]>([]);
const TestWithResults = ref<TestResult[]>([]);
const SpecimensWithResults = ref<number[]>([]);

const BGSpecimens = ref<Specimen[]>([]);
const BGTestWithResults = ref<TestResult[]>([]);
const BGSpecimensWithResults = ref<number[]>([]);

const getSiteOrders = () => {

  const axios = ref(store.getters.axios)

  const token = ref(store.getters.user.token)

  const ward = ref(store.getters.selectedWard.name)

  const message = ref<string>("");
  const code = ref<string>("");

  const fetchOrders = () => {

    axios.value
      .post("/ward/orders", {
        token: token.value,
        ward:ward.value,
        from:store.getters.fromDate,
        to:store.getters.toDate
      })
      .then(function (response: any) {
        if (response.statusText === "OK") {

          if (response.data == "Invalid Token") logout()

          code.value = response.data.code;

          const responseData = response.data.data;


          if (code.value == "200") {

            TestWithResults.value = responseData.tests_with_results

            TestWithResults.value.forEach(test => {

              SpecimensWithResults.value.push(test.specimen_id)
              
            });

            Specimens.value = responseData.specimens

            for (let index = 0; index < Specimens.value.length; index++) {

              if (SpecimensWithResults.value.includes(Specimens.value[index].id)) {

                  Specimens.value[index] = Object.assign(Specimens.value[index], { class:"results-ready"})
              
              } else {

                Specimens.value[index] = Object.assign(Specimens.value[index], { class:"from-db"})
                
              }
              
              
            }

            message.value = response.data.message;

          } else {

            Specimens.value.length = 0
            message.value = response.data.message;
          }

        }
      })
      .catch(function (error: any) {
        message.value = error.message;
      });
  };

  const BGfetchOrders = () => {

    axios.value
      .post("/ward/orders", {
        token: token.value,
        ward:ward.value,
        from:store.getters.fromDate,
        to:store.getters.toDate
      })
      .then(function (response: any) {
        if (response.statusText === "OK") {

          if (response.data == "Invalid Token") logout()

          code.value = response.data.code;

          const responseData = response.data.data;


          if (code.value == "200") {

            BGTestWithResults.value = responseData.tests_with_results

            BGTestWithResults.value.forEach(test => {

              BGSpecimensWithResults.value.push(test.specimen_id)
              
            });

            BGSpecimens.value = responseData.specimens

            for (let index = 0; index < BGSpecimens.value.length; index++) {

              if (BGSpecimensWithResults.value.includes(BGSpecimens.value[index].id)) {

                  BGSpecimens.value[index] = Object.assign(BGSpecimens.value[index], { class:"results-ready"})
              
              } else {

                BGSpecimens.value[index] = Object.assign(BGSpecimens.value[index], { class:"from-db"})
                
              }
              
              
            }

            message.value = response.data.message;

          } else {

            message.value = response.data.message;
          }

        }
      })
      .catch(function (error: any) {
        message.value = error.message;
      });
  };
 

  setInterval(() => {

    BGfetchOrders();

  }, 10000);

  watch(

      () => [BGSpecimens.value],
      () => {

        
          Specimens.value = BGSpecimens.value


      }
  );
 
  return { fetchOrders, Specimens };
};

export default getSiteOrders;
