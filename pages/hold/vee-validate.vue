<template>
  <div>
    <h1>バリデーション</h1>
    <validation-observer ref="obs">
      <validation-provider v-slot="{ errors }" rules="numeric" name="ほほ" :events="['blur']">
        <input v-model="id" class="input" type="text" />
        <p v-show="errors.length" class="help is-danger">
          {{ errors[0] }}
        </p>
      </validation-provider>
    </validation-observer>
    <button @click="check">チェック</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      password: ''
    }
  },
  methods: {
    check() {
      // this.$validator.validate().then(success => {
      //   console.log(success);
      // });
    }
  },
  created() {
  }
}
</script>

<style>
</style>
