import { ref } from "vue";
import { useStore } from "@/store";
import { OrderResult } from "@/interfaces/OrderResult";
import TokenCheck from "@/composables/tokenCheck";
import { TestResult } from "@/interfaces/TestResult";

const { logout } = TokenCheck()

const store = useStore();

const orders = ref<OrderResult[]>([]);

const tests = ref<TestResult[]>([]);

const SearchOrder = () => {

  const axios = ref(store.getters.axios)

  const token = ref(store.getters.user.token)

  const message = ref<string>("");
  const code = ref<string>("");

  const search = (value: string) => {
    axios.value
      .post("/orders/search", {
        token: token.value,
        tracking_number: value
      })
      .then(function (response: any) {
        if (response.statusText === "OK") {

          if (response.data == "Invalid Token") logout()

          code.value = response.data.code;

          const responseData = response.data.data;

          if (code.value == "200") {

            orders.value = responseData.orders

            tests.value = responseData.tests

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
  
  return { search, message, orders, tests};
};

export default SearchOrder;
