<script>
import { mapState } from "vuex";

export default {
  name: "Landing",
  components: {},
  async mounted() {
    this.$store.dispatch("getAllAssessments");
    this.$store.dispatch("getAllClinicians");
    console.log(this.assessments);
  },
  computed: {
    ...mapState(["assessments"]),
    ...mapState(["clinicians"])
  },
  methods: {}
};
</script>

<template>
  <div>Admin bruh {{ clinicians }}</div>
</template>
