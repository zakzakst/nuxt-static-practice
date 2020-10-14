<template>
  <div>
    <h1>bootstrapIcon</h1>
    <alarm-svg class="bootstrap-icon" />
  </div>
</template>

<script>
import AlarmSvg from '@/static/bootstrap-icons/alarm.svg'

export default {
  components: {
    AlarmSvg
  }
}
</script>

<style>
.bootstrap-icon {
  width: 200px;
  height: 200px;
}
</style>
