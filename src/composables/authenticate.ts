import { AuthRequest } from "@/interfaces/AuthRequest";
import { User } from "@/interfaces/User";
import { reactive, ref } from "vue";
import { store } from "@/store";

const authenticate = () => {
  const axios = store.getters.getAxios();

  const user: User = reactive({
    username: "",
    email: "",
    name: "",
    role: "",
  });

  const message = ref<string>("");
  const code = ref<string>("");

  const login = (creditials: AuthRequest) => {
    axios
      .post("/users/authenticate", {
        username: creditials.username,
        password: creditials.password,
      })
      .then(function (response: any) {

        if (response.statusText === "OK") {
          code.value = response["data"].code;

          if (code.value == "200") {
            user.username = response["data"].username;
            user.email = response["data"].email;
            user.name = response["data"].name;
            user.role = response["data"].role;

            message.value = response["data"].message;
            
            store.commit("LOGIN", user)

          } else {
            message.value = response["data"].message;
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
