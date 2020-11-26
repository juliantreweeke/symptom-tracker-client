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
  <div class="form-container flex-grid flex-center margin-auto">
    <form @submit.prevent="submit" class="form flex-grid flex-center flex-col">
      <h1 v-if="heading.length">{{ heading }}</h1>
      <slot></slot>
      <button type="submit">
        {{ buttonText }}
      </button>
    </form>
  </div>
</template>
