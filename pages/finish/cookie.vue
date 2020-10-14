<template>
  <div>
    <h1>クッキー</h1>
    <input v-model="value1" type="text">
    <input v-model="value2" type="text">
    <input v-model="value3" type="text">
    <button @click="setCookies">クッキーを設定</button>
    <button @click="removeCookies">クッキーを削除</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      cookieOptions: {
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      }
    }
  },
  methods: {
    getCookies() {
      const cookies = this.$cookies.getAll();
      return cookies;
    },
    setFormValue() {
      const cookies = this.getCookies();
      this.value1 = cookies.value1;
      this.value2 = cookies.value2;
      this.value3 = cookies.value3;
    },
    setCookies() {
      const cookies = [
        { name: 'value1', value: this.value1, opts: this.cookieOptions },
        { name: 'value2', value: this.value2, opts: this.cookieOptions },
        { name: 'value3', value: this.value3, opts: this.cookieOptions },
      ]
      this.$cookies.setAll(cookies);
    },
    removeCookies() {
      this.$cookies.removeAll();
    }
  },
  created() {
    this.setFormValue();
  }
}
</script>

<style>
</style>
