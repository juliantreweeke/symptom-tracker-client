<script>
import styles from "./styles.css";
export default {
  styles,
  name: "Button",
  props: {
    text: {
      required: true,
      type: String
    }
  }
};
</script>

<template>
  <button class="button">
    {{ text }}
  </button>
</template>
