<script>
import swal from "sweetalert";
import { ROLES } from "../../../constants";
import EN from "../../../en.json";
import Header from "../../../components/Header/Index.vue";
import FormContainer from "../../../components/FormContainer/Index.vue";
import styles from "./styles.css";

export default {
  styles,
  EN,
  components: {
    Header,
    FormContainer
  },
  data() {
    return {
      register: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: ROLES.CLINICIAN
      }
    };
  },
  computed: {
    heading() {
      return `Sign up to ${EN.PRODUCT_NAME}`;
    }
  },
  methods: {
    async registerUser() {
      try {
        const response = await this.$store.dispatch(
          "registerUser",
          this.register
        );
        const { token } = response;
        if (token) {
          localStorage.setItem("jwt", token);
          this.$router.push("/");
          swal("Success", "Registration Was successful", "success");
        } else {
          swal("Error", "Something Went Wrong", "error");
        }
      } catch (err) {
        let error = err.response;
        if (error.status == 409) {
          swal("Error", error.data.message, "error");
        } else {
          swal("Error", error.data.err.message, "error");
        }
      }
    }
  }
};
</script>

<template>
  <div>
    <Header />
    <div class="register">
      <FormContainer
        v-bind:heading="heading"
        v-bind:submit="registerUser"
        buttonText="Sign up"
      >
        <label for="firstName">First name:</label>
        <input
          type="text"
          id="firstName"
          v-model="register.firstName"
          required
        />
        <label for="lastName">Last name:</label>
        <input type="text" id="lastName" v-model="register.lastName" required />
        <label for="email">Your email address:</label>
        <input type="email" id="email" v-model="register.email" required />
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="register.password" />
        <template v-slot:help-text>
          <p class="help-text">
            Already have an account?
            <router-link to="/">Log in here</router-link>
          </p>
        </template>
      </FormContainer>
    </div>
  </div>
</template>
