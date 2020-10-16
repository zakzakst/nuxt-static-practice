<template>
  <div>
    <h1>バリデーション</h1>
    <validation-observer ref="observer" v-slot="{ invalid }" immediate>
      <validation-provider v-slot="{ errors, valid }" rules="numeric|required" name="ほほ" :events="['blur']">
        <input v-model="id" class="input" type="text" data-vv-validate-on="change" />
        <p v-if="valid && id.length">OK</p>
        <p v-show="errors.length && submitted" class="help is-danger">
          {{ errors[0] }}
        </p>
      </validation-provider>
      <button @click="check" :disabled="invalid">チェック</button>
    </validation-observer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      submitted: false,
    }
  },
  methods: {
    check() {
      this.$refs.observer.validate().then(result => {
        console.log('submit', result);
        this.submitted = true;
      });
    }
  },
}
</script>

<style>
</style>
