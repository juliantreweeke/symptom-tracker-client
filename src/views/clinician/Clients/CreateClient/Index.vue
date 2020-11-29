<script>
import SideBarLayout from "../../../../components/SideBarLayout/Index.vue";
import { ROLES } from "../../../../constants";
import styles from "./styles.css";
import swal from "sweetalert";
import FormContainer from "../../../../components/FormContainer/Index.vue";

export default {
  name: "CreateClient",
  styles,
  components: {
    FormContainer,
    SideBarLayout
  },
  data() {
    return {
      client: {
        firstName: "",
        lastName: "",
        email: "",
        DOB: "",
        gender: "",
        role: ROLES.CLIENT,
        notes: ""
      }
    };
  },
  computed: {
    userId() {
      return this.$store.state.loggedInUser._id;
    }
  },
  methods: {
    async createClient() {
      try {
        const payload = {
          ...this.client,
          clinician: this.userId
        };
        const client = await this.$store.dispatch("createClient", payload);
        if (client.error) {
          swal("Error", "Something went wrong, please try again", "error");
        } else if (client._id) {
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
    <div class="create-client">
      <FormContainer
        heading="Add New Client"
        variant
        v-bind:submit="createClient"
        buttonText="Save new client"
      >
        <label for="firstName">First name:</label>
        <input type="text" id="firstName" v-model="client.firstName" required />

        <label for="lastName">Last name:</label>
        <input type="text" id="lastName" v-model="client.lastName" required />

        <label for="email">Email address:</label>
        <input type="email" id="email" v-model="client.email" required />

        <label for="gender">Gender:</label>
        <select name="gender" id="gender" v-model="client.gender">
          <option disabled value="">Please select one</option>
          <option value="MALE">Male</option>
          <option value="FEMALE">Female</option>
          <option value="OTHER">Other</option>
        </select>

        <label for="DOB">Date of birth:</label>
        <input type="date" id="DOB" v-model="client.DOB" required />

        <label for="notes">Notes:</label>
        <textarea id="notes" v-model="client.notes" />
      </FormContainer>
    </div>
    {{ userId }}
  </SideBarLayout>
</template>
