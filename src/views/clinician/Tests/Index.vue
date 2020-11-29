<script>
import SideBarLayout from "../../../components/SideBarLayout/Index.vue";
import styles from "./styles.css";

export default {
  name: "Tests",
  styles,
  components: {
    SideBarLayout
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<template>
  <SideBarLayout>
    <div class="tests">
      Clinician Tests
    </div>
  </SideBarLayout>
</template>
