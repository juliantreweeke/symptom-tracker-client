<script>
import styles from "./styles.css";

export default {
  styles,
  name: "SideBar",
  components: {},
  props: {
    routes: {
      required: true,
      type: Array
    }
  }
};
</script>

<template>
  <nav class="side-bar flex flex-align">
    <ul class="side-bar-ul">
      <router-link
        v-for="(route, index) in routes"
        v-bind:to="route.route"
        v-bind:key="index"
      >
        <li class="side-bar-list">
          {{ route.title }}
        </li>
      </router-link>
    </ul>
  </nav>
</template>
