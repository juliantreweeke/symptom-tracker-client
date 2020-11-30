<script>
import Button from "../../../../components/Button/Index.vue";
import SideBarLayout from "../../../../components/SideBarLayout/Index.vue";
import { ROLES } from "../../../../constants";
import styles from "./styles.css";

export default {
  name: "ClientList",
  styles,
  components: {
    Button,
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
    clients() {
      return this.$store.state.clients;
    }
  },
  methods: {
    viewClient(id) {
      this.$router.push(`clients/view/${id}`);
    }
  }
};
</script>

<template>
  <SideBarLayout>
    <div class="client-list">
      <h1>Clients</h1>
      <p>Select your client or create a new client.</p>
      <div class="client-list-table-container">
        <table class="client-list-table">
          <thead>
            <tr>
              <th>Client name</th>
              <th>Birth date</th>
              <th>Tests</th>
              <th>Notes</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-on:click="viewClient(client._id)"
              v-for="(client, index) in clients"
              v-bind:key="index"
            >
              <td>{{ client.firstName }} {{ client.lastName }}</td>
              <td>{{ client.DOB }}</td>
              <td>0</td>
              <td>{{ client.notes }}</td>
              <td>{{ client.status || "unconfirmed" }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <router-link to="clients/create">
        <Button text="Add new client" />
      </router-link>
    </div>
  </SideBarLayout>
</template>
