<template>
  <div>
    <h1>日付入力</h1>
    <client-only>
      <date-picker
        :v-model="calendarDate"
        :language="ja"
        :format="customFormatter"
        @closed="pickerClosedChange"
        placeholder="日付"
      />
    </client-only>
  </div>
</template>

<script>
import { ja } from 'vuejs-datepicker/dist/locale'
import moment from 'moment'

export default {
  data() {
    return {
      calendarDate: '',
      ja: ja,
    }
  },
  methods: {
    customFormatter(date) {
      return moment(date).format('YYYY-MM-DD');
    },
    pickerClosedChange() {
      // pickerを閉じた時v-modelのformatを変更
      if (this.calendarDate) {
         this.calendarDate = moment(this.calendarDate).format('YYYY-MM-DD')
      }
    },
  },
}
</script>

<style>
</style>
