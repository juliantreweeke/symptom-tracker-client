<script>
import SideBarLayout from "../../../components/SideBarLayout/Index.vue";
import styles from "./styles.css";

export default {
  name: "Dashboard",
  styles,
  components: {
    SideBarLayout
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    loggedInUser() {
      return this.$store.state.loggedInUser;
    }
  }
};
</script>

<template>
  <SideBarLayout>
    <div class="dashbaord">
      Clinician Dashboard
      {{ loggedInUser }}
    </div>
  </SideBarLayout>
</template>
