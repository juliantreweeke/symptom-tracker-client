<script>
import Button from "../../../../components/Button/Index.vue";
import SideBarLayout from "../../../../components/SideBarLayout/Index.vue";
import styles from "./styles.css";

export default {
  name: "ClientView",
  styles,
  components: {
    Button,
    SideBarLayout
  },
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    client() {
      return this.$store.state.clientsById[this.id];
    },
    editURL() {
      return `/clients/edit/${this.id}`;
    }
  },
  created() {
    this.$store.dispatch("getClientById", this.id);
  }
};
</script>

<template>
  <SideBarLayout>
    <div class="client-view">
      <h1>View Client</h1>
      <template v-if="client && client._id">
        {{ client._id }}
        <p>{{ client.firstName }} {{ client.lastName }}</p>
        <p>{{ client.DOB }}</p>
        <p>{{ client.notes }}</p>
        <p>{{ client.status }}</p>
      </template>
      <div v-else>Loading</div>
      <router-link v-bind:to="editURL">
        <Button text="Edit client" />
      </router-link>
    </div>
  </SideBarLayout>
</template>
