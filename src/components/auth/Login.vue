<script>
import swal from "sweetalert";

export default {
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
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          style="margin-top:70px;height:auto;padding-top:100px !important;"
          @submit.prevent="loginUser"
        >
          <input
            type="text"
            id="email"
            placeholder="Email"
            v-model="login.email"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            v-model="login.password"
          />
          <p>
            Dont have an account??<router-link to="/register"
              >click here</router-link
            >
          </p>
          <center>
            <button type="submit">
              Sign in
            </button>
          </center>
        </form>
      </div>
    </div>
  </div>
</template>
