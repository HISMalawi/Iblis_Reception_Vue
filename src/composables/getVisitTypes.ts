import { ref } from "vue";
import { useStore } from "@/store";
import { VisitType } from "@/interfaces/VisitType";

const store = useStore();

const visitTypes = ref<VisitType[]>([]);

const getVisitTypes = () => {

  const axios = ref(store.getters.axios)

  const token = ref(store.getters.user.token)

  const message = ref<string>("");
  const code = ref<string>("");

  const fetch = () => {
    axios.value
      .post("/visit_types", {
        token: token.value,
      })
      .then(function (response: any) {
        if (response.statusText === "OK") {

          code.value = response.data.code;

          const responseData = response.data.data;

          // console.log(responseData[0][0])

          if (code.value == "200") {

            visitTypes.value = responseData[0]

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

  return { fetch, message, visitTypes };
};

export default getVisitTypes;
