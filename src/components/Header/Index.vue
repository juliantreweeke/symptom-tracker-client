<script>
import styles from "./styles.css";
import EN from "../../en.json";
import { sessionStore } from "../../utils/storage";
import { SESSION_STORAGE_KEYS } from "../../constants";

export default {
  styles,
  name: "Header",
  EN,
  methods: {
    logUserOut() {
      sessionStore.removeItem(SESSION_STORAGE_KEYS.JWT);
      this.$router.push("/");
    }
  },
  computed: {
    loggedIn() {
      return sessionStore.getItem(SESSION_STORAGE_KEYS.JWT);
    }
  }
};
</script>

<template>
  <header class="header flex flex-align">
    <nav>
      <ul>
        <li>
          <router-link class="logo" to="/">{{
            $options.EN.PRODUCT_NAME
          }}</router-link>
        </li>
        <li v-if="loggedIn">
          <button v-on:click="logUserOut">Log out</button>
        </li>
      </ul>
    </nav>
  </header>
</template>
