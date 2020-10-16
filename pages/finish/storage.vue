<template>
  <div>
    <h1>ストレージ</h1>
    <p class="text-uppercase">テキスト : {{ $store.state.persistedstate.text }}</p>
    <p class="text-uppercase">カウント : {{ $store.state.persistedstate.count }}</p>
    <input v-model="text" type="text">
    <button @click="changText">テキストを設定</button>
    <button @click="counter">カウントを追加</button>
    <button @click="clearText">ストレージを削除</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    counter() {
      this.$store.commit('persistedstate/increment');
    },
    changText() {
      this.$store.commit('persistedstate/changText', this.text);
    },
    clearText() {
      localStorage.clear();
    }
  }
};
</script>

<style>
</style>
