import { ref } from "vue";
import { useStore } from "@/store";
import { Specimen } from "@/interfaces/Specimen";
import TokenCheck from "@/composables/tokenCheck";

const { logout } = TokenCheck()

const store = useStore();

const Specimens = ref<Specimen[]>([]);

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
      })
      .then(function (response: any) {
        if (response.statusText === "OK") {

          if (response.data == "Invalid Token") logout()

          code.value = response.data.code;

          const responseData = response.data.data;


          if (code.value == "200") {

            Specimens.value = responseData

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
 
  return { fetchOrders, message, Specimens, code };
};

export default getSiteOrders;
