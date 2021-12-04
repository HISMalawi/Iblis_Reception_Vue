import { ref } from "vue";
import { useStore } from "@/store";
import { OrderResult } from "@/interfaces/OrderResult";

const store = useStore();

const orders = ref<OrderResult[]>([]);

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

          code.value = response.data.code;

          const responseData = response.data.data;

          if (code.value == "200") {

            orders.value = responseData[0]


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
  
  return { search, message, orders};
};

export default SearchOrder;
