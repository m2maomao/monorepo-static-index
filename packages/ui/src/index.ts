import type { App } from 'vue'
import { UiButton } from './components'
import './styles/index.scss'

export { UiButton }

export default {
  install: (app: App) => {
    app.component('UiButton', UiButton)
  }
}
