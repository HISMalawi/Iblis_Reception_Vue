<template>
  <div class="login">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <div class="field has-text-centered">
            <figure class="image login-image is-inline-block">
              <img src="../assets/lock.png" />
              <p class="help is-danger is-size-6">{{ message }}</p>
            </figure>
          </div>
          <form @submit.prevent="Signin">
            <div class="field">
              <p class="control has-icons-right">
                <input
                  class="input is-small"
                  type="text"
                  placeholder="Username"
                  v-model="authCred.username"
                />

                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <input
                  class="input is-small"
                  type="password"
                  placeholder="Password"
                  v-model="authCred.password"
                />
              </p>
            </div>

            <div class="field mb-4">
              <div class="control">
                <div class="select is-small is-fullwidth">
                  <select v-model="selectedWard">
                    <option :value="selectedWard">
                      {{ selectedWard.name }}
                    </option>
                    <option :value="ward" v-for="ward in Wards" :key="ward.id">
                      {{ ward.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field">
              <p class="control">
                <button
                  type="submit"
                  class="button is-small is-success is-fullwidth"
                >
                  Login
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch, watchEffect } from "vue";
import { AuthRequest } from "@/interfaces/AuthRequest";
import { useRouter } from "vue-router";
import { useStore } from "@/store";
import Authenticate from "@/composables/authenticate";
import GetAllWards from "@/composables/getAllWards";
import { Ward } from "@/interfaces/Ward";

export default defineComponent({
  name: "Login",
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();

    const selectedWard = ref<Ward>({
      id: 0,
      name: "--- Select Ward / Location ---",
    });

    const { Wards, fetchWards } = GetAllWards();

    fetchWards();

    const { login, message } = Authenticate();

    const authCred: AuthRequest = reactive({
      username: "",
      password: "",
    });

    const Signin = () => {
      if (selectedWard.value.id == 0) {
        message.value = "Requesting Ward / Location is required"
      } else {
        login(authCred, selectedWard.value);
      }
    };

    watchEffect(() => {
      if (store.getters.isLoggedIn) {
        router.push("/");
      }
    });

    watch(
      () => [selectedWard.value],
      () => {
        message.value = ""
      }
    );

    return { authCred, Signin, message, Wards, selectedWard };
  },
});
</script>

<style>
.login {
  width: 400px;
}

.login .container {
  margin: 30px;
}

.login-image {
  width: 120px;
}
</style>
