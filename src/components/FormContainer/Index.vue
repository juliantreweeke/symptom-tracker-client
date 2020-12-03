<script>
import styles from "./styles.css";
import Button from "../Button/Index.vue";
export default {
  styles,
  name: "FormContainer",
  components: {
    Button
  },
  props: {
    buttonText: {
      default: "Submit",
      type: String
    },
    heading: {
      default: "",
      type: String
    },
    variant: {
      default: false,
      type: Boolean
    },
    submit: {
      required: true,
      type: Function
    }
  }
};
</script>

<template>
  <div class="form-container">
    <form @submit.prevent="submit" class="form flex-col">
      <h1
        v-bind:class="[variant ? 'primary-heading' : 'secondary-heading']"
        class="form-heading"
        v-if="heading.length"
      >
        {{ heading }}
      </h1>
      <slot></slot>
      <Button type="submit" v-bind:text="buttonText" />
      <slot name="help-text"></slot>
    </form>
  </div>
</template>
