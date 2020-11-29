<script>
import styles from "./styles/global.css";
import { sessionStore } from "./utils/storage.js";
import { SESSION_STORAGE_KEYS } from "./constants";

export default {
  styles,
  mounted() {
    const token = sessionStore.getItem(SESSION_STORAGE_KEYS.JWT);
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
