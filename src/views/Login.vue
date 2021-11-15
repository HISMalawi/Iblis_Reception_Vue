<template>
  <div class="login">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <div class="field has-text-centered">
            <figure class="image  is-inline-block">
              <img src="../assets/lock.png" />
            </figure>
          </div>
          <form @submit.prevent="Authenticate">
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input class="input is-medium" type="text" placeholder="Username" v-model="authCred.username" />
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input
                  class="input is-medium"
                  type="password"
                  placeholder="Password"
                  v-model="authCred.password"
                />
              </p>
            </div>

            <div class="field">
              <p class="control">
                <button type="submit" class="button is-medium is-success is-fullwidth">
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
import { defineComponent, reactive } from "vue"
import { AuthRequest } from "@/interfaces/AuthRequest"
import { useRouter } from "vue-router"
// import { useStore } from "@/store"

export default defineComponent({
  name: "Login",
  components: {},
  setup() {

      // const store = useStore()
      const router = useRouter()

      const authCred: AuthRequest  = reactive({
        username:"",
        password:""
      });

      const Authenticate = () => {

        console.log(authCred.username)
        console.log(authCred.password)

        router.push('/')

      }

      return { authCred , Authenticate }
  }
});
</script>

<style>
  .login {
    width: 600px;
  }

  .login .container {
    margin: 30px;
  }
</style>
