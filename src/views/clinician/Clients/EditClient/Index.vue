<script>
import SideBarLayout from "../../../../components/SideBarLayout/Index.vue";
import styles from "./styles.css";
import swal from "sweetalert";
import FormContainer from "../../../../components/FormContainer/Index.vue";

export default {
  name: "EditClient",
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
        notes: ""
      },
      id: this.$route.params.id
    };
  },
  created() {
    this.$store.dispatch("getClientById", this.id);
  },
  computed: {
    clientData() {
      return this.$store.state.clientsById[this.id];
    },
    clientViewURL() {
      return `/clients/view/${this.id}`;
    },
    clinicianId() {
      return this.$store.state.loggedInUser._id;
    }
  },
  watch: {
    clientData() {
      this.client = this.clientData;
    }
  },
  methods: {
    async editClient() {
      try {
        const payload = {
          ...this.client,
          clinician: this.clinicianId
        };
        const client = await this.$store.dispatch("editClient", payload);
        if (client.error) {
          swal("Error", "Something went wrong, please try again", "error");
        } else if (client._id) {
          swal("Success", "Client created", "success");
          this.$router.push(this.clientViewURL);
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
    <div class="edit-client">
      <FormContainer heading="Edit Client" variant v-bind:submit="editClient">
        <label for="firstName">First name:</label>
        <input type="text" id="firstName" v-model="client.firstName" required />

        <label for="lastName">Last name:</label>
        <input type="text" id="lastName" v-model="client.lastName" required />

        <label for="email">Email address:</label>
        <input type="email" id="email" v-model="client.email" required />

        <label for="gender">Gender:</label>
        <select name="gender" id="gender" v-model="client.gender" required>
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
  </SideBarLayout>
</template>
