<script>
import styles from "./styles.css";
import EN from "../../en.json";
export default {
  styles,
  name: "Header",
  EN,
  methods: {
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    }
  },
  computed: {
    loggedIn() {
      return localStorage.getItem("jwt");
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
