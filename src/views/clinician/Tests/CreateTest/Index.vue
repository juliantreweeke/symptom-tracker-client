<script>
import FormContainer from "../../../../components/FormContainer/Index.vue";
import SideBarLayout from "../../../../components/SideBarLayout/Index.vue";
import styles from "./styles.css";
import swal from "sweetalert";

export default {
  name: "CreateTest",
  styles,
  components: {
    FormContainer,
    SideBarLayout
  },
  data() {
    return {
      test: {
        frequency: "",
        question: "",
        name: ""
      }
    };
  },
  methods: {
    async createTest() {
      try {
        const test = await this.$store.dispatch("createTest", this.test);
        if (test.error) {
          swal("Error", "Something went wrong, please try again", "error");
        } else if (test._id) {
          swal("Success", "Client created", "success");
          this.$router.push("/clients");
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
  <SideBarLayout>
    <div class="create-test">
      <FormContainer
        heading="Create new test"
        variant
        v-bind:submit="createTest"
        buttonText="Create test"
      >
        <p>Create test and check client view as you go.</p>

        <label for="name">First name:</label>
        <input type="text" id="name" v-model="test.name" required />

        <label for="frequency">Gender:</label>
        <select
          name="frequency"
          id="frequency"
          v-model="test.frequency"
          required
        >
          <option disabled value="">Please select one</option>
          <option value="WEEKLY">Weekly</option>
          <option value="FORTNIGHTLY">Fortnightly</option>
          <option value="MONTHLY">Monthly</option>
        </select>

        <label for="question">question:</label>
        <input type="test" id="question" v-model="test.question" required />
      </FormContainer>
    </div>
  </SideBarLayout>
</template>
