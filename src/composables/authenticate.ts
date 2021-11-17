import { AuthRequest } from "@/interfaces/AuthRequest";
import { User } from "@/interfaces/User";
import { ref } from "vue";
import { store } from "@/store";


const authenticate = () => {

    const axios = store.getters.getAxios()

    const errorMsg = ref<string>('');

    const login = (creditials :AuthRequest) => {

        axios.post('/users/authenticate', {
            username: creditials.username,
            password: creditials.password
          })
          .then(function (response: any) {
            console.log(response);
          })
          .catch(function (error: any) {
            console.log(error);
          });

    }
    
    return { login }
}


export default authenticate 