<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>MJ</h3>
    <SecondTest />
  </div>
</template>



<script>
import { defineComponent } from 'vue';
import { SecondTest } from '@of-jest-issue/second-library-nx';
export default defineComponent({
  name: 'About',
  components: {
    SecondTest,
  },
});
</script>
