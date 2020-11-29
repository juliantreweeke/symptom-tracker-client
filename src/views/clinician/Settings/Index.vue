<script>
import SideBarLayout from "../../../components/SideBarLayout/Index.vue";
import styles from "./styles.css";

export default {
  name: "Settings",
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
    <div class="settings">
      Clinician Settings
    </div>
  </SideBarLayout>
</template>
