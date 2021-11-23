import { ref } from "vue";
import { useStore } from "@/store";
import { Patient } from "@/interfaces/Patient";

const store = useStore();

const patients = ref<Patient[]>([]);

const SearchPatient = () => {

  const axios = ref(store.getters.axios)

  const token = ref(store.getters.user.token)

  const patient: Patient = {
    address: "P.O Box 2543, Lilongwe",
    created_at: "2021-09-02T15:55:00.000Z",
    created_by: 1,
    deleted_at: "",
    dob: "1993-11-28T22:00:00.000Z",
    dob_estimated: 0,
    email: "bchidambe@gmail.com",
    external_patient_number: "",
    first_name_code: "B465",
    gender: 0,
    id: 237129,
    last_name_code: "9351",
    name: "Blessings Chidambe",
    patient_number: "237129",
    phone_number: "+265884730733",
    updated_at: "1993-11-28",
  }

  // const patients = ref();

  const message = ref<string>("");
  const code = ref<string>("");

  const search = (value: string) => {
    axios.value
      .post("/patients/search", {
        token: token.value,
        value: value
      })
      .then(function (response: any) {
        if (response.statusText === "OK") {

          code.value = response.data.code;

          const responseData = response.data.data;

          // console.log(responseData[0][0])

          if (code.value == "200") {

            patients.value = responseData[0]

            // console.log(responseData[0])
              
            // user.username = responseData[0].username;
            // user.email = responseData[0].email;
            // user.name = responseData[0].name;
            // user.role = responseData[0].role;
            // user.token = responseData[0].token;

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

  return { search, message, patients };
};

export default SearchPatient;
