import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  configure
} from 'vee-validate'
import { required, email, min, max, digits, regex, confirmed, image, size, ext, numeric, oneOf } from 'vee-validate/dist/rules'

extend('required', required)
extend('email', email)
extend('max', max)
extend('min', min)
extend('digits', digits)
extend('regex', regex)
extend('confirmed', confirmed)
extend('image', image)
extend('size', size)
extend('ext', ext)
extend('numeric', numeric)
extend('oneOf', oneOf)

export default function VeeValidatePlugin ({ app }) {
  configure({
    defaultMessage: (_, values) =>
      app.i18n.t(`validations.${values._rule_}`, values)
  })
}
// Register it globally
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
