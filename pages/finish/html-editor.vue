<template>
  <div>
    <div>
      <button
        @click="setPreviewMode(false)"
        :class="{'disabled': !preview}"
      >コード</button>
      <button
        @click="setPreviewMode(true)"
        :class="{'disabled': preview}"
      >プレビュー</button>
    </div>
    <textarea
      v-if="!preview"
      v-model="html"
      cols="30"
      rows="10"
      placeholder="HTMLを入力してください。"
    ></textarea>
    <div
      v-else
      v-html="html"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preview: false,
      html: '',
    }
  },
  methods: {
    setPreviewMode(flag) {
      this.preview = flag;
    }
  }
}
</script>

<style scoped>
.disabled {
  opacity: .5;
}
</style>
