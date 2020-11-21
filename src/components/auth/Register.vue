<script>
import swal from "sweetalert";

export default {
  data() {
    return {
      register: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };
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
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <form
          style="margin-top:70px;height:auto;padding-top:100px !important;"
          @submit.prevent="registerUser"
        >
          <input
            type="text"
            id="firstName"
            placeholder="First name"
            v-model="register.firstName"
            required
          />
          <input
            type="text"
            id="lastName"
            placeholder="Last name"
            v-model="register.lastName"
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            v-model="register.email"
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            v-model="register.password"
          />
          <p>
            Already have an account??<router-link to="/"
              >click here</router-link
            >
            <center>
              <button class="btn btn-primary btn-block w-75 my-4" type="submit">
                Sign in
              </button>
            </center>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
