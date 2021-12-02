import { AuthRequest } from "@/interfaces/AuthRequest";
import { User } from "@/interfaces/User";
import { ref } from "vue";
import { MutationTypes, useStore } from "@/store";

const store = useStore();

const authenticate = () => {

  const axios = ref(store.getters.axios);

  let user: User = {
    id: 0,
    username: "",
    email: "",
    name: "",
    role: "",
    token: "",
  };

  const message = ref<string>("");
  const code = ref<string>("");

  const login = (creditials: AuthRequest) => {
    axios.value
      .post("/users/authenticate", {
        username: creditials.username,
        password: creditials.password,
      })
      .then(function (response: any) {
        if (response.statusText === "OK") {
          code.value = response.data.code;

          const responseData = response.data.data;


          if (code.value == "200") {
       
            user = responseData[0];

            message.value = response.data.message;
            
            store.commit(MutationTypes.LOGIN, user);
          } else {
            message.value = response.data.message;
          }

        }
      })
      .catch(function (error: any) {
        message.value = error.message;
      });
  };

  return { login, message };
};

export default authenticate;
