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
  methods: {},
  mounted() {
    this.$store.dispatch("getAllClientsById");
  }
};
</script>

<template>
  <SideBarLayout>
    <div class="client-list">
      <ul>
        <li v-for="(client, index) in clients" v-bind:key="index">
          {{ client.firstName }}
        </li>
      </ul>

      <router-link to="clients/create">
        <Button text="Add new client" />
      </router-link>
    </div>
  </SideBarLayout>
</template>
