<template>
  <div>Hello {{name}}</div>
</template>

<script lan>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const name = "World";
    const test = () => {
      console.log("Hi");
    };
    return {
      name,
      test
    };
  },
});
</script>
