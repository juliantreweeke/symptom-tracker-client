<script>
import swal from "sweetalert";
import Header from "../../components/Header/Index.vue";
import FormContainer from "../../components/FormContainer/Index.vue";
import styles from "./styles.css";
import { sessionStore } from "../../utils/storage";
import { SESSION_STORAGE_KEYS, ROLES } from "../../constants";

export default {
  styles,
  components: {
    Header,
    FormContainer
  },
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await this.$store.dispatch("loginUser", this.login);
        const { user, token } = response;

        if (!token) {
          return;
        }

        sessionStore.setItem(SESSION_STORAGE_KEYS.JWT, token);
        sessionStore.setItem(SESSION_STORAGE_KEYS.ROLE, user.role);

        this.$store.dispatch("getLoggedInUser");

        if (user.role === ROLES.CLINICIAN) {
          this.$router.push("/dashboard");
        }

        if (user.role === ROLES.CLIENT) {
          this.$router.push("/assessments");
        }
      } catch (err) {
        swal("Error", "Something Went Wrong", "error");
        console.log(err.response);
      }
    }
  }
};
</script>

<template>
  <div>
    <Header />
    <div class="login">
      <FormContainer
        heading="Sign in"
        v-bind:submit="loginUser"
        buttonText="Sign in"
      >
        <label for="email">Your email address:</label>
        <input type="email" id="email" v-model="login.email" required />
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="login.password" />
        <template v-slot:help-text>
          <p class="help-text">
            Dont have an account?
            <router-link to="/register">Sign up here</router-link>
          </p>
        </template>
      </FormContainer>
    </div>
  </div>
</template>
