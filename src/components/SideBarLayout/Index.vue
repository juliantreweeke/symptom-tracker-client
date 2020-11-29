<script>
import Header from "../Header/Index.vue";
import SideBar from "../SideBar/Index.vue";
import { SIDE_BAR_NAVIGATION } from "../../constants";

import styles from "./styles.css";

export default {
  SIDE_BAR_NAVIGATION,
  styles,
  name: "SideBarLayout",
  components: {
    Header,
    SideBar
  },
  props: {}
};
</script>

<template>
  <div class="side-bar-layout">
    <Header />
    <SideBar v-bind:routes="$options.SIDE_BAR_NAVIGATION" />
    <main>
      <slot></slot>
    </main>
  </div>
</template>
