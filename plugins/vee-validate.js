import Vue from 'vue'
import { ValidationProvider, ValidationObserver, localize, extend, configure } from 'vee-validate'
import { required, numeric, email } from 'vee-validate/dist/rules'
// import ja from 'vee-validate/dist/locale/ja.json'
import ja from '@/lang/vee-validate-ja'

// ルールを追加：https://logaretm.github.io/vee-validate/guide/rules.html#rules
extend('required', required)
extend('numeric', numeric)
extend('email', email)

// メッセージを設定
localize('ja', ja)

// コンポーネントの登録
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
