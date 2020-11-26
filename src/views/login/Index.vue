<script>
import swal from "sweetalert";
import FormContainer from "../../components/FormContainer/Index.vue";
import styles from "./styles.css";
import { ROLES } from "../../constants";

export default {
  styles,
  components: {
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
        localStorage.setItem("jwt", token);
        localStorage.setItem("role", user.role);
        if (!token) {
          return;
        }
        swal("Success", "Login Successful", "success");

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
  <FormContainer
    heading="Sign in"
    v-bind:submit="loginUser"
    buttonText="Sign in"
  >
    <label for="email">Your email address:</label>
    <input type="email" id="email" v-model="login.email" required />
    <label for="password">Password:</label>
    <input type="password" id="password" v-model="login.password" />
    <p>
      Dont have an account??<router-link to="/register">click here</router-link>
    </p>
  </FormContainer>
</template>
