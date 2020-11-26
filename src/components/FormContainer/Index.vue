<script>
import styles from "./styles.css";
export default {
  styles,
  name: "FormContainer",
  props: {
    buttonText: {
      default: "Submit",
      type: String
    },
    heading: {
      default: "",
      type: String
    },
    submit: {
      required: true,
      type: Function
    }
  }
};
</script>

<template>
  <div class="form-container flex-grid flex-center width-33 margin-auto">
    <h1 v-if="heading.length">{{ heading }}</h1>
    <form @submit.prevent="submit" class="flex-grid flex-center flex-col">
      <slot></slot>
      <button type="submit">
        {{ buttonText }}
      </button>
    </form>
  </div>
</template>
