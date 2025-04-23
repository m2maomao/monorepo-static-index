import Button from './src/components/Button/Button.vue'

export { Button }

export default {
  install: (app: any) => {
    app.component('UiButton', Button)
  }
}