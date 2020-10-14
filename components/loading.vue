<template>
  <transition name="loading-slide">
    <div class="loading" v-if="loading">
      <transition name="loading-img-fade" @after-leave="showPage">
        <img src="/img/loader.gif" alt="ページをロード中です" v-if="loadingImg" />
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    loadingImg: true,
  }),
  methods: {
    showPage() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    start() {
      this.loading = true;
    },
    finish() {
      this.loadingImg = false;
    },
  }
}
</script>

<style>
.loading {
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  background: #000;
}

.loading-img-fade-enter-active,
.loading-img-fade-leave-active {
  transition: opacity .5s ease;
}
.loading-img-fade-enter,
.loading-img-fade-leave-to {
  opacity: 0;
}


.loading-slide-leave-active {
  transition: transform .5s ease;
  transform: translateX(0);
}
.loading-slide-leave-to {
  transform: translateX(100%);
}
</style>
