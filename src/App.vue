<script>
import styles from "./styles/global.css";

export default {
  styles,
  mounted() {
    const token = localStorage.getItem("jwt");
    if (token) {
      this.$store.dispatch("getLoggedInUser");
    }
  }
};
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>
