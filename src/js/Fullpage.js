import $ from 'jquery'
import 'fullpage.js'

class Fullpage {
  constructor (target, options = {}) {
    if (!target) {
      console.log('Please pass a container')
      throw new Error('Please pass a container')
    }
    this.target = target
    this.options = options
    this.instance = null
  }

  init () {
    if (!this.instance) {
      $(this.target).fullpage(this.options)
      console.log('[Fullpage.js] Initialized')
    }
  }
}

export default Fullpage
