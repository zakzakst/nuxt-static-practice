<template>
  <div>
    {{ env }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      env: process.env.ENV_MODE
    }
  },
  created() {
    console.log(process.env.ENV_MODE);
  }
}
</script>

<style>
</style>
