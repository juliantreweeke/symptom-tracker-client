<script>
import swal from "sweetalert";
import FormContainer from "../../components/FormContainer/Index.vue";
import styles from "./styles.css";

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
        const { token } = response;
        localStorage.setItem("jwt", token);
        if (token) {
          swal("Success", "Login Successful", "success");
          this.$router.push("/home");
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
    <input type="text" id="email" placeholder="Email" v-model="login.email" />
    <input
      type="password"
      id="password"
      placeholder="Password"
      v-model="login.password"
    />
    <p>
      Dont have an account??<router-link to="/register">click here</router-link>
    </p>
  </FormContainer>
</template>
