<script>
import Button from "../../../../components/Button/Index.vue";
import SideBarLayout from "../../../../components/SideBarLayout/Index.vue";
import styles from "./styles.css";

export default {
  name: "TestList",
  styles,
  components: {
    Button,
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
    <div class="test-list">
      Test list
      <router-link to="/test/create">
        <Button text="Create new test" />
      </router-link>
    </div>
  </SideBarLayout>
</template>
